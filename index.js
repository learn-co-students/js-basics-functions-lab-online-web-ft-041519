function distanceFromHqInBlocks(value) {
    return value >= 42 ? value - 42 : 42 - value
}

function distanceFromHqInFeet(value) {
    return distanceFromHqInBlocks(value) * 264
}

function distanceTravelledInFeet(val1, val2) {
    if (val1 >= val2) {
        return (val1 - val2)*264
    } else {
        return (val2 - val1)*264
    }
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
    
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400)*.02;
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else if (distance >= 2500) {
        return 'cannot travel that far';
    }
}