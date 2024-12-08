import React from 'react';

interface SyllableInputProps {
  mode: 'word' | 'sentence';
  value: string;
  onChange: (value: string) => void;
}

const SyllableInput: React.FC<SyllableInputProps> = ({ mode, value, onChange }) => (
  <textarea
    className="w-full p-4 border rounded-lg mb-6 h-40"
    placeholder={
      mode === 'word'
        ? "Kelimeleri boşluk bırakarak yazın..."
        : "Her cümleyi yeni satıra yazın..."
    }
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);

export default SyllableInput;