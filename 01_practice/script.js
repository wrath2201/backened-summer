const fullText = document.getElementById("paragraph").textContent.trim();

function showLess() {
    const shortText = fullText.slice(0, 120);
    document.getElementById("output").textContent = shortText + "...";
}