function ProgressConponent(props, children) {
  const { heading, totalSize, downloaded } = props.data;
  const downloadedPercentage = (downloaded / totalSize) * 100;
  return (
    <div className="progressive-bar">
      <p className="progress-header">{heading}</p>
      <div className="progress-status">
        <div className="progress-status-text">
          {downloaded}/{totalSize} MB, 3 secs left
        </div>
        <div className="progress-status-controls">
          <span>PAUSE</span>
          <span>CANCEL</span>
        </div>
      </div>
      <progress value={downloadedPercentage} max="100" min="0" />
    </div>
  );
}

export default ProgressConponent;
