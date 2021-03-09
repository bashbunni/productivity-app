/**
 * this store manages state for habits
 */
import habitItemSchema from './habitItem';

const Store = require('electron-store');

const store = new Store({habitItemSchema});

console.log(store.get('test'));

/**
 *store.set('unicorn', '🦄');
console.log(store.get('unicorn'));
=> '🦄'

// Use dot-notation to access nested properties
store.set('foo.bar', true);
console.log(store.get('foo'));
//=> {bar: true}

store.delete('unicorn');
console.log(store.get('unicorn'));
=> undefined
*/
