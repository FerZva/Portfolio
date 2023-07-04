import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs';
import { useState, useEffect } from 'react';

function Navigation() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const currentSection = Array.from(sections).find(section => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 0 && rect.bottom > 0;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    handleScroll(); // Set initial active section on component mount
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="Container_navigation">
      <a href="#1" className={`Container_navigation_icon ${activeSection === '1' ? 'active' : ''}`}> <BiHomeAlt /> </a>
      <a href="#2" className={`Container_navigation_icon ${activeSection === '2' ? 'active' : ''}`}> <BiUser /> </a>
      <a href="#3" className={`Container_navigation_icon ${activeSection === '3' ? 'active' : ''}`}> <BsClipboardData /> </a>
      <a href="#4" className={`Container_navigation_icon ${activeSection === '4' ? 'active' : ''}`}> <BsBriefcase /> </a>
      <a href="#5" className={`Container_navigation_icon ${activeSection === '5' ? 'active' : ''}`}> <BsChatSquareText /> </a>
    </nav>
  );
}

export default Navigation;