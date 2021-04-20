customerOne = {location: "TX", history: true, gallon: 1500}
customerTwo = {location: "CA", history: false, gallon: 12}

function calcPricePerGallon(customer){
    let locationFactor = 0;
    let historyFactor = 0;
    let gallonFactor = 0;
    const profitFactor = 0.1;
    let margin = 0;
    if (customer.location === "TX"){
        locationFactor = 0.02
    }
    else {
        locationFactor = 0.04
    }
    if (customer.history){
        historyFactor = 0.01
    }
    if (customer.gallon > 1000){
        gallonFactor = 0.02
    }
    else {
        gallonFactor = 0.03
    }
    margin = ( locationFactor - historyFactor + gallonFactor + profitFactor) * 1.50
    console.log(margin)
    return 1.5 + margin
}
function calcTotal (customerIn) {
    return calcPricePerGallon(customerIn) * customerIn.gallon
}
console.log(calcTotal(customerOne));