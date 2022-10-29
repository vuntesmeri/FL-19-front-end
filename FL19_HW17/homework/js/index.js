const btnFight = document.querySelector('.fight');
const btnStart = document.querySelector('.start');
const listHeroes = document.querySelector('.characters-list');
const battleField = document.querySelector('.battle-field');
const armorobj = { knight: 2, footman: 3, rifleman: 4, sorceress:5, priest: 3, paladin: 2 };
const powerobj = { knight: 8, footman: 7, rifleman: 6, sorceress:5 ,priest: 7, paladin: 9 };
const speedobj = { knight: 250, footman: 500, rifleman: 200, sorceress: 500, priest: 250, paladin: 200 };

class Game {
    constructor() {
        this.myheroname;
        this.compheroname;
        this.gameflow;
        this.time = 500;
    }

    choose() {
        alert('Choose your fighter');
        Display.listObj();
        btnStart.hidden = true;
    }

    random(max) {
        return Math.floor(Math.random() * max);
    }

    newStart(user, computer) {
        clearInterval(this.gameflow);
        this.gameflow = setInterval(() => {
            this.startCount(user, computer)
        }, this.time)
    }
    
    startgame() {
        battleField.innerHTML = '';
        battleField.hidden = false;
        btnStart.hidden = false;
        btnFight.hidden = true;
        listHeroes.innerHTML = '';
        listHeroes.hidden = false;
        btnStart.addEventListener('click', this.choose);
        listHeroes.addEventListener('click', () => {
            this.play(event);
        });
    }
    
    startCount(user, computer) {
        if (user.health <= 0 || computer.health <= 0) {
            return this.endGame(user, computer);
        } else {
            user.health = user.health - computer.power/user.armor * this.time/computer.speed;
            const newuser = new Display(user.name, user.armor, user.power, user.health, user.speed);
            newuser.healthChange(user.health);
            computer.health = computer.health - user.power/computer.armor * this.time/user.speed;
            const newcomp = new Display(computer.name, computer.armor, computer.power, computer.health, computer.speed);
            newcomp.healthChange(computer.health);
        }
    }

    endGame(user, computer) {
        if (computer.health <= 0 && user.health <= 0 && computer.health === user.health) {
            alert('Even game');
        }else if (user.health <= 0) {
            alert(`${computer.name} winner!!!!`);
        }else if (computer.health <= 0) {
            alert(`${user.name} winner!!!!!`);
        }
        this.startgame();
    return clearInterval(this.gameflow);
    }

    startAttack(user, computer) {
        document.querySelectorAll('.gif').forEach((el) => {
            el.hidden = false;
        });
        document.querySelectorAll('.portrait').forEach((el) => {
            el.hidden = true;
        });
        this.newStart(user, computer);
    }

    play(e) {
        const myname = e.target.className;
        this.myheroname = new Display(myname, armorobj[myname], powerobj[myname], speedobj[myname])
        battleField.innerHTML = e.target.outerHTML;
        
        let listChildren = [];
        for (let i of listHeroes.children) {
            if (i !== e.target) {
                listChildren.push(i);
            }
        }

        const compHero = this.random(listChildren.length);
        const randomhero = listChildren[compHero];
        const compname = randomhero.className;
        this.compheroname = new Display(compname, armorobj[compname], powerobj[compname], speedobj[compname]);
        battleField.innerHTML+= randomhero.outerHTML;
        
        setTimeout(() => {
            battleField.innerHTML = '';
            this.myheroname.heroCard(battleField);
            this.compheroname.heroCard(battleField);
            document.querySelectorAll('.gif').forEach((el) => {
                el.hidden = true;
            });
            document.querySelectorAll('.characters-list button').forEach((el) => {
                el.hidden = true;
            });
            btnFight.hidden = false;
        }, this.time*4);

        btnFight.addEventListener('click', () => {
            this.startAttack(this.compheroname, this.myheroname);
        });
    }
}


class Unit {
    constructor(name, armor, power, speed) {
        this.health=100;
        this.name = name;
        this.portrait = `http://classic.battle.net/war3/images/human/units/portraits/${name}.gif`;
        this.gif = `http://classic.battle.net/war3/images/human/units/animations/${name}.gif`;
        this.armor = armor;
        this.power = power;
        this.speed = speed;
    }

}

class Display extends Unit{
    constructor(...args) {
        super(...args)
        this.healthPlace = document.querySelector(`.${this.name} .health`);
    }
healthChange(health) {
    this.healthPlace.innerText = `health: ${health.toFixed(1)}`;
    }
heroCard(element) {
    element.innerHTML += `<div class='${this.name} card'>
                    <img class="portrait" src=${this.portrait} alt='hero portrait'>
                    <img class="gif" src=${this.gif} alt='hero gif'>
                    <div class='hero'>
                    <ul>
                    <li>armor: <span>${this.armor}</span></li>
                    <li>power: <span>${this.power}</span></li>
                    <li>speed: <span>${this.speed}</span></li>
                    </ul>
                    <div class='text'>
                    <div class='name'>${this.name}</div>
                    <div class='health'>health: ${this.health}</div>
                    </div>
                    </div>
                    </div>`
        
    }
static listObj(){
    for (let i of Object.keys(armorobj)) {
        listHeroes.innerHTML += `<button type=button class="${i}">${i}</button>`
    }
    }
}

const game = new Game();
game.startgame();