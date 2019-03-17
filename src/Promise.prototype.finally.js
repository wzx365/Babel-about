let promise = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        resolve(200)
    } else {
        reject(400)
    }
})
promise.then(res => console.log(res)).finally(() => {
    console.log('finally')
})