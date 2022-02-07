function namePlayer(){
    const nome = document.getElementById('input-name');
    const nomeLocation = document.getElementById('player-name');
    const playerNameFinal = document.getElementById('playerName');
    playerNameFinal.innerText = nome.value;
    nomeLocation.innerText = nome.value;

    /* Muda a tela de nome para a tela de jogo */
    const screenName = document.getElementsByClassName('log')[0];
    screenName.style.display = 'none';
    const screenGame = document.getElementsByClassName('game')[0];
    screenGame.style.display = 'flex';
}



let scoreBlue = 0;
let scoreRed = 0;
function checkAnswer(obj){
    /*Resposta da MAQUINA */
    const machineAnswer = Math.floor(Math.random() * (4 - 1) + 1);
    const comando = document.getElementById('commands');
    const scoreRedObject = document.getElementById('placar-red');
    const scoreBlueObject = document.getElementById('placar-blue');
    switch(obj.id){ 
        case "player-selection-paper":
            if (machineAnswer == 3){
                comando.innerText = 'A Máquina colocou pedra , você GANHOU essa rodada !';
                scoreRed = scoreRed + 1;    
                scoreRedObject.innerHTML = scoreRed;
                checkScore();
            }
            else if (machineAnswer == 2){
                comando.innerText = 'A Máquina colocou tesoura, você PERDEU essa rodada ! F.';
                scoreBlue += 1;
                scoreBlueObject.innerHTML = scoreBlue;
                checkScore();
            }
            else {
                comando.innerText = 'A máquina também colocou papel, segue.';
            }
            break;
        case "player-selection-scissor":
            if (machineAnswer == 1){
                comando.innerText = 'A Máquina colocou papel, você GANHOU essa rodada !';
                scoreRed += 1;
                scoreRedObject.innerHTML = scoreRed;
                checkScore();
            }
            else if (machineAnswer == 3){
                comando.innerText = 'A Máquina colocou pedra, você PERDEU essa rodada ! F.';
                scoreBlue += 1;
                scoreBlueObject.innerHTML = scoreBlue;
                checkScore();
            }
            else {
                comando.innerText = 'A máquina também colocou tesoura, segue.';
            }
            break;
        case "player-selection-rock":
            if (machineAnswer == 2){
                comando.innerText = 'A Máquina colocou tesoura, você GANHOU essa rodada !';
                scoreRed += 1;
                scoreRedObject.innerHTML = scoreRed;
                checkScore();
            }
            else if (machineAnswer == 1){
                comando.innerText = 'A Máquina colocou papel, você PERDEU essa rodada ! F.';
                scoreBlue += 1;
                scoreBlueObject.innerHTML = scoreBlue;
                checkScore();
            }
            else{
                comando.innerText = 'A máquina também colocou pedra, segue.';
            }
            break;
    }
}

let result;
function checkScore(){
    const comando = document.getElementById('commands');
    if (scoreBlue > 2 ){
        comando.innerText = 'Caraca, você perdeu para a máquina.';
        let myGreeting = setTimeout(resultFinal, 1000);
        return 'Machine';
    }
    
    else if (scoreRed > 2){
        comando.innerText = 'Tu é brabo, ganhou da máquina !';
        const nome = document.getElementById('input-name');
        let myGreeting = setTimeout(resultFinal, 2000);
        return nome.value;
    }
}

function resultFinal(){
    /* Remove o jogo para mostrar o score.*/
    const mainGame = document.getElementsByClassName('game')[0];
    const mainResult = document.getElementsByClassName('result')[0];
    mainGame.style.display = 'none';
    mainResult.style.display = 'block';

    /* Modelando os resultados*/
    const redResult = document.getElementById('redScore');
    redResult.innerText = scoreRed;

    const blueResult = document.getElementById('blueScore');
    blueResult.innerText = scoreBlue;

    const finalResult = document.getElementById('finalScore');
    finalResult.innerText = `${checkScore()} ganhou !!!`;

    

}
