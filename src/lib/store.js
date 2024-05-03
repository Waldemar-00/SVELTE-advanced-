// @ts-nocheck
import { writable, readable, derived} from 'svelte/store'
export const counter = writable( 10 );
export const number = writable( 4 );
export const time = readable(new Date(), function start( set ) {
  const interval = setInterval(() => {
    set( new Date() )
  }, 1000 );
  return function stop () {
    clearInterval( interval );
  }
} );
export const someData = readable( 'SomeData' );

export const derivedStore = derived( [ counter, number ], ([ $counter, $number]) => $counter * $number)