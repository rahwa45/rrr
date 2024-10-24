
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function greet() {
  console.log("JS is");
  await delay(2000); 
  console.log("Interesting");
}

greet();

