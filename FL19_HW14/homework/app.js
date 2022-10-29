const root = document.getElementById('root');
const images = document.getElementById('characters-wrap');
const searchImage = document.getElementById('search-btn');
const element = document.getElementById('characters-wrap');
const inputId = document.getElementById('search-input');
const load = document.querySelector('.load-more');
const rowLength = 5;
let list = [];
let iD;
let rowStart;


window.addEventListener('load', loadItem);


function createInputeRow() {
    if (!rowStart) {
        images.innerHTML += `<div class='row row0'></div>`;
        rowStart = document.querySelector(`.row0`);
    } else {
        rowStart = document.querySelector(`.row0`);
    }
    return rowStart;
}


function loadItem() {
    if (localStorage.getItem('list')) {
        const listold = localStorage.getItem('list').split(',');
        for (let el = 0; el < listold.length; el++) {
            getImage(listold[el]);
        }
    }
}


searchImage.addEventListener('click', () => {
    const iD = inputId.value;
    localStorage.setItem('list', iD);
    loadItem();
});


function cicleElemFlow(firstRowFlow, i) {
    let firstInRow = firstRowFlow.firstChild;
    firstRowFlow.firstChild.remove();
    let nextRowFlow = document.querySelector(`.row${i}`)
    if (!nextRowFlow) {
        images.innerHTML += `<div class='row row${i} hide'></div>`;
        nextRowFlow = document.querySelector(`.row${i}`)
        nextRowFlow.append(firstInRow);
    } else if (nextRowFlow.children.length >= rowLength) {
        nextRowFlow.append(firstInRow);
        i++;
        cicleElemFlow(nextRowFlow, i);
    } else {
        nextRowFlow.append(firstInRow);
    }
}

async function getImage(iD) {
    let url = `https://rickandmortyapi.com/api/character/${iD}`;
    await fetch(url)
        .then((response) => {
            console.log(response)
            if (!iD || !response.ok || !response.statusText === '') {
                throw Error('Character not found');
            } else if (list.includes(iD)) {
                throw Error('Character is already in the list');
            }list.push(iD);
            localStorage.setItem('list', list.join());
            return response.json();
        }).then((response) => {
            createInputeRow();
            rowStart.innerHTML += `<div id=${response.id} class='clear-all '><img src=${response.image}
            alt=${response.name} ><p>${response.name}</p><button class='clear-button ${iD}' 
            type='button'>delete</button></div>`;
            return rowStart;
        }).then((response) => {
            if (response.children.length > rowLength) {
                cicleElemFlow(response, 1);
            }
        }).catch(function (error) {
            localStorage.setItem('list', list.join());
            alert(error);
        })
    inputId.focus();
    inputId.value = '';
}


element.addEventListener('click', clear)
function clear() {
    let log = event.target;
    if (log.tagName === 'BUTTON') {
        const reply = confirm(`Do you want to delete ${log.previousElementSibling.textContent}?`)
        if (reply) {
            const parent = log.closest('DIV');
            let parpar = parent.closest('div.row')
            parent.remove();
            let index = list.indexOf(parent.id);
            list.splice(index, 1);
            localStorage.setItem('list', list.join());
            if (parpar.children.length === 0) {
                parpar.remove();
            }
        }    
    } 
}



load.addEventListener('click', () => {
    const rowHide = document.querySelectorAll('.hide');
    if (rowHide[0]) {
        rowHide[0].classList.remove('hide');
        rowHide[0].scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        
    }
})

