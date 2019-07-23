function distanceFromHqInBlocks(location) {
 return Math.abs(location - 42)
};

function distanceFromHqInFeet(location) {
  return 264*distanceFromHqInBlocks(location);
};

function distanceTravelledInFeet(loc1, loc2) {
  return Math.abs((loc1 - loc2)*264);
};

function calculatesFarePrice(loc1, loc2) {
  let distance = distanceTravelledInFeet(loc1, loc2)
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400)*0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  };

};
