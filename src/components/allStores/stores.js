// @ts-nocheck
import { writable, readable, derived, readonly } from 'svelte/store';
export const wrt = writable( 1000 );
export const rdb = readable( generateRandom(), ( set ) => {
  const counterTimer = setInterval( () => set( generateRandom() ), 1000 );
  return function stop () {
    clearTimeout( counterTimer );
  }
} );
export const rdo = readonly( rdb )
export const drv = derived( [ wrt, rdo ], ( [ $wrt, $rdo ], set ) => {set($wrt + $rdo)}, 278 );

function generateRandom () {
  return Math.floor(Math.random() * 100)
}