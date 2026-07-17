document.addEventListener("DOMContentLoaded", () => {
  initSettings();
});

function initSettings() {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");

  checkboxes.forEach((cb) => {
    cb.addEventListener("change", (e) => {
      console.log("Setting changed:", e.target.checked);
    });
  });
}
