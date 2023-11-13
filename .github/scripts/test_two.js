module.exports = async ({github, context, check_value1, check_value2}) => {
  function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  var counter = 1;
  async function checkIfMerged() {
      while (counter < 9) {
          try {
              console.log(counter)
              console.log(test)
          } catch (error) {
              await sleep(5000);
              counter++;
              if (counter == 9) {
                console.log("done");
              }
          }
      }
  }
  
  setTimeout(checkIfMerged, 10000);
}
