// import helloWorld from "./helloWorld.js";
//  helloWorld();

Callback
setTimeout(() => {
  console.log("Proses 1");
  setTimeout(() => {
    console.log("Proses 2");
    setTimeout(() => {
      console.log("Proses 3");
      setTimeout(() => {
        console.log("Proses 4");
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);


// Buat promise
let condition = true;
const newPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("HelloWorld");
  } else {
    reject("Gagal");
  }
});
const consumePromise = async () => {
  try {
    let result = await newPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
consumePromise();