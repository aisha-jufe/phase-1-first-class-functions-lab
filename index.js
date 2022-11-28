
const returnFirstTwoDrivers=function(arrays){
return arrays.slice(0,2)
}
const returnLastTwoDrivers=function(drivers){
    return drivers.slice(-2)
}
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]
function createFareMultiplier(int){
    return function (fare){
        return int*fare
    }
    
}
function fareDoubler(fare){
    const doubler=createFareMultiplier(2)
    return doubler(fare)
}
function selectDifferentDrivers(array,selector){
    return selector(array)
}
function fareTripler (fare){
    const tripler=createFareMultiplier(3)
    return tripler(fare)}

