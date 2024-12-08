import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronDown } from 'lucide-react';
import { NavigationItem } from '../../types/navigation';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigationItems: NavigationItem[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navigationItems }) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (label: string) => {
    setExpandedItems(prev =>
      prev.includes(label)
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg z-50 overflow-y-auto"
          >
            <div className="p-4">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
              <nav className="mt-8">
                {navigationItems.map((item) => (
                  <div key={item.label} className="mb-2">
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => toggleExpand(item.label)}
                          className="w-full flex items-center justify-between text-gray-600 hover:text-blue-600 py-3 px-2 rounded-lg hover:bg-gray-50"
                        >
                          <span className="flex items-center">
                            {item.icon && <item.icon className="h-5 w-5 mr-2" />}
                            {item.label}
                          </span>
                          <motion.div
                            animate={{ rotate: expandedItems.includes(item.label) ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="h-5 w-5" />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {expandedItems.includes(item.label) && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-100">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.label}
                                    to={child.path}
                                    className="block text-gray-500 hover:text-blue-600 py-2 pl-4 hover:bg-gray-50 rounded-r-lg"
                                    onClick={onClose}
                                  >
                                    <span className="flex items-center">
                                      {child.icon && <child.icon className="h-4 w-4 mr-2" />}
                                      {child.label}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className="flex items-center text-gray-600 hover:text-blue-600 py-3 px-2 rounded-lg hover:bg-gray-50"
                        onClick={onClose}
                      >
                        {item.icon && <item.icon className="h-5 w-5 mr-2" />}
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;