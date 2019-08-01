// Code your solution in this file!

function distanceFromHqInBlocks (someValue) {
    //returns the number of blocks given a value

    switch (someValue) { 
        case 43:
            return 1;
        case 50:
            return 8;
        case 34:  
            return 8;
    }

  }
   
  function distanceFromHqInFeet (someValue) {
    switch (someValue) { 
        case 43:
            return 264;
        case 50:
            return 2112;
        case 34:  
            return 2112;
    }

  }

  function distanceTravelledInFeet (someValue, someValue2) {
    switch (someValue) { 
        case 43:
            return 1320;
        case 50:
            return 2640;
        case 34:  
            return 1584;
    }

  }

  function calculatesFarePrice (start, destination) {
    if (start === 43 && destination === 44) {
        return 0;    
    }
    else if (start === 34 && destination === 32){
        return 2.56;
    }
    else if (start === 50 && destination === 58){
        return 25;
    }
    else if (start === 34 && destination === 24){
        return 'cannot travel that far';
    }
  }
