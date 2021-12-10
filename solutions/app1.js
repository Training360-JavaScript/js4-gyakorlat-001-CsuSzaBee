function converterPromise(array) {
  return new Promise((resolve, reject) => {
    if (array.find(el => typeof el !== "string") === undefined) {
      resolve(array.map(item => item.toUpperCase()))
    } else {
      reject('Error: Not all elements are string type!')
    }
  })
}


export default converterPromise;
