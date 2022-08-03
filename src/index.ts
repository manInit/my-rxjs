import { interval, map, even, multiply, take, range, fromEvent } from './operators/'

const a$ = fromEvent(document, 'click')

a$.pipe(
  map(e => e.clientX),
  even,
  take(5),
).subscribe(val => {
  console.log(val)
})