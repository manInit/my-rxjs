import { Observable, IObserver } from '../../core'

export default (source: Observable): Observable => {
  return new Observable((observer: IObserver) => {
    return source.subscribe({
      next: (val: any) => {
        if (val % 2 === 0) {
          observer.next(val)
        }
      },
      error: (e: any) => {
        if (observer.error)
          observer.error(e)
      },
      complete: () => {
        if (observer.complete)
          observer.complete()
      },
    })
  })
}