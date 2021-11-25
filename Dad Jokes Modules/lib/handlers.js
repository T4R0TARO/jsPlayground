import  fetchJoke  from './index.js'
import {jokeButtonSpan, loader, jokeButtonSpan } from './elements.js'
import {randomItemFromArray} from '.lib/utils.js'
import buttonText from '../data/buttonText.js'

/** handleClick()
 * calls fetchJoke()
 * Change textContent of elements on handleClick()
 */
 export async function handleClick() {
    const { joke } = await fetchJoke(loader);
    jokeHolder.textContent = joke;
    jokeButtonSpan.textContent = randomItemFromArray(
      buttonText,
      jokeButtonSpan.textContent
    );
  }