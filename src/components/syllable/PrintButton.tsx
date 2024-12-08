import React from 'react';
import { Printer } from 'lucide-react';

interface PrintButtonProps {
  onClick: () => void;
}

const PrintButton: React.FC<PrintButtonProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="mb-6 flex items-center justify-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
  >
    <Printer className="mr-2" />
    Yazdır
  </button>
);

export default PrintButton;