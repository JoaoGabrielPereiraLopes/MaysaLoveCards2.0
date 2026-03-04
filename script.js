async function CardInit(){
    document.getElementById('Carta').style.animation='5000ms abrir'
    setTimeout(function() {
        document.getElementById('Carta').style.backgroundImage='url("./assets/WhatsApp Image 2026-03-02 at 23.57.28.jpeg")'
        document.getElementById('Carta').style.height="90%"
        document.getElementById('Carta').style.width="90%"
        document.getElementById('Carta').style.backgroundPosition="top right"
        document.getElementById('Carta').innerHTML="<h1 id='tituloCarta'>TEXTO TESTE PARA VER SE VOCÊ CONSEGUE LER</h1>"
        
    }, 2500);
    setTimeout(function() {
        document.getElementById('Carta').style.animation=''
        
    }, 5000);
    console.log(0/0)
}