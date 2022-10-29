const start = document.body;
start.onload = () => {
    start.innerHTML = ` <div class="name">Users</div>
                        <div class="buttons">
                            <button class="button-js" type="button">Load by JS</button>
                            <button class="button-fetch" type="button-fetch">Load by Fetch</button>
                        </div>
                        <div class="containers">
                            <div class="box container-js"></div>
                            <div class="box container-fetch"></div>
                        </div>`

    const buttonJS = document.querySelector('.button-js');
    const buttonFetch = document.querySelector('.button-fetch');
    const contentJS = document.querySelector('.container-js');
    const contentFetch = document.querySelector('.container-fetch');
    let text = {};
    let time = 500;
    const url = 'https://jsonplaceholder.typicode.com/';
    
    buttonJS.addEventListener('click', jsload);
    
    function jsload() {
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('GET', url + 'users');
        xhr.onload = () => {
            const list = xhr.response;
                contentJS.innerHTML = '';
                list.forEach((i) => {
                    contentJS.innerHTML += `<div class='namesjs'>${i.name}</div>`
                });
        }
        contentJS.innerHTML = `<div class='loading'><div class="load"></div></div>`;
        xhr.send();
    }

    buttonFetch.addEventListener('click', fetchload);
    
    function fetchload() {
        fetch(url + 'users').then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                let error = new Error(response.statusText)
                error.response = response;
                throw error;
            }
        }).then((res) => {
            contentFetch.innerHTML = '';
            res.forEach((i) => {
                contentFetch.innerHTML += `<div id='${i.id}'class="namesfetch">
                                                <p>${i.name}</p>
                                                <div class="editing buttons">
                                                    <button data-id='${i.id}' class='button-edit'>Edit</button>
                                                    <button data-id='${i.id}' class='button-delete'>Delite</button>
                                                </div>
                                                <div class="buttons">   
                                                    <input data-id='${i.id}' type='text'>
                                                    <button data-id='${i.id}' class='button-save'>Save</button>
                                                </div>
                                                </div>`
            });

        }).catch(error => {
            console.log(error)
        })
        contentFetch.innerHTML = `<div class='loading'><div class="load"></div></div>`;
    }

    const container = document.querySelector('.container-fetch');
    container.addEventListener('click', contentload);
    
    function contentload(event) {
        const btn = event.target;
        if (btn.classList.value === 'button-delete') {
            let load = document.getElementById(`${btn.dataset.id}`)
            deleteload(btn, load);
            load.innerHTML += `<div class='loading'><div class="load"></div></div>`;
        }else if (btn.classList.value === 'button-edit') {
            let load = document.getElementById(`${btn.dataset.id}`);
            const input = load.getElementsByTagName('input');
            if (text[btn.dataset.id]) {
                editload(btn, load, input);
                load.innerHTML += `<div class='loading'><div class="load"></div></div>`;
            }
            
        }else if (btn.classList.value === 'button-save') {
            const input = btn.previousElementSibling;
            saveload(input, btn);
        } 
    }

    function deleteload(btn, load) {
        fetch(url + 'users/' + `${btn.dataset.id}`, {
            method: 'DELETE'
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                let error = new Error(response.statusText)
                error.response = response;
                throw error;
            }
        })
        .then((json) => {
            if (json.hasOwnProperty()) {
                load.innerHTML = json
            } else {
                load.innerHTML = '';
                setTimeout(() => {
                    alert(`User with id - ${btn.dataset.id} was deleted`)
                }, time)
            }
        }).catch(error => {
            console.log(error)
        }) 
    }              

    function editload(btn, load, input) {
        fetch(url + 'users' + `/${btn.dataset.id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                name: `${text[btn.dataset.id]}`
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then((response) => response.json())
            .then((json) => {
                load.firstElementChild.innerText = json.name;
                load.lastElementChild.remove();
                input[0].classList.remove('red');
                text[btn.dataset.id] = '';
            })
    }

    function saveload(input, btn) {
        if (input.value) {
            text[btn.dataset.id] = input.value;
            input.classList.add('red');
        }
    }

}
