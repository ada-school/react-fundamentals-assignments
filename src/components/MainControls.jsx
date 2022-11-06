export function MainControls(props) {
  const { onAllOffClick, onAllOnClick } = props;

  return (
    <div>
      <button onClick={onAllOffClick}>All Off</button>
      <button onClick={onAllOnClick}>All On</button>
    </div>
  );
}
