import Observable from './core/observable'
import Observer from './core/observer'

const a$ = new Observable((observer: Observer) => {
  observer.next(2)
  observer.next(3)
  observer.next(4)
  observer.next(5)
})

a$.subscribe(x => {
  console.log(x)
})