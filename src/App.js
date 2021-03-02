import React, {useEffect} from 'react';
import downloadImage from './download.png';
import ProgressConponent from './progress-bar-component.jsx';
import { connect } from 'react-redux';
import './App.css';

function App(props) {
  const {files, updateData} = props;
  // console.log(props);
  useEffect(() => {
    const handleFetch = async () => {
      let response = await fetch('http://localhost:9000/');
      response = await response.json();
      const action = {
        type: "setFiles",
        payload: response.files
      }
      updateData(action);
    }
    handleFetch();
  }, []);
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
          {files.map((file, index) => (
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

// export default App;

const mapStateToProps = (state) => {
  return { files: state.files } 
}
const mapDispatchToProps = (dispatch) => ({
  updateData: (action) => dispatch(action),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);