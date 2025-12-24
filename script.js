window.onload = function() {
    const inicialDiv = document.querySelector('.inicial');
    const principalDiv = document.querySelector('.principal');
    principalDiv.style.display = 'none';
    this.setTimeout(function() {
        inicialDiv.style.opacity = '0';
        inicialDiv.style.transition = 'opacity 0.5s ease-out';
        setTimeout(function() {
            inicialDiv.style.display = 'none';
            principalDiv.style.display = 'block';
            principalDiv.style.transition = 'opacity 0.5s ease-in';
        }, 1000);
    }, 5000);
}