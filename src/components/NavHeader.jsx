import { Button, Burger } from '@mantine/core';
import '@mantine/core/styles/Button.css';
import { useState } from 'react';

import styles from '../styles/NavHeader.module.css';

const links = [
  { key: 'home', label: 'Home' },
  { key: 'experience', label: 'Experience' },
  { key: 'projects', label: 'Projects' },
  { key: 'contact', label: 'Contact' },
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
        links.map(({ key, label }) => (
          <Button
            key={key}
            variant="transparent"
            size={btnSize}
            className={`${styles.navButton} ${activeTab === key ? styles.activeNavButton : ''}`}
            onClick={() => handleTabChange(key)}
          >
            {label}
          </Button>
        ))
      )}
    </div>
  );
}