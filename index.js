// Code your solution in this file!
const hqBlock = 42;

function distanceFromHqInBlocks(block) {
  return Math.abs(block - hqBlock);
}

module.exports = distanceFromHqInBlocks;

function distanceFromHqInFeet(feet){
    return ((38-34)*264)

}
module.exports = distanceFromHqInFeet;


function distanceFromHqInFeet(block) {
    const blocksAway = Math.abs(block - hqBlock);
    const feetPerBlock = 264;
    return (blocksAway) * 264;
  }


  function distanceTravelledInFeet(startBlock, endBlock) {
    const feetPerBlock = 264;
    const blocksTravelled = Math.abs(startBlock - endBlock);
    return blocksTravelled * feetPerBlock;
  }

  function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264;
    const distanceTravelled = Math.abs(start - destination) * feetPerBlock;
    
    if (distanceTravelled <= 400) {
      return 0; // Free for the first 400 feet
    } else if (distanceTravelled > 400 && distanceTravelled <= 2000) {
      return (distanceTravelled - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distanceTravelled > 2000 && distanceTravelled <= 2500) {
      return 25; // Flat rate of $25 for distances over 2000 feet
    } else {
      return 'cannot travel that far'; // Does not allow rides over 2500 feet
    }
  }
  
  // Export the function if using modules
  module.exports = { calculatesFarePrice };
  