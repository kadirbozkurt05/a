import React, { forwardRef } from 'react';
import { coloredSyllables, renderSentence } from '../../utils/syllableRenderers';

interface SyllableOutputProps {
  mode: 'word' | 'sentence';
  items: string[];
}

const SyllableOutput = forwardRef<HTMLDivElement, SyllableOutputProps>(
  ({ mode, items }, ref) => (
    <div ref={ref} className="bg-white p-8 m-6 rounded-lg ">
      <div className={`${mode === 'word' ? 'grid grid-cols-2 gap-6 ' : 'space-y-6 text-center'}`}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`${mode === 'word' ? 'text-3xl text-center p-2 border border-black' : 'text-3xl p-4 border border-black leading-relaxed'}`}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {mode === 'word' ? coloredSyllables(item) : renderSentence(item)}
          </div>
        ))}
      </div>
    </div>
  )
);

SyllableOutput.displayName = 'SyllableOutput';

export default SyllableOutput;