import Observable from '../../core/observable'
import IObserver from '../../core/observer'
import TransformationOperator from '../../core/transofrmationOperator'

export default (by: number): TransformationOperator => {
  return (source: Observable): Observable => {
    return new Observable((observer: IObserver) => {
      return source.subscribe({
        next: (val: any) => {
          observer.next(val * by)
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