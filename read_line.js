const readline = require("readline");


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const DB_PASSWORD = "12345";

rl.question("Password: ", (response) => {
  if (response.trim() === DB_PASSWORD) {
    console.log("Login successful!");
    rl.close();
  } else {
    // Allow retries.
    rl.setPrompt("Incorrect username or password, retry\nPassword: ");
    rl.prompt();

    // listen for input
    rl.on("line", (retryResponse) => {
      if (retryResponse.trim() === DB_PASSWORD) {
        console.log("Login successful!!");
        rl.close();
      }
    })
  }
})