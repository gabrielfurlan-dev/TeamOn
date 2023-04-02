import React, { useState } from 'react';
import { Moon, Sun } from 'phosphor-react';

interface ToggleButtonProps {
  onToggle: () => void;
  isOn: boolean;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ onToggle, isOn }) => {

    const [isHovering, setIsHovering] = useState(false);

  return (
    <button
      onClick={() => onToggle()}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="bg-transparent focus:outline-none"
    >
      {isOn ? (
        <Sun size={24} color={isHovering ? 'yellow' : 'black'} />
      ) : (
        <Moon size={24} color={isHovering ? 'gray' : 'black'} />
      )}
    </button>
  );
};

export default ToggleButton;
