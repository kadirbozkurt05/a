import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { NavigationItem } from '../../types/navigation';
import { motion, AnimatePresence } from 'framer-motion';

interface DesktopMenuProps {
  navigationItems: NavigationItem[];
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ navigationItems }) => {
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);

  return (
    <nav className="hidden md:flex space-x-8">
      {navigationItems.map((item) => (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => setOpenDropdown(item.label)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          {item.children ? (
            <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
              {item.icon && <item.icon className="h-5 w-5 mr-1" />}
              {item.label}
              <ChevronDown className="h-4 w-4 ml-1" />
            </button>
          ) : (
            <Link
              to={item.path}
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              {item.icon && <item.icon className="h-5 w-5 mr-1" />}
              {item.label}
            </Link>
          )}

          {item.children && (
            <AnimatePresence>
              {openDropdown === item.label && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    >
                      {child.icon && <child.icon className="h-4 w-4 inline-block mr-2" />}
                      {child.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      ))}
    </nav>
  );
};

export default DesktopMenu;