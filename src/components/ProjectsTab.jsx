import React, { Suspense } from 'react';
import github from '../assets/github.png';
import BlockscapeImg from '../assets/BlockscapeImg.png';
import BugTrackerImg from '../assets/BugTrackerImg.png';
import PasswordBuddyImg from '../assets/PasswordBuddyImg.png';
import ChurroImg from '../assets/ChurroImg.png';
import Quakes_Page from '../assets/Quakes_Page.png';
import EONET_Globe from '../assets/EONETGlobe.png';

const projects = [
  {
    name: 'NASA EONET Map',
    description:
      'Interactive 3D globe displaying real-time natural events from NASA’s EONET (Earth Observatory Natural Event Tracker) API.',
    tags: [
      { name: 'React', color: 'pink-text-gradient' },
      { name: 'Three.js', color: 'pink-text-gradient' },
      { name: 'Javascript', color: 'green-text-gradient' },
    ],
    image: EONET_Globe,
    source_code_link: 'https://github.com/kmanikon/NASA-EONET-Visual',
    linkUrl: 'https://kmanikon.github.io/NASA-EONET-Visual/',
  },
  {
    name: 'Blockscape',
    description:
      'Browser-based 3D sandbox built with React and Three.js. Uses a PostgreSQL server hosted on Supabase to store user projects.',
    tags: [
      { name: 'React', color: 'pink-text-gradient' },
      { name: 'Three.js', color: 'pink-text-gradient' },
      { name: 'PostgresSQL', color: 'blue-text-gradient' },
      { name: 'Javascript', color: 'green-text-gradient' },
    ],
    image: BlockscapeImg,
    source_code_link: 'https://github.com/kmanikon/Blockscape',
    linkUrl: 'https://kmanikon.github.io/Blockscape/',
  },
  {
    name: 'Churro Network Visualizer',
    description:
      'Visualization tool for displaying network elements. Makes use of URL-based state for quick sharing and rollback.',
    tags: [
      { name: 'React', color: 'pink-text-gradient' },
      { name: 'React Flow', color: 'pink-text-gradient' },
      { name: 'Javascript', color: 'green-text-gradient' },
    ],
    image: ChurroImg,
    source_code_link: 'https://github.com/kmanikon/Network-Visualizer',
    linkUrl: 'https://kmanikon.github.io/Network-Visualizer/?flow=N4Igdg9gJgpgziAXAbVASyk80YFoDKArmAAT4wAOJATAIw0AM1ArDdYi4s-QOICyAFVwNmDBiQAUAYRhgALgCcAhgBsSAESUBPFWgDmACzkkBaALYwAlCAA0IOVoowsAY0Jw5EM7ZAUIcNDk0CDAkUAAPJAA2AA4GADoo2gBmaijUhloogHZkgBY7LSRk7ITaPJjs6mp82m5s5gBfOyglOSUwkBUlACMYFSwABSkfNBcQgUdnRBBhnwN-OTAlCyw+LRJhklofdxgFLABpPgAqM5PR8dDEUABrGCLEMEIVFTsFGAAzJGfXuwoFBAKAgbo1miAPG13FgAPJgXRgZx2fxYADqaDAUAgAHcEHYzEoXFg8gBBLgAIUQUSkiGy6kQMQAoogAJwAMR8cGxgRcBgA+n4FHIsNlaKUQGCbOhMDNILACMQyJQaPRqExWNUOMwuKx+EIRGJJDJ5Mo1JodPojCZzFYfA4nK53J5vP9-IFgtcIkhaLQYsx4mJMswooHytRCkhmDEWfEWTUWXlMlFqKU0uDWu1Ot0+gMZgAlCCEOT7S4TKZYAtFkvvQvFhR85arGYCeDGSt17Y+QVyEEgFlxagFEgxNXMUuekD3R6-N4gD7fJ4vWcAoEg4CSiHtOTQmZwhFIkBmHC5kAkhRoSEkRkw-AkPLxfLxagcuyfNAKMzYpQfLC0eL35Iu0BTxxhPG9Bg5SVpSwOU8CIUhyCoOhGBYNgOCiRAGCiEg9WEURxGkWRFFUDRtF0QxjFMCxrDse1phANwPC8Ls3SCEJOkiVlshieIsmDftYkHbIcgjRA8n9BoGGSJIohySpKmodM2g6G4ul6fosHIBQADdqxAMYywdGYtN0g47DgfZTIbFZ6JbDwlR0-ZOzsNAKD5JQoCgD44F7VIH2ofz-zHFyrk6KcfiXd4vgiv5fEBYEwg3SFt17PcMQPFEZnUGAejQJRQhrFR6PwLQ4FwEkoDMDEfGUFxbiwKQpFwP8GFwGNqAlZpoNlHAFQQ5VkLVVDNTSLgWRwwQ8MNQiTRI81yKtKjbVo8sZkY50WICNiJ04rIWQSdI6gaGI8jSBTROoFk-xOuIZOYbiUwTJTM1U7MNPzWs9IMsBJiMkB2z0wEq3rRt6MZKA9BgEgAYUEhMhYoVe1oDqQvY1TwsXWL5xi5d4rXJKtx3EA0sRHwj1gE8ACliFcpy+AADTVPIfDfD8vx-GY1SfPNAP+YCIFArByR4QZOqlfSZWweV4KVJDVXVNCU0QZGJv1fCjSI01SItCjrWou1VoYp1mNdLaPQ471kz-fs8hDMU6G45HRNwKJ-RiZIYjifIbaqWhnpU0A3pPEyvquX7issvSLMckGbLRHKHNMuGdhctyPK8+AkbjXjYl43iGHHMKHhxqKFxnPnV0S8FkqJkmMt7ABVHpiG3NgA2Zwr6NRHKasJer8z7kgSR2MEAF07BgCH4CQVAJawPBYL62WVRQjV2E4bhVamgjjWIs0yMtSibUsXBF5lxCV6GtetR1LeDR3zW5oP3WlpPsUo24Op7pZKIWU5QsFAuHomfRUF9BoKxGtqTeuF74a1mvvHWi1j52m-JDYUPVpagIGvLYa68oG6kmrAmae9tYLSPvrFaf0PCUDJt+e4ChGSYk6HRLA35ATYglHYfK5g2iTyQIoQgMAupzxmAvXq59sGr0VlA3ghD1bEK1vNQ+esrCn3EVguWUiRoYSwnfeRu9FHPyQdRZqx1P5JGSCyD2-9CCAOAeo-qmir7SK4LItW00DFP0QeQ5a9hUEwHQVLOCGjL4QPXjo7CMD9GPwQWQlRNF7CG2oRQWhCh6GMJlKAFhMw2E4k4SAbhBJiwygEUI8WGB55qMwY40JuCb7MAIe4h+8DSHKNflU4JNTwF1NGswcaUSPExNaS-Y+piP4+mTImU6Ni7EwQccvbp18N6NO3nAkhSiRkUL8QoNBczqkLJwUsjCfS9GDJaRs4xvjsmbhofiOh+wMnMMNrkjh4JCm8JKQoQRwiKmiI6UvMBhzFbHP6XIs56yjE+JPiArpQKRrZGVtQU5zSIXePiWMv0EySj3RThCABQC9mdIOVo8JY1kVrMMWi1+KCdkBMJQCyRzj4WIvJQorxcTqWUPosk1J6SmGqWuS8-J7zin8K+UI0ejQgA'  
  },
  {
    name: 'Password Buddy',
    description:
      'Cloud-based password manager with AES-encrypted credentials and session-token security. Hosted on GCP using Docker.',
    tags: [
      { name: 'React', color: 'green-text-gradient' },
      { name: 'Node.js', color: 'pink-text-gradient' },
      { name: 'Javascript', color: 'blue-text-gradient' },
      { name: 'MongoDB', color: 'pink-text-gradient' },
      { name: 'Docker', color: 'pink-text-gradient' },
    ],
    image: PasswordBuddyImg,
    source_code_link: 'https://github.com/kmanikon/Password-Manager',
    linkUrl: 'https://password-buddy.vercel.app/',
  },
  {
    name: 'Bug Tracker',
    description:
      'Mockup project management dashboard for dev teams. Features interactive user metrics, user management, notifications, and a bulletin board.',
    tags: [
      { name: 'ASP.NET', color: 'pink-text-gradient' },
      { name: 'React', color: 'pink-text-gradient' },
      { name: 'C#', color: 'blue-text-gradient' },
      { name: 'Javascript', color: 'green-text-gradient' },
      { name: 'SQLite', color: 'pink-text-gradient' },
      { name: 'Docker', color: 'pink-text-gradient' },
    ],
    image: BugTrackerImg,
    source_code_link: 'https://github.com/kmanikon/Bug-Tracker',
    linkUrl: 'https://bug-tracker-km.vercel.app/login',
  },
  {
    name: 'Quake Search',
    description:
      'Website for visualizing earthquake data collected by the US Geological Survey.',
    tags: [
      { name: 'React', color: 'blue-text-gradient' },
      { name: 'Javascript', color: 'green-text-gradient' },
      { name: 'Tailwind CSS', color: 'pink-text-gradient' },
    ],
    image: Quakes_Page,
    source_code_link: 'https://github.com/kmanikon/Quakes_Updated',
    linkUrl: 'https://quakes-peach.vercel.app/home',
  },
];

