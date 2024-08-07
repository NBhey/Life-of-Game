import './style/style.css'
const inputHeight = document.createElement('input');
inputHeight.type = 'number';
inputHeight.min = '0';
inputHeight.placeholder = 'Столбец';
const inputWidth = document.createElement('input');
inputWidth.type = 'number';
inputWidth.min = '0';
inputWidth.placeholder = 'Строка';

const body: HTMLElement | null = document.querySelector('body');
console.log(body);
body?.prepend(document.createElement('menu'));

const menu: HTMLElement | null  = document.querySelector('menu');
menu?.append(inputHeight,inputWidth);

function createField() {
   const tr:HTMLElement =  document.createElement('tr');
   const td:HTMLElement =  document.createElement('td');
   tr.append(td);
   document.querySelector('table')?.append(tr);
    // for (let i = 0; i < Number(inputHeight.value); i+=1){
    //     let tr = document.createElement('tr');
        
    //     for (let j = 0; j < Number(inputWidth.value); j+=1){
    //         let td = document.createElement('td');
    //         tr.appendChild(td)
    //     }
    //     document.querySelector('table')?.append(tr);
    // }
}
inputHeight.addEventListener('change',createField)