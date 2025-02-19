console.log("Hello")

mainINDEX = document.getElementById("main-index")

document.getElementById("loadSectionBtn").addEventListener("click", () => {
    fetch("transactions.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("main-index").innerHTML = data;
        history.pushState(null, "", "?section=loaded"); // Updates the URL without reloading
      });
  });
  
  window.addEventListener("popstate", () => {
    document.getElementById("main-index").innerHTML = ""; // Handle back/forward navigation
  });
  