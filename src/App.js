import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/Header';
import CalculateTollButton from './components/CalculateTollButton';
import RouteVisualization from './components/RouteVisualization';
import TollDetailsMarker from './components/TollDetailsMarker';
import UserEducationGuide from './components/UserEducationGuide';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          borderRadius: '5px',
          marginTop: '20px',
        }}
      >
        <Header />
        <UserEducationGuide />
        <CalculateTollButton />
        <RouteVisualization />
        {/* Add dynamic TollDetailsMarkers based on API response */}
      </div>
    </Provider>
  );
}

export default App;
