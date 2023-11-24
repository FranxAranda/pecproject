document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.onscroll = function() { mostrarBarraProgreso() };

function mostrarBarraProgreso() {
    var alturaPagina = document.documentElement.scrollHeight - window.innerHeight;
    var progreso = (window.scrollY / alturaPagina) * 100;
    document.getElementById("barraProgreso").style.width = progreso + "%";
}

document.getElementById('myForm').addEventListener('submit', function(event) {
    var username = document.getElementById('username').value;
    if (!username) {
      alert('Por favor, ingresa un nombre de usuario.');
      event.preventDefault();
    }
  });

 