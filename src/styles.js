import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  parent_container: {
    background: '#252535',
    fontFamily: 'Lobster',
    color: 'white',
  },
  '': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  heading: {
    fontSize: 20,
    marginBottom: 30,
  },
  item: {
    marginBottom: 7,
    fontSize: 18,
    color: '#a9a9a9',
    '& > *': {
      margin: 15,
    },
  },

  right_container: {
    padding: 25,
    background: '#383838',
    boxShadow: '#191919 (0px 11px 18px -2px)',
    position: 'fixed',
    width: 500,
    top: 30,
    right: 50,
  },
  progressive_bar: {
    padding: 10,
    width: 500,
    boxShadow: '#292928 (-2px 1px 15px -2px)',
    zIndex: 999,
    borderBottom: 'solid(2 #292928)',
    color: '#bcbcbc',
    minHeight: 78,
    '& > *': {
      borderBottom: 'none',
      boxShadow: '#292928(-2px 9px 15px -2px)',
    },
  },
  progress_header: {
    fontSize: 15,
  },
  progress_status_text: {
    fontSize: 15,
  },
  progress_status: {
    display: 'flex',
    justifyContent: 'space-between',
    width: "90%",
    marginTop: 6,
  },
  progress_status_controls: {
    color: '#a87be0',
    fontSize: 13,
  },
  progress: {
    width: '90%',
  height: '4px',
  color: '#a87be0',
    '&::-webkit-progress-value': {
      backgroundColor: '#a87be0',
    },
    '&::-webkit-progress-bar': {
      backgroundColor: 'white',
      width: 100,
    },
  },
  btn: {
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    padding: 2,
    textDecoration: '#a87be0',
    color: '#a87be0',
    justifyContent: 'center',
  },
});

export default useStyles;