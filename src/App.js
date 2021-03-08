import React, { useEffect } from 'react';
//import downloadImage from './download.png';
import ProgressConponent from './progress-bar-component.jsx';
import useStyles from './styles';
import { connect } from 'react-redux';
// import { Select } from '@material-ui/core';



//import './App.css';
//import useStyles from './styles';

//let classes=useStyles;

// const useStyles = makeStyles({
//   parent_container: {
//     background: '#252535',
//     fontFamily: 'Lobster',
//     color: 'white',
//   },
//   '': {
//     margin: 0,
//     padding: 0,
//     boxSizing: 'border-box',
//   },
//   heading: {
//     fontSize: 20,
//     marginBottom: 30,
//   },
//   item: {
//     marginBottom: 7,
//     fontSize: 18,
//     color: '#a9a9a9',
//     '& > *': {
//       margin: 15,
//     },
//   },

//   right_container: {
//     padding: 25,
//     background: '#383838',
//     boxShadow: '#191919 (0px 11px 18px -2px)',
//     position: 'fixed',
//     width: 500,
//     top: 30,
//     right: 50,
//   },
//   progressive_bar: {
//     padding: 10,
//     width: 500,
//     boxShadow: '#292928 (-2px 1px 15px -2px)',
//     zIndex: 999,
//     borderBottom: 'solid(2 #292928)',
//     color: '#bcbcbc',
//     minHeight: 78,
//     '& > *': {
//       borderBottom: 'none',
//       boxShadow: '#292928(-2px 9px 15px -2px)',
//     },
//   },
//   progress_header: {
//     fontSize: 15,
//   },
//   progress_status_text: {
//     fontSize: 15,
//   },
//   progress_status: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     width: 90,
//     marginTop: 6,
//   },
//   progress_status_controls: {
//     color: '#a87be0',
//     fontSize: 13,
//   },
//   progress: {
//     '&::-webkit-progress-value': {
//       backgroundcolor: '#a87be0',
//     },
//     '&::-webkit-progress-bar': {
//       backgroundcolor: 'white',
//       width: 100,
//     },
//   },
//   btn: {
//     border: 'none',
//     backgroundcolor: '#383838',
//     cursor: 'pointer',
//     padding: 2,
//     textDecoration: '#a87be0',
//     color: '#a87be0',
//     justifyContent: 'center',
//   },
// });

function App(props) {
  const { files, updateData } = props;
  // console.log(props);
  useEffect(() => {
    const handleFetch = async () => {
      let response = await fetch('http://localhost:9000/');
      response = await response.json();
      const action = {
        type: 'setFiles',
        payload: response.files,
      };
      updateData(action);
    };
    handleFetch();
  }, []);
  const classes = useStyles();

  return (
    <div className={classes.parent_container}>
      <div className={classes.right_container}>
        <div className={classes.navigations}></div>
        <div className={classes.progressive_bars_containers}>
          {files.map((file, index) => (
            <ProgressConponent data={file} key={`file-${index}`} />
          ))}
          <div className={classes.progressive_bar}>
            <p className={classes.progress_header}>
              Downloading Wireframe Mesh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { files: state.files };
};
const mapDispatchToProps = (dispatch) => ({
  updateData: (action) => dispatch(action),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
