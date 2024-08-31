function distanceFromHqInBlocks(street) {
    return Math.abs(42 - street);
}

distanceFromHqInBlocks(41);

function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264;
}

distanceFromHqInFeet(50);

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264; 
}

distanceTravelledInFeet(42, 50);

function calculatesFarePrice(start, destination) {
    let dist = distanceTravelledInFeet(start, destination);
    if (dist <= 400)
    return 0;
else if (dist > 400 && dist <= 2000)
    return (dist - 400) * .02;
else if (dist > 2000 && dist < 2500)
    return 25;
else if (dist > 2500)
    return "cannot travel that far";   
}

calculatesFarePrice(50, 58);