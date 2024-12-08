import React from 'react';

interface ModeSwitchProps {
  mode: 'word' | 'sentence';
  onModeChange: (mode: 'word' | 'sentence') => void;
}

const ModeSwitch: React.FC<ModeSwitchProps> = ({ mode, onModeChange }) => (
  <div className="flex items-center justify-center mb-6">
    <div className="bg-gray-200 rounded-full p-1">
      <button
        className={`px-4 py-2 rounded-full transition-colors ${
          mode === 'word' ? 'bg-white shadow-md' : ''
        }`}
        onClick={() => onModeChange('word')}
      >
        Kelime Çalışması
      </button>
      <button
        className={`px-4 py-2 rounded-full transition-colors ${
          mode === 'sentence' ? 'bg-white shadow-md' : ''
        }`}
        onClick={() => onModeChange('sentence')}
      >
        Cümle Çalışması
      </button>
    </div>
  </div>
);

export default ModeSwitch;