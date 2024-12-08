import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useReactToPrint } from 'react-to-print';
import ModeSwitch from '../components/syllable/ModeSwitch';
import SyllableInput from '../components/syllable/SyllableInput';
import PrintButton from '../components/syllable/PrintButton';
import SyllableOutput from '../components/syllable/SyllableOutput';
import divide from '../utils/syllableUtils';

const SyllableWorkPage = () => {
  const [text, setText] = useState('');
  const [mode, setMode] = useState<'word' | 'sentence'>('word');
  const outputRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => outputRef.current,
  });

  const processText = () => {
    if (!text.trim()) return [];

    if (mode === 'word') {
      return text.trim().split(/\s+/).map(word => divide(word));
    } else {
      return text.trim().split('\n').map(sentence => sentence.trim()).filter(Boolean);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Heceleme Çalışması</h1>
          
          <ModeSwitch mode={mode} onModeChange={setMode} />
          <SyllableInput mode={mode} value={text} onChange={setText} />
          <PrintButton onClick={handlePrint} />
          <SyllableOutput ref={outputRef} mode={mode} items={processText()} />
        </motion.div>
      </div>
    </div>
  );
};

export default SyllableWorkPage;