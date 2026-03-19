"use client";

import { useState, useRef } from "react";
import { Calculator } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function BmiCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [status, setStatus] = useState("");
  const modalRef = useRef<HTMLDialogElement>(null);

  const calculateBmi = (e: React.FormEvent) => {
    e.preventDefault();
    if (!weight || !height) return;

    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // convert cm to meters
    if (w > 0 && h > 0) {
      const calculatedBmi = w / (h * h);
      setBmi(parseFloat(calculatedBmi.toFixed(1)));
      
      if (calculatedBmi < 18.5) {
        setStatus("Underweight");
      } else if (calculatedBmi >= 18.5 && calculatedBmi <= 24.9) {
        setStatus("Normal");
      } else {
        setStatus("Higher");
      }
      
      if (modalRef.current) {
        modalRef.current.showModal();
      }
    }
  };

  const closeBMIModal = () => {
    modalRef.current?.close();
  };

  return (
    <div className="w-full max-w-xs sm:max-w-sm bg-white/95 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-white/50 relative z-20">
      <div className="bg-herbal/90 px-4 py-3 sm:px-6 sm:py-4 flex items-center gap-3">
        <Calculator className="text-white" size={20} />
        <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider">BMI કેલ્ક્યુલેટર</h3>
      </div>
      <form onSubmit={calculateBmi} className="p-4 sm:p-6 space-y-3 sm:space-y-4">
        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">વજન (કિલો)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="input input-sm sm:input-md input-bordered w-full focus:outline-none focus:border-herbal focus:ring-1 focus:ring-herbal bg-white/80"
            placeholder="e.g. 70"
            required
            min="1"
            step="0.1"
          />
        </div>
        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">ઊંચાઈ (સેમી)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="input input-sm sm:input-md input-bordered w-full focus:outline-none focus:border-herbal focus:ring-1 focus:ring-herbal bg-white/80"
            placeholder="e.g. 170"
            required
            min="1"
            step="0.1"
          />
        </div>
        <button
          type="submit"
          className="btn btn-sm sm:btn-md bg-gold text-white border-none hover:bg-yellow-600 w-full mt-2"
        >
          BMI ગણો
        </button>
      </form>

      {/* DaisyUI Modal */}
      <dialog ref={modalRef} className="modal">
        <div className="modal-box text-center bg-white">
          <h3 className="font-bold text-xl sm:text-2xl mb-2 text-herbal">તમારું પરિણામ</h3>
          {bmi && (
            <div className="py-2 sm:py-4">
              <div className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-2">{bmi}</div>
              <p className="text-base sm:text-lg font-medium text-gray-500 mb-4">
                શ્રેણી: <span className={`font-bold ${status === 'Normal' ? 'text-green-600' : status === 'Underweight' ? 'text-yellow-500' : 'text-red-500'}`}>
                  {status === 'Normal' ? 'સામાન્ય વજન' : status === 'Underweight' ? 'ઓછું વજન' : 'વધુ વજન'}
                </span>
              </p>
              
              {status === "Higher" && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-4 sm:px-4 sm:py-5 rounded-xl mb-4 text-sm sm:text-base font-semibold flex flex-col gap-3 items-center shadow-inner">
                  <span>તમારો BMI સામાન્ય કરતા વધારે છે. સ્વસ્થ રહેવા અને યોગ્ય માર્ગદર્શન માટે અમારો સંપર્ક કરો.</span>
                  <a 
                    href="https://wa.me/919687105624?text=%E0%AA%AE%E0%AA%BE%E0%AA%B0%E0%AB%8B%20BMI%20%E0%AA%B5%E0%AA%A7%E0%AA%BE%E0%AA%B0%E0%AB%87%20%E0%AA%86%E0%AA%B5%E0%AB%8D%E0%AA%AF%E0%AB%8B%20%E0%AA%9B%E0%AA%B3%E0%AA%82%2C%20%E0%AA%AE%E0%AA%A8%E0%AB%87%20%E0%AA%AE%E0%AA%BE%E0%AA%B0%E0%AB%8D%E0%AA%97%E0%AA%A6%E0%AA%B0%E0%AB%8D%E0%AA%B6%E0%AA%A8%20%E0%AA%86%E0%AA%AA%E0%AA%B5%E0%AA%BE%20%E0%AA%B5%E0%AA%BF%E0%AA%A8%E0%AA%82%E0%AA%A4%E0%AA%BF" 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn btn-sm sm:btn-md bg-green-600 hover:bg-green-700 text-white border-none rounded-full px-6 shadow-md flex items-center gap-2"
                  >
                    <FaWhatsapp size={20} />
                    WhatsApp પર સંપર્ક કરો
                  </a>
                </div>
              )}
            </div>
          )}
          <div className="modal-action justify-center">
            <button type="button" className="btn bg-herbal text-white border-none hover:bg-green-800 px-6 sm:px-8 rounded-full" onClick={closeBMIModal}>બંધ કરો</button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button type="button" onClick={closeBMIModal}>બંધ કરો</button>
        </form>
      </dialog>
    </div>
  );
}
