import { Button } from '@mantine/core';
import '@mantine/core/styles/Button.css';

import styles from '../styles/NavHeader.module.css'

const links = [
  { key: 'home', label: 'Home' },
  { key: 'experience', label: 'Experience' },
  { key: 'projects', label: 'Projects' },
  { key: 'contact', label: 'Contact' },
];

export default function NavHeader({ mobile = false, activeTab = 'home', onTabChange = () => {} }) {
  const btnSize = mobile ? 'sm' : 'md';
  const navClassName = `${styles.navHeader} ${mobile ? styles.mobileNavHeader : ''}`;

  return (
    <div className={navClassName}>
      {links.map(({ key, label }) => (
        <Button
          key={key}
          variant="transparent"
          size={btnSize}
          className={`${styles.navButton} ${activeTab === key ? styles.activeNavButton : ''}`}
          onClick={() => onTabChange(key)}
        >
          {label}
        </Button>
      ))}
    </div>
  );
}