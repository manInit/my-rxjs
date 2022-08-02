import Observable from '../../core/observable'
import IObserver from '../../core/observer'

export default (target: HTMLElement | Document, eventName: string): Observable => {
  return new Observable((observer: IObserver) => {
    target.addEventListener(eventName, observer.next)

    return {
      unsubscribe: () => {
        target.removeEventListener(eventName, observer.next)
      }
    }
  })
}