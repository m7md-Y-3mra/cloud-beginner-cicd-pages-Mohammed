document.addEventListener("DOMContentLoaded", () => {
  const actionBtn = document.getElementById("action-btn");
  const demoText = document.getElementById("demo-text");
  let isClicked = false;

  actionBtn.addEventListener("click", () => {
    if (!isClicked) {
      demoText.textContent =
        "Awesome! Continuous Deployment works perfectly! 🚀";
      demoText.classList.add("success-text");
      actionBtn.textContent = "Reset";
    } else {
      demoText.textContent =
        "Click the button below to see an interactive feature.";
      demoText.classList.remove("success-text");
      actionBtn.textContent = "Trigger Action!";
    }
    isClicked = !isClicked;
  });
});
