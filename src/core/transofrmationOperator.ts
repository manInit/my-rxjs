import Observable from './observable'

type TransformationOperator = (source: Observable) => Observable

export default TransformationOperator