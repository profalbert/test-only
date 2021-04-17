enum Gender {
  Male,
  Female,
}

const groupBy = <T>(array: Array<T>, callback: Function): object => {
  const result = {}

  array.forEach((el) => {
    const key = callback(el)
    if (!(result[key] instanceof Array)) result[key] = []
    result[key].push(el)
  })

  return result
}

console.log(groupBy([1.2, 1.1, 2.3, 0.4], Math.floor))
console.log(groupBy(['one', 'two', 'three'], (el) => el.length))
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
