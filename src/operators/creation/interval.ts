import Observable from '../../core/observable'
import Observer from '../../core/observer'

export default (timeout: number): Observable => {
  return new Observable((observer: Observer) => {
    let count = 0
    const intervalId = setInterval(() => {
      observer.next(count++)
    }, timeout)
  })
}