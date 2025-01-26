document.addEventListener("DOMContentLoaded", () => {
  async function loadJSON() {
    try {
      const params = new URLSearchParams(location.search);
      const reference = params.get("url");
      const response = await fetch("../json/database.json");
      const data = await response.json();
      document.getElementById("title").textContent = data[reference].Name;
      document.getElementById("Timeline").textContent = data[reference].Timeline;
      document.getElementById("Histoire").textContent = data[reference].Histoire;
      document.getElementById("Dev").textContent = data[reference].Dev;
      document.getElementById("Avis").textContent = data[reference].Avis;
      document.getElementById("Sources").textContent = data[reference].Sources;
      document.getElementById("Plateformes").textContent = data[reference].Plateformes;
      document.getElementById("AchatImage").setAttribute("href", "" + data[reference].Achat);
      if (data[reference].Cover) {
        document.getElementById("GameImage").setAttribute("src", "" + data[reference].Cover);
        document.getElementById("GameImage").style.display = "block";
      }
    } catch (error) {
      console.error("Error loading JSON:", error);
    }
  }
  // Load JSON on page load
  loadJSON();
});
