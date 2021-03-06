import { convert } from './lib.js';
import { formatCurrency } from './utils.js';
import { fromInput, fromSelect, toSelect, toEl } from './elements.js';

// Handlers Module
export async function handleInput(e) {
    const rawAmount = await convert(
      fromInput.value,
      fromSelect.value,
      toSelect.value
    );
    toEl.textContent = formatCurrency(rawAmount, toSelect.value);
  }