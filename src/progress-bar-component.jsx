import useStyles from './styles.js';

function ProgressConponent(props, children) {
  let classes = useStyles();
  const { heading, totalSize, downloaded } = props.data;
  const downloadedPercentage = (downloaded / totalSize) * 100;
  const per = Math.round(downloadedPercentage, 2);
  return (
    <div className={classes.progressive_bar}>
      <p className={classes.progress_header}>{heading}</p>
      <div className={classes.progress_status}>
        <div className={classes.progress_status_text}>
          {downloaded}/{totalSize} MB, 3 secs left
        </div>
        <div className={classes.progress_status_controls}>
          <span>
            <button className={classes.btn}>PAUSE</button>
          </span>
          <span>
            <button className={classes.btn}>CANCEL</button>
          </span>
          <span>{per}%</span>
        </div>
      </div>
      <progress className={classes.progress} value={downloadedPercentage} max="100" min="0" />
    </div>
  );
}

export default ProgressConponent;
