import React from 'react';
import downloadImage from './download.png';
import ProgressConponent from './progress-bar-component.jsx';
import './App.css';

function App() {
  const data = {
    files: [
      {
        heading: 'Downloading Wireframe Mesh',
        totalSize: 12,
        downloaded: 8,
      },
      {
        heading: 'Downloading Wireframe Mesh',
        totalSize: 24,
        downloaded: 18,
      },
    ],
  };
  return (
    <div className="parent-container">
      <div className="right-container">
        <div className="navigations">
          <div className="dropdown-header">
            <select>
              <option>In Progress</option>
              <option>Finish</option>
            </select>
          </div>
          <div className="search-header">
            <input placeholder="search" type="search" />
          </div>
        </div>
        <div className="progressive-bars-containers">
          {data.files.map((file, index) => (
            <ProgressConponent data={file} key={`file-${index}`} />
          ))}
          <div className="progressive-bar">
            <p className="progress-header">Downloading Wireframe Mesh</p>
          </div>
        </div>
        <div className="download-footer">
          <div className="footer-container">
            <img src={downloadImage} alt="download-icon" />
            <span>SAVE TO FILE</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
