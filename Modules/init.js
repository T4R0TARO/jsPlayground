// init module
//TODO📌: import modules 
import {fromSelect, toSelect} from './elements.js';
import currencies from './currencies.js';
import { generateOptions } from './utils.js';
import { handleInput } from './handlers.js';




export function init() {
    // when the page loads, this code runs!
    const form = document.querySelector('.app form');
    
    // Init Module 2
    const optionsHTML = generateOptions(currencies);
    // populate the options elements
    fromSelect.innerHTML = optionsHTML;
    toSelect.innerHTML = optionsHTML;
    
    form.addEventListener('input', handleInput);
}