import React from 'react';
import { useDispatch } from 'react-redux';
import { calculateToll } from '../redux/actions';

function CalculateTollButton() {
  const dispatch = useDispatch();

  const handleCalculateToll = () => {
    // Assuming you have waypoints to send for toll calculation
    const waypoints = []; // Replace this with your actual waypoints array
    dispatch(calculateToll(waypoints));
  };

  return (
    <button
      style={{
        padding: '10px 15px',
        fontSize: '16px',
        backgroundColor: '#3498db',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
      }}
      onClick={handleCalculateToll}
    >
      Calculate Toll
    </button>
  );
}

export default CalculateTollButton;
