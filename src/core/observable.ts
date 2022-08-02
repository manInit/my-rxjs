export default class Observable {
  private _subscribe
  
  constructor(subscribe) {
    this._subscribe = subscribe
  }

  public subscribe() {
    this._subscribe()
  }
}