document.addEventListener('DOMContentLoaded', function() {
    let container = document.querySelector('.container');
    let scoreContainer = document.querySelector('.score');
    let timeContainer = document.querySelector('.time');
    let startButton = document.querySelector('.start-btn');

    startButton.addEventListener('click', function() {
        let score = 0;
        let time = 10;
        container.innerHTML = "";

        let interval = setInterval(function showTarget() {
            // Création de la cible
            let target = document.createElement('img');
            target.id = "target";
            target.src = "silly.png";
            container.appendChild(target);
            target.style.top = Math.random() * (container.offsetHeight - target.offsetHeight) + 'px';
            target.style.left = Math.random() * (container.offsetWidth - target.offsetWidth) + 'px';

            // Faire disparaître la cible après un certain temps
            setTimeout(function() {
                if (container.contains(target)) {
                    container.removeChild(target);
                }
            }, 1000); // La cible disparaît après 1 seconde
        }, 2000); // Une nouvelle cible apparaît toutes les 2 secondes

        // Mise à jour du temps et arrêt du jeu après 10 secondes
        let timer = setInterval(function() {
            time--;
            timeContainer.textContent = "Time : " + time;
            if (time <= 0) {
                clearInterval(timer);
                clearInterval(interval);
                alert("Game Over! Your score is " + score);
            }
        }, 1000);

        // Gestion des clics sur la cible
        container.addEventListener('click', function(event) {
            if (event.target.id === 'target') {
                score++;
                scoreContainer.textContent = "Score : " + score;
                container.removeChild(event.target);
            }
        });
    });
});