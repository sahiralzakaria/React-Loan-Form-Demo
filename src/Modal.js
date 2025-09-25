export default function Modal({ isVisible, errorMeassage = null }) {
  if (isVisible) {
    return (
      <div id="modal">
        <div id="modal-content">
          <h1 style={{ color: errorMeassage != null ? "red" : "green" }}>
            {errorMeassage == null
              ? "The Form Has Been Submitted Successfully"
              : errorMeassage}
          </h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
