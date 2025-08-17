document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});
// Disable right-click
    document.addEventListener("contextmenu", function (e) {
      e.preventDefault();
      alert("Right-click is disabled on this page!");
    });

    // Disable certain key combinations
    document.addEventListener("keydown", function (e) {
      // Block F12 (Inspect), Ctrl+Shift+I/J, Ctrl+U, Ctrl+C/X/V/S
      if (
        e.key === "F12" || 
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "i")) || 
        (e.ctrlKey && e.shiftKey && (e.key === "J" || e.key === "j")) || 
        (e.ctrlKey && (e.key === "U" || e.key === "u")) || 
        (e.ctrlKey && (e.key === "C" || e.key === "c")) ||
        (e.ctrlKey && (e.key === "X" || e.key === "x")) ||
        (e.ctrlKey && (e.key === "V" || e.key === "v")) ||
        (e.ctrlKey && (e.key === "S" || e.key === "s"))
      ) {
        e.preventDefault();
        alert("This action is disabled!");
      }
    });
