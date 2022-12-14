export default interface IObserver {
  next: (val?: any) => void
  error?: (e: any) => void
  complete?: () => void
}