enum Gender {
  Male,
  Female,
}

type TCallback<T> = (el: T) => string | number
type TResult<T> = {
  [key in ReturnType<TCallback<T>>]: Array<T>
}

const groupBy = <T>(array: Array<T>, callback: TCallback<T>): TResult<T> => {
  const result: TResult<T> = {}

  array.forEach((el) => {
    const key: ReturnType<TCallback<T>> = callback(el)
    if (!Array.isArray(result[key])) result[key] = []
    result[key].push(el)
  })

  return result
}

console.log(groupBy([1.2, 1.1, 2.3, 0.4], Math.floor))
console.log(groupBy(['one', 'two', 'three'], (el) => el.length))
console.log(groupBy(['one', 'two', 'three'], (el) => el.split('').pop()))
console.log(
  groupBy(
    [
      { g: Gender.Male, n: 'A' },
      { g: Gender.Female, n: 'B' },
      { g: Gender.Female, n: 'C' },
    ],
    (el) => el.g,
  ),
)
