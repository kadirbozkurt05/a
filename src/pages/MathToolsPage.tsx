import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Plus, Minus, X, Divide } from 'lucide-react';

const MathToolsPage = () => {
  const [selectedTool, setSelectedTool] = useState<string>('');
  const [number1, setNumber1] = useState<string>('');
  const [number2, setNumber2] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const n1 = parseFloat(number1);
    const n2 = parseFloat(number2);

    switch (selectedTool) {
      case 'add':
        setResult(n1 + n2);
        break;
      case 'subtract':
        setResult(n1 - n2);
        break;
      case 'multiply':
        setResult(n1 * n2);
        break;
      case 'divide':
        setResult(n2 !== 0 ? n1 / n2 : null);
        break;
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
          <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <Calculator className="mr-2" />
            Matematik Araçları
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { id: 'add', icon: Plus, label: 'Toplama' },
              { id: 'subtract', icon: Minus, label: 'Çıkarma' },
              { id: 'multiply', icon: X, label: 'Çarpma' },
              { id: 'divide', icon: Divide, label: 'Bölme' }
            ].map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                onClick={() => setSelectedTool(id)}
                className={`p-4 rounded-lg border-2 transition-colors ${
                  selectedTool === id
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-400'
                }`}
              >
                <Icon className="mx-auto mb-2" />
                {label}
              </button>
            ))}
          </div>

          {selectedTool && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    1. Sayı
                  </label>
                  <input
                    type="number"
                    value={number1}
                    onChange={(e) => setNumber1(e.target.value)}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    2. Sayı
                  </label>
                  <input
                    type="number"
                    value={number2}
                    onChange={(e) => setNumber2(e.target.value)}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
              </div>

              <button
                onClick={calculate}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Hesapla
              </button>

              {result !== null && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-center text-xl">
                    Sonuç: <span className="font-bold">{result}</span>
                  </p>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default MathToolsPage;