const cardStyles = {
  card: {
    background: 'rgba(15, 23, 42, 0.94)',
    border: '1px solid rgba(255,255,255,0.16)',
    borderRadius: '24px',
    padding: '16px',
    width: '100%',
    maxWidth: '420px',
    boxShadow: '0 24px 60px rgba(0,0,0,0.12)',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    height: '240px',
    borderRadius: '20px',
    overflow: 'hidden',
    marginBottom: '18px',
    backgroundColor: 'rgba(148, 163, 184, 0.18)', // grey placeholder, visible until image resolves
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  placeholder: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.76)',
    backdropFilter: 'blur(16px) saturate(180%)',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(15, 23, 42, 0.65)',
    color: '#ffffff',
    opacity: 0,
    transition: 'opacity 200ms ease',
    fontWeight: 700,
    letterSpacing: '0.04em',
  },
  overlayHover: {
    opacity: 1,
  },
  iconButton: {
    position: 'absolute',
    right: '14px',
    top: '14px',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'rgba(15, 23, 42, 0.92)',
    border: '1px solid rgba(255,255,255,0.18)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  icon: {
    width: '40px',
    height: 'auto',
    objectFit: 'contain',
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  content: {
    flex: 1,
  },
  title: {
    color: '#ffffff',
    fontSize: '1.35rem',
    fontWeight: 700,
    margin: '0 0 12px',
  },
  description: {
    color: '#cbd5e1',
    fontSize: '0.95rem',
    lineHeight: '1.7',
    margin: 0,
  },
  tags: {
    marginTop: '24px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  tag: {
    fontSize: '0.9rem',
    fontWeight: 700,
    padding: '8px 12px',
    borderRadius: '999px',
    background: 'rgba(255, 255, 255, 0.14)',
    color: '#f8fafc',
    border: '1px solid rgba(255,255,255,0.12)',
    letterSpacing: '0.01em',
  },
};

