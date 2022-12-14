const installBtn = document.getElementById("buttonInstall");
const textHeader = document.getElementById("textHeader");
const buttonInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
//  Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // event.preventDefault();
  installBtn.style.visibility = "visible";
  textHeader.textContent = "Click the button to install!";
  buttonInstall.classList.toggle("hidden",false);
  // Implement a click event handler on the `installBtn` element
});
installBtn.addEventListener("click", async () => {
  // event.prompt();
  installBtn.setAttribute("disabled", true);
  installBtn.textContent = "Installed!";
});

// Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  textHeader.textContent = "Successfully installed!";
  console.log("👍", "appinstalled", event);
});