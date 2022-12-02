// P a non-negative INTEGER representing seconds
// R - a STRING the time in a human-readable format (HH:MM:SS)
// E (60), '00:01:00'
    //(90), '00:01:30'
// P

function humanReadable (integer) {

    //3599

    //hours => 0

   let hours = Math.floor(integer / 3600)
    if (hours < 10 ) {
        hours = `0${hours}`
    }
   
    //minutes => 59 
    let minutes = Math.floor(((integer / 3600) - hours ) * 60)
    if (minutes < 10 ) {
        minutes = `0${minutes}`
    }

    let seconds = integer % 60
   
    // let seconds  = ((((integer / 3600) - hours ) * 60) - minutes) * 60


    // if (seconds )
    if (seconds < 10 ) {
        seconds = `0${seconds}`
    }
    // } else if ( seconds > 59) {
    //     seconds = Math.floor(((((integer / 3600) - hours ) * 60) - minutes) * 60)
    // }

  



    return `${hours}:${minutes}:${seconds}`
  }

  //seconds should be 56 

  console.log(humanReadable(45296))