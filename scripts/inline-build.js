const fs = require('fs');
const path = require('path');

function readFileSafe(p) {
  try {
    return fs.readFileSync(p, 'utf8');
  } catch (e) {
    return '';
  }
}

function inlineAssets() {
  const buildDir = path.join(process.cwd(), 'build');
  const indexPath = path.join(buildDir, 'index.html');

  if (!fs.existsSync(indexPath)) {
    console.error('Build output not found. Run `npm run build` first.');
    process.exit(1);
  }

  let html = fs.readFileSync(indexPath, 'utf8');

  // Inline CSS links (detect .css hrefs regardless of attribute order)
  const cssHrefRegex = /<link[^>]+href=\"([^\"]+\.css)\"[^>]*>/g;
  const cssMatches = [...html.matchAll(cssHrefRegex)];
  let combinedCSS = '';
  const cssFiles = [];
  cssMatches.forEach((m) => {
    const tag = m[0];
    // only treat it as a stylesheet if rel=stylesheet appears in the tag
    if (/rel=\"stylesheet\"|rel=\'stylesheet\'|rel=stylesheet/i.test(tag)) {
      cssFiles.push(m[1]);
    }
  });

  cssFiles.forEach((href) => {
    const filePath = path.join(buildDir, href.replace(/^\//, ''));
    combinedCSS += readFileSafe(filePath) + '\n';
    // remove the original link tag occurrences
    const escaped = href.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    html = html.replace(new RegExp(`<link[^>]+href=\\\"${escaped}\\\"[^>]*>`, 'g'), '');
    html = html.replace(new RegExp(`<link[^>]+href=\\\'${escaped}\\\'[^>]*>`, 'g'), '');
  });

  if (combinedCSS) {
    // remove sourceMappingURL comments so the browser won't request map files
    combinedCSS = combinedCSS.replace(/\/\*# sourceMappingURL=[^*]*\*\//g, '');
    const headClose = '</head>';
    html = html.replace(headClose, `<style>${combinedCSS}</style>\n${headClose}`);
  }

  // Inline JS in order of appearance
  const scriptRegex = /<script[^>]+src="([^"]+)"[^>]*><\/script>/g;
  let scriptMatch;
  const scriptFiles = [];
  while ((scriptMatch = scriptRegex.exec(html)) !== null) {
    scriptFiles.push(scriptMatch[1]);
  }

  let combinedJS = '';
  scriptFiles.forEach((src) => {
    const filePath = path.join(buildDir, src.replace(/^\//, ''));
    combinedJS += readFileSafe(filePath) + '\n';
  });

  if (combinedJS) {
    // remove sourceMappingURL comments that would trigger map requests
    combinedJS = combinedJS.replace(/\/\/\# sourceMappingURL=.*$/gm, '');
    // Remove external script tags
    html = html.replace(scriptRegex, '');
    // Insert combined script before closing body
    const bodyClose = '</body>';
    html = html.replace(bodyClose, `<script>${combinedJS}</script>\n${bodyClose}`);
  }

  // Write the modified index.html back
  fs.writeFileSync(indexPath, html, 'utf8');
  console.log('Inlined CSS and JS into build/index.html — single-file bundle created.');
}

inlineAssets();
