const $addActiveClass = document.querySelectorAll(".panel");

$addActiveClass.forEach((panel) => {
  panel.addEventListener("click", () => {
    // removeActiveClasses();
    if (panel.classList != "panel active") {
      panel.classList.add("active");
    } else if (panel.classList == "panel active") {
      panel.classList.remove("active");
    }
  });
});

// function removeActiveClasses() {
//   $addActiveClass.forEach((panel) => {
//     if (panel.classList != "panel" ) {
//       panel.classList.remove("active");
//     }
//   });
// }
