function sorterPromise(array) {
  return new Promise((resolve, reject) => {
    if (array.filter(el => typeof el !== "string").length === 0) {
      resolve(array.sort())
    } else {
      reject('Error: Not all elements are string type!')
    }
  })
}


export default sorterPromise;
