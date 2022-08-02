export default interface Observer {
  next: (val: any) => void
  error?: (e: any) => void
  complete?: () => void
}