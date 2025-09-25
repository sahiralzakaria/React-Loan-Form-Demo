export default function Modal({ isVisible }) {
  if (isVisible) {
    return (
      <div id="modal">
        <div id="modal-content">
          <h1>The Form Has Been Submitted Successfully</h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
