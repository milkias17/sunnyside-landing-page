const button = document.querySelector(".toggle-button");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const rightNav = document.querySelector(".toggleable");
  if (rightNav.classList.contains("right-nav")) {
    rightNav.classList.remove("right-nav");
    rightNav.classList.add("right-nav-toggle");
    const showToggle = document.createElement("div");
    showToggle.classList.add("showToggle");
    document.querySelector("body").appendChild(showToggle);
  } else {
    rightNav.classList.remove("right-nav-toggle");
    rightNav.classList.add("right-nav");
    document
      .querySelector("body")
      .removeChild(document.querySelector(".showToggle"));
  }
});
