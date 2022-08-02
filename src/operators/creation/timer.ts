import Observable from '../../core/observable'
import Observer from '../../core/observer'

export default (timeout: number): Observable => {
  return new Observable((observer: Observer) => {
    const timerId = setTimeout(() => {
      observer.next()
    }, timeout)
  })
}