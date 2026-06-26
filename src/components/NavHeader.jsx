import { Button, Burger, Tooltip } from '@mantine/core';
import '@mantine/core/styles/Button.css';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaRegFileAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

import resumeUrl from '../assets/Resume.pdf';
import styles from '../styles/NavHeader.module.css';

const links = [
  { key: 'home', label: 'Home' },
  { key: 'experience', label: 'Experience' },
  { key: 'projects', label: 'Projects' },
  { key: 'contact', label: 'Contact' },
];

const socialLinks = [
  {
    href: 'https://linkedin.com/in/kmanikon',
    icon: <FaLinkedin size={18} />,
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/kmanikon',
    icon: <FaGithub size={18} />,
    label: 'Github',
  },
  {
    href: 'mailto:kiranmanikonda123@gmail.com',
    icon: <HiOutlineMail size={18} />,
    label: 'Email',
  },
  {
    href: resumeUrl,
    icon: <FaRegFileAlt size={18} />,
    label: 'Resume',
    isResume: false,
  },
];

export default function NavHeader({ mobile = false, activeTab = 'home', onTabChange = () => {} }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const btnSize = mobile ? 'md' : 'lg';
  const navClassName = `${styles.navHeader} ${mobile ? styles.mobileNavHeader : ''}`;
  const activeLabel = links.find((link) => link.key === activeTab)?.label || 'Menu';

  const handleTabChange = (key) => {
    onTabChange(key);
    if (mobile) {
      setMenuOpen(false);
    }
  };

  return (
    <div className={navClassName}>
      {mobile ? (
        <>
          <button
            type="button"
            className={styles.mobileNavTop}
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className={styles.mobileNavLabel}>{activeLabel}</span>
            <Burger opened={menuOpen} color="#ffffff" size="sm" />
          </button>
          <div className={styles.mobileSocialButtons}>
            {socialLinks.map(({ href, icon, label, isResume }) => (
              <Tooltip key={label} label={label} position="bottom" withArrow>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.socialLink} ${isResume ? styles.resumeLink : ''}`}
                >
                  {icon}
                </a>
              </Tooltip>
            ))}
          </div>
          <div className={`${styles.mobileNavMenu} ${menuOpen ? styles.openMobileMenu : ''}`}>
            {links.map(({ key, label }) => (
              <Button
                key={key}
                variant="transparent"
                size={btnSize}
                className={`${styles.navButton} ${activeTab === key ? styles.activeNavButton : ''}`}
                onClick={() => handleTabChange(key)}
              >
                {label}
              </Button>
            ))}
          </div>
        </>
      ) : (
        <div className={styles.navRow}>
          <div className={styles.navButtons}>
            {links.map(({ key, label }) => (
              <Button
                key={key}
                variant="transparent"
                size={btnSize}
                className={`${styles.navButton} ${activeTab === key ? styles.activeNavButton : ''}`}
                onClick={() => handleTabChange(key)}
              >
                {label}
              </Button>
            ))}
          </div>
          <div className={styles.socialButtons}>
            {socialLinks.map(({ href, icon, label, isResume }) => (
              <Tooltip key={label} label={label} position="bottom" withArrow>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.socialLink} ${isResume ? styles.resumeLink : ''}`}
                >
                  {icon}
                </a>
              </Tooltip>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}