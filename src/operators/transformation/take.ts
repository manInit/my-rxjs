import { IObserver, Observable, TransformationOperator } from '../../core'

export default (maxEvents: number): TransformationOperator => {
  return (source: Observable): Observable => {
    return new Observable((observer: IObserver) => {
      let counter = 0
      const subscription = source.subscribe({
        next: (val: any) => {
          observer.next(val)
          counter++
          if (counter === maxEvents) {
            if (observer.complete)
              observer.complete()
            setTimeout(() => {
              subscription.unsubscribe()
            })
          }
        },
        error: (e) => {
          if (observer.error)
            observer.error(e)
        },
        complete: () => {
          if (observer.complete)
            observer.complete()
        },
      })
      return subscription
    })
  }
}