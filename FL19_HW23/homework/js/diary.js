import { toMonthName} from './var'
import {yearPlace} from './year'


function diaryF(el) {
    el.addEventListener('click', (event) => {
        
        if (event.target.classList[0] === 'day' || event.target.classList[0] === 'day1') {
            
            let id = event.target.id.split(' ');
            let year = id[0];
            let month = toMonthName(id[1]);
            let date = id[2];
            let xx = localStorage.getItem(`${year}/${month}/${date}`)||'';
            el.innerHTML = `<div class="diary">
                            <div class="today">
                            <h2>${date} of ${month} ${year}</h2>
                            <h2>Just Print Your Thoughts Here</h2>
                            </div>
                            <hr>
                            <br>
                            <textarea id="blank">${xx}</textarea>
                            <button class="tomonth" type="button">Back To Calendar</button>
                            </div>`;
 
        
        const monthButton = document.querySelector('.tomonth');    
            monthButton.addEventListener('click', () => {
           
                const textArea = document.getElementById('blank');
                if (textArea.value) {
                    localStorage.setItem(`${year}/${month}/${date}`, `${textArea.value}`)
                }
                    let vv = localStorage.getItem('year');
                    yearPlace(year, Number(vv));
                
            
        })
           
        }
    })
}
export {diaryF}
