document.addEventListener("DOMContentLoaded", () => {
  const aside = document.querySelector(".aside");
  const toggleBtn = document.getElementById("toggle-aside-btn");

  toggleBtn.addEventListener("click", () => {
    aside.classList.toggle("collapsed");

    // Optional: Toggle button symbol
    const isCollapsed = aside.classList.contains("collapsed");
    toggleBtn.textContent = isCollapsed ? "⏵" : "⏴";
  });
});