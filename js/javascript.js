document.addEventListener("DOMContentLoaded", () => {
  async function loadJSON() {
    try {
      //Récupération du texte situé dans l'extension de l'url (ex : canva.html?URL=KH ici c'est KH qui est récupéré)
      const params = new URLSearchParams(location.search);
      const reference = params.get("url");
      const response = await fetch("../json/database.json");
      const data = await response.json();
      // Remplace les données temporaires du canva par celle correspondante dans le JSON
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
  // Charge le fichier JSON sur la page
  loadJSON();
});
