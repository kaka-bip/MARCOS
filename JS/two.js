window.onload = function () {
    const heartRain = document.querySelector('.heart-rain');

    // Função para criar corações
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heartRain.appendChild(heart);

        // Definir uma posição aleatória
        heart.style.left = Math.random() * 100 + '%';

        // Remover o coração após a animação
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }

    // Criar corações a cada 0.3 segundos
    setInterval(createHeart, 300);
};
