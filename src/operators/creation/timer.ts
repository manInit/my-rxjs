import { Observable, IObserver } from '../../core'

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