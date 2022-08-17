
const b1 = document.querySelector("#p1button");
const b2 = document.querySelector("#p2button");
const p1score = document.querySelector("#p1score");
const p2score = document.querySelector("#p2score");
const reset = document.querySelector("#reset")
let score1 = 0 , score2=0;
let points = 5;

b1.addEventListener('click' , function() {
    if(score1!==points && score2!==points){
    score1++;
    p1score.innerText = `${score1}`;
    }
    if(score1===points) {
        p1score.classList.add('winner');
        p2score.classList.add('loser');
    }
})

b2.addEventListener('click' , function() {
    if(score2!==points && score1!==points){
    score2++;
    p2score.innerText = `${score2}`;
    }
    if(score2===points) {
        p2score.classList.add('winner');
        p1score.classList.add('loser');
    }
})

reset.addEventListener('click' , function() {
    p1score.innerText = "0";
    p2score.innerText = "0";
    score1=0;
    score2=0;
    p2score.classList.remove('winner' , 'loser');
    p1score.classList.remove('loser' , 'winner');
})


const select = document.querySelector("#playingto");

select.addEventListener('change' , function() {
    points = parseInt(select.value);
    p1score.innerText = "0";
    p2score.innerText = "0";
    score1=0;
    score2=0;
    p2score.classList.remove('winner' , 'loser');
    p1score.classList.remove('loser' , 'winner');
})

