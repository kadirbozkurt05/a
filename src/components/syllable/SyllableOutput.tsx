import React, { forwardRef } from 'react';
import { coloredSyllables, renderSentence } from '../../utils/syllableRenderers';

interface SyllableOutputProps {
  mode: 'word' | 'sentence';
  items: string[];
}

const SyllableOutput = forwardRef<HTMLDivElement, SyllableOutputProps>(
  ({ mode, items }, ref) => (
    <div ref={ref} className="bg-white p-8 rounded-lg border">
      <div className={`${mode === 'word' ? 'grid grid-cols-2 gap-4' : 'space-y-4 text-center'}`}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`${mode === 'word' ? '' : 'text-lg leading-relaxed'}`}
            style={{ fontFamily: "'Comic Sans MS', cursive" }}
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