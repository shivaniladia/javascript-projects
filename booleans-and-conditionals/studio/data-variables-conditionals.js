// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 	850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100 %";
let weatherStatus = "clear";
let preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7){
    console.log ("astronautCount is less than or equal to 7");
}
// add logic below to verify all astronauts are ready
if (astronautStatus === "ready"){
    console.log ("all astronaut are ready");
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg <= 850000){
    console.log ("totalMass is less than or equal to 850000 ");
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius -150 <= -300){
    console.log ("fuelTempCelsius is equal to -150 or less than -300");
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel <= "100%" ){
    console.log ("fuelLevel is 100%");
}
// add logic below to verify the weather status is clear
if (weatherStatus === "clear"){
    console.log ("weatherStatus is clear");
}
// Verify shuttle launch can proceed based on above conditions
if (preparedForLiftOff = true){
    console.log ("shuttle launch will take off");
}