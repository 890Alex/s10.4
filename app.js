const filterOutOdds = (...args) => args.filter(n => n % 2 === 0)

const findMin = (...args) => Math.min(...args)

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(n => n * 2)] 

const removeRandom = items => {
    let index = Math.floor(Math.random() * items.length)
    return [...items.slice(0, index), ...items.slice(index + 1)]
}

const extend = (arr1, arr2) => [...arr1, ...arr2]

const addKeyVal = (obj, key, value) => ({...obj, [key] : value})

const removeKey = (obj, key) => ({...obj, [key] : undefined})

const combine = (obj1, obj2) => ({...obj1, ...obj2})

const update = (obj, key, value) => ({...obj, [key] : value})