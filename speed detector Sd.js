////Speed detector (Toy problem)////


// basespeed =70km/h //
// vehicle speed -y //

// to find demerit point - (baseSpeed - limit ) /5

function giveDemeritpoints (speed){
let demerit= (speed-basespeed) /5
if (speed <70){
    console.log ("ok")
}else if (demeritpoint > 12){
    console.log("license suspended")
}else {
    console.log('total Demerit points:${demeritpoint}')
}
}