import React, { useState, useRef } from 'react';

const CauOne: React.FC = () => {
  const [count, setCount] = useState<number>(60);
  const timeId = useRef<any>(null);
  // chạy đồng hồ
  const handleStart = () => {
    if (timeId.current === null) {
      timeId.current = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
    }
  };
  //  dừng đồng hồ
  const handleStop = () => {
    if (timeId.current !== null) {
      clearInterval(timeId.current);
      timeId.current = null;
    }
  };
  //  reset đồng hồ
  const handleReset = () => {
    handleStop();
    setCount(60);
  };
  // clean up

  return (
    <div className="bg-[#84d6fc] gap-2 w-[400px] flex flex-col justify-center rounded-[8px] p-4 ">
      <h3> Câu 1 cua iem</h3>
      <p>{count}</p>
      <div className="flex justify-center gap-3">
        <button
          className="px-5 py-1 bg-[#ccc] rounded-[8px] hover:opacity-80"
          onClick={handleStart}
        >
          Start
        </button>
        <button
          className="px-5 py-1 bg-[#ccc] rounded-[8px] hover:opacity-80"
          onClick={handleStop}
        >
          Stop
        </button>
        <button
          className="px-5 py-1 bg-[#ccc] rounded-[8px] hover:opacity-80"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CauOne;
