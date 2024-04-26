// @ts-nocheck
// place files you want to import through the `$lib` alias in this folder.
import { writable } from 'svelte/store';
export const counter = writable( 0 );
export const object = writable({name: 'Olaf', age: 42})