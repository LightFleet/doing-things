const input = [
    ['usd', 'buy', 10000],
    ['usd', 'sell', 5000],
    ['gbp', 'buy', 9000],
    ['eur', 'sell', 7000],
    ['uah', 'buy', 10000],
    ['usd', 'sell', 25000],
]

function getDailyReport(transacts) {
    let dailyReport = {}

    for (let i = 0; i < transacts.length; i++){
        if (!(transacts[i][0] in dailyReport)){
            if (transacts[i][1] === 'buy'){
                dailyReport[transacts[i][0]] = transacts[i][2]
            }
            else if (transacts[i][1] === 'sell'){
                dailyReport[transacts[i][0]] = -transacts[i][2]
            }
        } else {
            if (transacts[i][1] === 'buy'){
                dailyReport[transacts[i][0]] += transacts[i][2]
            }
            else if (transacts[i][1] === 'sell'){
                dailyReport[transacts[i][0]] -= transacts[i][2]
            }
        }
    }

    return dailyReport;
}

console.log(getDailyReport(input));