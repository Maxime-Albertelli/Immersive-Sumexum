async function loadJSON() {
  let x = await document.getElementsByTagName("body")[0];
  console.log(x);
  console.log("Mon test fonctionne ahahaahh cafard");
  let y = "KH";
  sessionStorage.setItem("ref", y);
}

loadJSON();
