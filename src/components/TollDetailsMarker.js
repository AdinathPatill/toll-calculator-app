import React from 'react';

function TollDetailsMarker({ tollInfo }) {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      }}
    >
      <p>Cost: {tollInfo.cost}</p>
      {/* Display additional details as needed */}
    </div>
  );
}

export default TollDetailsMarker;
