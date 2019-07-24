let hqBlock = 42;
function distanceFromHqInBlocks(destination){
  let distance
  if (destination < hqBlock)
    distance = (hqBlock - destination);
  else
    distance = (destination - hqBlock);
  return distance
}

let block = 264;
function distanceFromHqInFeet(someDest){
  let feet;
  if (someDest < hqBlock)
    feet = (hqBlock - someDest) * block;
  else
    feet = (someDest - hqBlock) * block;
  return feet
}

function distanceTravelledInFeet(someStart, someDest){
  let feet;
  if (someDest < hqBlock)
    feet = (someStart - someDest) * block;
  else
    feet = (someDest - someStart) * block;
  return feet
}

function calculatesFarePrice(someStart, someDest){
  let fare;
  let distance = distanceTravelledInFeet(someStart, someDest);
  if (distance > 2500)
    fare = 'cannot travel that far';
  else if (distance > 2000 && distance < 2500)
      fare = 25;
  else if (distance > 400 && distance <= 2000)
      fare = (distance - 400) * .02;
  else
    fare = 0;

  return fare;
}
