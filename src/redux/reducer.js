const initialState = {
    route: {
      polyline: null,
    },
    // Add other necessary initial state properties
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CALCULATE_TOLL':
        // Perform API call to TollGuru and update the state with the calculated route
        // Update the state with the received polyline data
        return {
          ...state,
          route: {
            ...state.route,
            polyline: action.payload.routePolyline,
          },
        };
      // Add other cases as needed
      default:
        return state;
    }
  };
  
  export default rootReducer;
  