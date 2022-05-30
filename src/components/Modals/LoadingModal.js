import React from 'react';

function LoadingModal(props) {
  return (
    <div style={{
      position: 'absolute',
      zIndex: '100',
      width: '100vw',
      height: '100vh',
      background: 'rgb(0,0,0,0.9)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#999999'
    }}>
      <h1>Loading...</h1>
    </div>
  );
}

export default LoadingModal;