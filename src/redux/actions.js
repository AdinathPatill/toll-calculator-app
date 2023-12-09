export const calculateToll = (waypoints) => {
    return {
      type: 'CALCULATE_TOLL',
      payload: { waypoints },
    };
  };
  