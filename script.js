//Nous allos sectionner les element html

let container = document.querySelector('.container')

let btn = document.querySelector('.start-btn')

let scoreContainer = document.querySelector('.score')

let timeContainer = document.querySelector('.time')

btn = function(){
    let score = 0;
    let time = 10;
    container.innerHTML="";

    let interval = setInterval(function showTarget(){
        //Creation de la cible
        let target = document.createElement('img');
        target.id="target";
        target.src="silly.png";
        container.appendChild(target);
        target.style.top = Math.random() * (500 - target.offsetHeight) + 'px';
        target.style.left = Math.random() * (600 - target.offsetWidth) + 'px';

        //faire disparaire la cible
        setTimeout(function(){
            score += 1;
            target.remove();

        }, 2000)

        //quand om clique sur le target
        target.onclick = function(){
            score += 1 ;
            target.style.display = 'none';
        }
        time -= 1;

        //afficher les infos
        scoreContainer.innerHTML = `Score : ${score}`
        timeContainer.innerHTML = `Time : ${time}`

        //fin du jeux quand le tmps est ecouler
        if(time  == 0){
            clearInterval(interval);
            container.innerHTML = "le jeux est terminer !"
        }
    }, 1000);
}