import Observable from '../../core/observable'
import IObserver from '../../core/observer'

export default (start: number, count: number): Observable => {
  return new Observable((observer: IObserver) => {
    for (let current = start; current < start + count; current++) {
      observer.next(current)
    }

    if (observer.complete)
      observer.complete()

    return {
      unsubscribe: () => {}
    }
  })
}