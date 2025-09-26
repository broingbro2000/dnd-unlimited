import React from 'react';
import { useNavigate } from 'react-router-dom';

function Characters() {
  const navigate = useNavigate();
  return (
    <div className="characters-page">
      <button className="back-btn" onClick={() => navigate('/')}>Back</button>
      <div className="main-text" style={{ padding: '2rem' }}>
        <h2>Characters</h2>
        <p>This is the Characters page. Here you can manage your D&D characters!</p>
      </div>
    </div>
  );
}

export default Characters;