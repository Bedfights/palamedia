console.log("Hello World");

const menuButton = document.getElementById('menuButton');
menuButton.onclick = function() {
    menu.style.display = 'block';
}
if (location.hostname !== "bedfights.github.io") {
    document.querySelectorAll("a").forEach(a => {
        a.href = a.href.replace("/palamedia/", "/");
    });
}
console.log(location.hostname + "hostname");