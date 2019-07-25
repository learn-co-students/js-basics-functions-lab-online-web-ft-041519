// Code your solution in this file!
//function scuberGreetingForFeet(feet){
  // Write your code here!
function distanceFromHqInBlocks(block) {
  return Math.abs(block - 42);
}

function distanceTravelledInFeet(block1, block2) {
  return Math.abs(block2 - block1) * 264;
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

function calculatesFarePrice(start, destination) {
  let distance;
  let fare;
  distance = distanceTravelledInFeet(start, destination);
  if (distance > 2500) {
    fare = "cannot travel that far";
  } else if (distance > 2000 && distance < 2500) {
    fare = 25;
  } else if (distance > 400 && distance <= 2500) {
    fare = (distance - 400)* 0.02;
  } else {
    fare = 0;
  }
  return fare;
}
