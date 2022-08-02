import Observer from './observer'

export default class Observable {
  private _subscribe: (observer: Observer) => void
  
  constructor(subscribe) {
    this._subscribe = subscribe
  }

  public subscribe(observer: Observer | ((val: any) => void)) {
    if (typeof observer === 'function') {
      observer = {
        next: observer
      }
    }
    
    this._subscribe(observer)
  }
}