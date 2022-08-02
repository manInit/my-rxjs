import Observable from '../../core/observable'
import IObserver from '../../core/observer'

export default (timeout: number): Observable => {
  return new Observable((observer: IObserver) => {
    let count = 0
    const intervalId = setInterval(() => {
      observer.next(count++)
    }, timeout)

    return {
      unsubscribe: () => {
        clearInterval(intervalId)
      }
    }
  })
}