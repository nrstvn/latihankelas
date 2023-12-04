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