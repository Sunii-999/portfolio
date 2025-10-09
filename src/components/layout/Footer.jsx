import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Footer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
  ];

  return (

    <>
        <div className='w-full h- bg-white/80 backdrop-blur-md z-50 border-b border-google-gray-200'>
            <div className='flex justify-around items-center'>
                <div>
                    <Link to="/" className="font-bold text-xl text-google-gray-900 flex items-center space-x-2">
                        <img src="/img/mylogo.svg" alt="Sunii Logo" className="h-8 w-8" /> {/* Adjust height/width as needed */}
                        <span>Sunii</span>
                    </Link>
                </div>
                <div>
                {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200`}
              >
                {item.name}
              </Link>
            ))}
                </div>
            </div>
        </div>
    </>
  );
};

export default Footer;