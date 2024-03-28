export default function Controls({ onPrev, onNext }) {
  return (
    <div>
      <button disabled={isPrevDisabled} onClick={onPrev}>
        Prev
      </button>
      <button disabled={isNextDisabled} onClick={onNext}>
        Next
      </button>
    </div>
  );
}