// --- Image preloader cache for use with Suspense ---
// React's Suspense only works with things that can "throw a promise."
// <img> tags don't do this natively, so we maintain a small cache here:
// the first time an image is requested we kick off loading + decoding
// and throw the in-flight promise (which Suspense catches and waits on).
// Once resolved, subsequent reads return instantly and render for real.
const imageCache = new Map();

function loadImage(src) {
  if (imageCache.has(src)) {
    return imageCache.get(src);
  }

  const entry = { status: 'pending', src };
  const promise = new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      // decode() ensures the bitmap is fully ready to paint, not just
      // that bytes arrived — this is what prevents any partial/garbled
      // intermediate frame from ever being shown.
      const finish = () => {
        entry.status = 'resolved';
        resolve();
      };
      if (img.decode) {
        img.decode().then(finish).catch(finish);
      } else {
        finish();
      }
    };
    img.onerror = (err) => {
      entry.status = 'rejected';
      reject(err);
    };
  });

  entry.promise = promise;
  imageCache.set(src, entry);
  return entry;
}

function useSuspenseImage(src) {
  const entry = loadImage(src);
  if (entry.status === 'pending') {
    throw entry.promise;
  }
  if (entry.status === 'rejected') {
    // Treat a failed load as "resolved" for rendering purposes — we still
    // render the <img> tag so the browser's native broken-image behavior
    // takes over, rather than suspending forever.
    return;
  }
  return;
}

// Renders the real <img> only once it's confirmed loaded + decoded.
// This component is the thing Suspense actually waits on.
const SuspendedImage = ({ src, alt, style }) => {
  useSuspenseImage(src);
  return <img src={src} alt={alt} style={style} />;
};

const GreyPlaceholder = () => <div style={cardStyles.placeholder} />;

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      style={cardStyles.card}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={cardStyles.imageWrapper}>
        <a href={project.linkUrl} target="_blank" rel="noopener noreferrer">
          <Suspense fallback={<GreyPlaceholder />}>
            <SuspendedImage
              src={project.image}
              alt={project.name}
              style={cardStyles.image}
            />
          </Suspense>
          <div
            style={{
              ...cardStyles.overlay,
              ...(hovered ? cardStyles.overlayHover : {}),
            }}
          >
            Go To Project
          </div>
        </a>
        <a
          href={project.source_code_link}
          target="_blank"
          rel="noopener noreferrer"
          style={cardStyles.iconButton}
        >
          <img src={github} alt="source code" style={cardStyles.icon} />
        </a>
      </div>

      <div style={cardStyles.body}>
        <div style={cardStyles.content}>
          <h3 style={cardStyles.title}>{project.name}</h3>
          <p style={cardStyles.description}>{project.description}</p>
        </div>
        {/* <div style={cardStyles.tags}>
          {project.tags.map((tag) => (
            <span key={`${project.name}-${tag.name}`} style={cardStyles.tag}>
              {tag.name}
            </span>
          ))}
        </div> */}
      </div>
    </div>
  );
};

const ProjectsTab = ({ mobile = false }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: mobile ? '1fr' : 'repeat(3, minmax(0, 1fr))',
        gap: '24px',
        padding: '0 24px',
        justifyContent: 'center',
        justifyItems: mobile ? 'center' : 'stretch',
        maxWidth: '1360px',
        margin: '0 auto',
      }}
    >
      {projects.map((project, index) => (
        <ProjectCard key={`project-${index}`} project={project} />
      ))}
    </div>
  );
};

export default ProjectsTab;