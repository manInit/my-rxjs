import { Observable, IObserver, TransformationOperator } from '../../core'

export default (projection: (val: any) => any): TransformationOperator => {
  return (source: Observable): Observable => {
    return new Observable((observer: IObserver) => {
      return source.subscribe({
        next: (val: any) => {
          observer.next(projection(val))
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
    }) 
  }
}