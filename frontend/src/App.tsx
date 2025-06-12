import React, { useState } from 'react';
import './App.css';

function App() {
  const [url, setUrl] = useState('https://google.com');

  return (
    <div className="app">
      <header className="header">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-icon">🎬</span>
            <span className="logo-text">VideoForge AI</span>
          </div>
          <nav className="nav-menu">
            <a href="#" className="nav-link">Features</a>
            <a href="#" className="nav-link">Pricing</a>
            <a href="#" className="nav-link">About</a>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <div className="hero-section">
          <div className="hero-text">
            <h1 className="main-title">Transform Any URL Into Engaging Videos</h1>
            <p className="main-subtitle">
              Harness the power of artificial intelligence to convert web content 
              into stunning video presentations in seconds.
            </p>
          </div>
          
          <div className="creation-panel">
            <div className="panel-header">
              <h2 className="panel-title">Create Your Video</h2>
              <p className="panel-desc">Enter any URL and watch the magic happen</p>
            </div>
            
            <div className="input-group">
              <div className="input-wrapper">
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="url-input"
                  placeholder="https://example.com"
                />
                <div className="input-icon">🔗</div>
              </div>
              
              <button className="generate-btn">
                <span className="btn-text">Generate Video</span>
                <span className="btn-icon">⚡</span>
              </button>
            </div>
            
            <div className="preview-area">
              <div className="preview-container">
                <div className="preview-header">
                  <span className="preview-title">Preview</span>
                  <div className="preview-status">Ready</div>
                </div>
                <div className="video-preview">
                  <div className="preview-content">
                    <div className="play-button">▶</div>
                    <span className="preview-text">Your video will appear here</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;