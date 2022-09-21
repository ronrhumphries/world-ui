import React from 'react';
import ReactDOM from 'react-dom/client';

class World extends React.Component {
    render() {
      return (
        <div id='prompt'>command&#62;</div>
      );
    }
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<World />);
  