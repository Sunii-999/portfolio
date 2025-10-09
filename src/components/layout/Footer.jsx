import { Link } from 'react-router-dom';

const Footer = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
  ];

  return (
    <footer className="w-full bg-white/80 backdrop-blur-md border-t border-google-gray-200 shadow-inner">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-2 font-bold text-xl text-google-gray-900"
        >
          <img src="/img/mylogo.svg" alt="Sunii Logo" className="h-8 w-8" />
          <span>Sunii</span>
        </Link>

        {/* Navigation */}
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="text-google-gray-700 hover:text-google-blue transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Optional copyright */}
        <p className="text-sm text-google-gray-500">&copy; {new Date().getFullYear()} Sunii. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
