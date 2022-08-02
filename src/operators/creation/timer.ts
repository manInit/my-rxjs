import Observable from '../../core/observable'
import IObserver from '../../core/observer'

export default (timeout: number): Observable => {
  return new Observable((observer: IObserver) => {
    const timerId = setTimeout(() => {
      observer.next()
    }, timeout)

    return {
      unsubscribe: () => {
        clearTimeout(timerId)
      }
    }
  })
}