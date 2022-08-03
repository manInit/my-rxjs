import { Observable, IObserver } from '../../core'

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