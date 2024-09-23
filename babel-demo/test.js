
// import "core-js/stable";
// import "regenerator-runtime/runtime";

const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Success");
  }, 2000);
});

promise
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error(error);
  });
