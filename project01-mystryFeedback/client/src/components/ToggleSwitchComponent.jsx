import  { useState } from 'react';

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex items-center">
      <div
        className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 ${
          isOn ? 'bg-green-500' : 'bg-gray-300'
        }`}
        onClick={toggleSwitch}
      >
        <span
          className={`${
            isOn ? 'translate-x-6' : 'translate-x-1'
          } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300`}
        />
      </div>
      <span className="ml-3 text-sm font-medium text-white">
        {isOn ? <h2 className="text-xl font-semibold mb-2">Accept Messages: On</h2> : <h2 className="text-xl font-semibold mb-2">Accept Messages: Off</h2>}
      </span>
    </div>
  );
}

export default ToggleSwitch;
