async function loadJSON() {
  try {
    const response = await fetch("../json/database.json");
    const data = await response.json();
    document.getElementById("title").textContent = data.KH.Name;
    document.getElementById("Image").src = data.KH.Image;
    document.getElementById("Histoire").textContent = data.KH.Histoire;
    document.getElementById("Dev").textContent = data.KH.Dev;
    document.getElementById("Avis").textContent = data.KH.Avis;
    document.getElementById("Sources").textContent = data.KH.Sources;
    document.getElementById("Plateformes").textContent = data.KH.Plateformes;
  } catch (error) {
    console.error("Error loading JSON:", error);
  }
}

function toggleBlock(id) {
  const block = document.getElementById(id);
  block.classList.toggle("collapsed");
}

// Load JSON on page load
loadJSON();
