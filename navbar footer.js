//for container

fetch("header.html")
    .then((response) => response.text())
    .then((data) => (document.getElementById("container").innerHTML = data));

// for footer
fetch("footer.html")
.then((response) => response.text())
.then((data) => (document.getElementById("footer").innerHTML = data
));