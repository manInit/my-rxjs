import IObserver from './observer'
import ISubscription from './subscription'

export default class Observable {
  private _isStop: boolean
  private _subscription: ISubscription | undefined
  
  constructor(
    private _subscribe: (observer: IObserver) => ISubscription
  ) {
    this._isStop = true
  }

  public subscribe(sourceObs: IObserver | ((val?: any) => void)): ISubscription {
    this._isStop = false

    let observer: IObserver
    if (typeof sourceObs === 'function') {
      observer = {
        next: sourceObs
      }
    } else {
      observer = sourceObs
    }
    
    this._subscription = this._subscribe({
      next: (val?: any): void => {
        if (!this._isStop) {
          observer.next(val)
        }
      },
      complete: (): void => {
        if (!this._isStop) {
          if (observer.complete) observer.complete()
          this._stop()
        }
      },
      error: (e: any): void => {
        if (!this._isStop) {
          if (observer.error) observer.error(e)
          this._stop()
        }
      }
    })

    return this._subscription
  }

  private _stop(): void {
    this._isStop = true
    setTimeout(() => {
      this._subscription?.unsubscribe()
    })
  }
}