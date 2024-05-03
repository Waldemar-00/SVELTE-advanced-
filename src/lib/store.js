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

export const derivedStore = derived( [ counter, number ], ( [ $counter, $number ] ) => $counter * $number )

function returnCustomeStore () {
  const { set, update, subscribe } = writable( 111 );
  return {
    reset: () => set( 1 ),
    increment: () => update( ( n ) => n + 2 ),
    decrement: () => update( ( n ) => n - 1 ),
    subscribe
  }
}
export const customStore = returnCustomeStore()