// @ts-nocheck
import { writable, readable } from 'svelte/store'
export const counter = writable( 10 );
export const time = readable(new Date(), function start( set ) {
  const interval = setInterval(() => {
    set( new Date() )
  }, 1000 );
  return function stop () {
    clearInterval( interval );
  }
} );

export const someData = readable('SomeData')