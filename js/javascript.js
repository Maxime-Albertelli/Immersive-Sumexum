async function loadJSON() {
  try {
    const params = new URLSearchParams(location.search);
    const reference = params.get("url");
    const response = await fetch("../json/database.json");
    const data = await response.json();
    document.getElementById("title").textContent = data[reference].Name;
    document.getElementById("Image").src = data[reference].Image;
    document.getElementById("Histoire").textContent = data[reference].Histoire;
    document.getElementById("Dev").textContent = data[reference].Dev;
    document.getElementById("Avis").textContent = data[reference].Avis;
    document.getElementById("Sources").textContent = data[reference].Sources;
    document.getElementById("Plateformes").textContent =
      data[reference].Plateformes;
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
