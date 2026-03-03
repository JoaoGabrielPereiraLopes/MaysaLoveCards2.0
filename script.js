async function CardInit(){
    document.getElementById('Carta').style.animation='5000ms abrir'
    setTimeout(function() {
        document.getElementById('Carta').style.backgroundImage='url("https://www.bing.com/th/id/OIP.DRyy3X-N2MbXJfGW0M_4TAHaJ4?w=160&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2")'
        document.getElementById('Carta').style.height="90%"
        document.getElementById('Carta').style.width="90%"
        document.getElementById('Carta').innerHTML="<H1>Legal</H1>"
        
    }, 2500);
    setTimeout(function() {
        document.getElementById('Carta').style.animation=''
        
    }, 5000);
    console.log(0/0)
}