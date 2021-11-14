function iWantToGet(amount) {
    while(amount > 0){
        if(amount - 100 > 100){
            amount -= 100
            console.log('vidano 100')
        }
        else if(amount - 50 > 50){
            amount -= 50
            console.log('vidano 50')
        }
        else if (amount - 20 > 20){
            amount -= 20
            console.log('vidano 20')
        }
        else if (amount - 10 > 10){
            amount -= 10
            console.log('vidano 10')
        }
    }
}
iWantToGet(160);