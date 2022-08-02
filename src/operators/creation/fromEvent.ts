import Observable from '../../core/observable'
import Observer from '../../core/observer'

export default (target: HTMLElement | Document, eventName: string): Observable => {
  return new Observable((observer: Observer) => {
    target.addEventListener(eventName, observer.next)
  })
}