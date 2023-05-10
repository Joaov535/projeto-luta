let log = new Log(document.querySelector('.log'));
let startFight = document.querySelector('.start');

let select = document.querySelectorAll('select');
let ul = document.querySelector('.log');
let divTurn = document.querySelector('.turn');
let rules = document.querySelector('.rules');

const esconde = (div) => {
    div.style.display = 'none'
};



esconde(divTurn);
esconde(ul);

const addPhotoChar = (char) => {
    let divImg = document.querySelector('.photoChar');
    let img = document.createElement('img');
    img.src = char;

    divImg.appendChild(img);
}

const addPhotoFreak = (freak) => {
    let divImg = document.querySelector('.photoFreak');
    let img = document.createElement('img');
    img.src = freak;

    divImg.appendChild(img);
}


startFight.addEventListener('click', () => {

    divTurn.style.display = 'flex';
    ul.style.display = 'block';
    esconde(rules);


    let typeFreak = document.querySelector('#freakName').value;
    let typeChar = document.querySelector('#charName').value;



    if (typeChar == 'Knight' && typeFreak == 'Monster') {

        addPhotoChar('../image/cavaleiro.png');
        addPhotoFreak('../image/monstro.png');

        let char = new Knight('Cavaleiro');
        let freak = new Monster();

        let stage = new Stage(
            char,
            freak,
            document.querySelector('#char'),
            document.querySelector('#freak'),
            log
        );

        stage.start();
        console.log(typeChar, typeFreak);
    }

    if (typeChar == 'Knight' && typeFreak == 'Haunt') {

        addPhotoChar('/image/cavaleiro.png');
        addPhotoFreak('/image/assombracao.png');

        let char = new Knight('Cavaleiro');
        let freak = new Haunt();

        let stage = new Stage(
            char,
            freak,
            document.querySelector('#char'),
            document.querySelector('#freak'),
            log
        );

        stage.start();
        console.log(typeChar, typeFreak);
    }

    if (typeChar == 'Wizard' && typeFreak == 'Monster') {

        addPhotoChar('/image/mago.png');
        addPhotoFreak('/image/monstro.png');

        let char = new Wizard('Mago');
        let freak = new Monster();

        let stage = new Stage(
            char,
            freak,
            document.querySelector('#char'),
            document.querySelector('#freak'),
            log
        );

        stage.start();
        console.log(typeChar, typeFreak);
    }

    if (typeChar == 'Wizard' && typeFreak == 'Haunt') {

        addPhotoChar('/image/mago.png');
        addPhotoFreak('/image/assombracao.png');

        let char = new Wizard('Mago');
        let freak = new Haunt();

        let stage = new Stage(
            char,
            freak,
            document.querySelector('#char'),
            document.querySelector('#freak'),
            log
        );

        stage.start();
        console.log(typeChar, typeFreak);
    }

    document.querySelector('#charName').remove();
    document.querySelector('#freakName').remove();
    document.querySelector('.turn button').addEventListener('click', sortear);
    startFight.remove('button');


});

const sortear = () => {

    document.querySelector('.turnPlayer').innerHTML = '';

    setTimeout(() => {
        const arrChar = ['Jogador', 'Aberração'];
        let index = Math.floor(Math.random() * arrChar.length);

        document.querySelector('.turnPlayer').innerHTML = arrChar[index];
    }, 200)


}