function saveName() {
    const name = document.getElementById("name").value;
    localStorage.setItem("savedName", name);
    alert("Nome salvato!");
}


function removeName() {
    localStorage.removeItem("savedName");
    document.getElementById("name").value = "";
    alert("Nome rimosso!");
}

window.onload = function() {
    const savedName = localStorage.getItem("savedName");
    if (savedName) {
        document.getElementById("name").value = savedName;
    }
}
