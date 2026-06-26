import { useEffect, useRef, useState } from 'react';
import { createTheme, MantineProvider } from '@mantine/core';

import NavHeader from './components/NavHeader';
import HomeTab from './components/HomeTab';
import ExperienceTab from './components/ExperienceTab';
import ProjectsTab from './components/ProjectsTab';
import ContactTab from './components/ContactTab';

import './App.css';
import '@mantine/core/styles.css';


function App() {
  const contentRef = useRef(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [activeTab, setActiveTab] = useState('home')
 
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [activeTab])

  const theme = createTheme({
    /** Put your mantine theme override here */
    //fontFamily: 'Cantarell, sans-serif',

    // default
    // fontFamilyMonospace: 'Monaco, Courier, monospace',
    // headings: { fontFamily: 'Outfit, sans-serif' },

    // roboto
    // fontFamily: 'Roboto, monospace',
    // headings: { fontFamily: 'Space Grotesk, sans-serif' },
    // fontFamilyMonospace: 'JetBrains Mono, monospace',

    //fontFamily: 'a'Times New Roman, sans-serif',

    fontFamily: "var(--font-sans)",

    headings: {
      fontFamily: "var(--font-head)",
      fontWeight: 600,
    },
    

    colors: {
      theme: [
        '#f3f4f6'
      ],
    },

  primaryColor: 'theme',
  primaryShade: 0,

  });

  const renderContent = () => {
    switch (activeTab) {
      case 'experience':
        return <ExperienceTab mobile={isMobile} />;
      case 'projects':
        return <ProjectsTab mobile={isMobile} />;
      case 'contact':
        return <ContactTab mobile={isMobile} />;
      default:
        return <HomeTab mobile={isMobile} />;
    }
  };


  return (
    <MantineProvider theme={theme}>
      <div className="App">
        <div className="pageShell">
          <div className="pageInner">
            <div className="pageHeader">
              <NavHeader
                activeTab={activeTab}
                onTabChange={setActiveTab}
                mobile={isMobile}
              />
            </div>
            <div className="pageContent" ref={contentRef}>
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </MantineProvider>
  );
}

export default App;