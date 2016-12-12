var somePromise  = new Promise((resolve, reject) =>{
  setTimeout(() => {
    //resolve('Hey, It worked');
    reject('Unable to keep my promise');
  }, 2500);
});

somePromise.then(
  (message) =>{
  console.log('Success: ', message);
}, (errorMessage) => {
  console.log('Error: ', errorMessage);
});
