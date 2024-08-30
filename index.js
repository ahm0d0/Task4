let upButton = document.getElementById("backToTop");
let btnForm = document.getElementById("btnForm");
// Scroll Function
function scrollRangeToZero() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function scrollRangeButton() {
  let scrollRange = window.scrollY;

  if (scrollRange >= 190) {
    Object.assign(upButton.style, {
      width: "50px",
      height: "50px",
      right: "20px",
      borderRadius: "50px",
      opacity: 1,
    });

    upButton.addEventListener("click", scrollRangeToZero);
  } else {
    Object.assign(upButton.style, {
      width: "0px",
      height: "0px",
      borderRadius: "0px",
      right: "0px",
      opacity: 0,
    });
  }
}

window.onscroll = scrollRangeButton;

// submit Function
function DontRefreshThePage(e) {
  e.preventDefault();
}
btnForm.addEventListener("click", DontRefreshThePage);
