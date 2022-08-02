import fromEvent from './operators/creation/fromEvent'

const a$ = fromEvent(document, 'click')

a$.subscribe(x => {
  console.log(x)
})