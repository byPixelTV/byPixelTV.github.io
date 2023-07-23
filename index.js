function copyIpAdress() {
    navigator.clipboard.writeText("CraftTopia.ehd.lol");
    alert("Du hast dir die IP kopiert!")
  } 
function redirectToDiscord() {
    window.location.replace("http://dsc.gg/CraftTopia");
}
function redirectToHome() {
    window.location.replace("index.html");
}
function redirectToMap() {
    window.location.replace("https://map.crafttopia.ehd.lol");
}
function initServerData(serverIp){
    fetch('https://api.mcsrvstat.us/2/'+serverIp)
    .then(response => response.json())
    .then(data => handleServerStatus(data));
}

initServerData("node2.endelon-hosting.de:30255");

function handleServerStatus(data){
    const playerCounter = document.getElementById("player-count");
    console.log(data.players.online);
    playerCounter.innerHTML = data.players.online;
} 