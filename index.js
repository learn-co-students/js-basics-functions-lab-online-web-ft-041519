// Code your solution in this file!
function distanceFromHqInBlocks(endingBlock) {
    return Math.abs(endingBlock - 42)
}

function distanceFromHqInFeet(endingBlock) {
    return distanceFromHqInBlocks(endingBlock) * 264
}

function distanceTravelledInFeet(start, destination) {
    let blocks = destination - start
    return Math.abs(blocks * 264)
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 401) {
        return 0
    } else if (distanceTravelledInFeet(start, destination) < 2001) {
        return (distanceTravelledInFeet(start, destination) - 400) * 0.02
    } else if (distanceTravelledInFeet(start, destination) < 2501) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}