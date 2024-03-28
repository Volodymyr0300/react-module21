const ClickCounter = ({ value, onTrack, children }) => {
  return (
    <button onClick={onTrack}>
      {children}: {value}
    </button>
  );
};

export default ClickCounter;
