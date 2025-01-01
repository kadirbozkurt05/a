import React from 'react';

interface ModeSwitchProps {
  mode: 'word' | 'sentence';
  onModeChange: (mode: 'word' | 'sentence') => void;
}

const ModeSwitch: React.FC<ModeSwitchProps> = ({ mode, onModeChange }) => (
  <div className="flex items-center justify-center mb-6">
    <div className="w-full max-w-sm bg-gray-200 rounded-full p-1">
      <div className="grid grid-cols-2 gap-1">
        <button
          className={`w-full px-4 py-2 text-sm sm:text-base rounded-full transition-all duration-200 ${
            mode === 'word'
              ? 'bg-white shadow-md transform translate-y-[-1px]'
              : 'hover:bg-gray-300'
          }`}
          onClick={() => onModeChange('word')}
        >
          <span className="hidden sm:inline">Kelime Çalışması</span>
          <span className="sm:hidden">Kelime</span>
        </button>
        <button
          className={`w-full px-4 py-2 text-sm sm:text-base rounded-full transition-all duration-200 ${
            mode === 'sentence'
              ? 'bg-white shadow-md transform translate-y-[-1px]'
              : 'hover:bg-gray-300'
          }`}
          onClick={() => onModeChange('sentence')}
        >
          <span className="hidden sm:inline">Cümle Çalışması</span>
          <span className="sm:hidden">Cümle</span>
        </button>
      </div>
    </div>
  </div>
);

export default ModeSwitch;