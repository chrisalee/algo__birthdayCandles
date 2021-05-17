function birthdayCakeCandles(candles) {
    // Write your code here
    let maxNum = candles[0];
    let count = 0;
    for(let i = 0; i < candles.length; i++){
        if(candles[i] > maxNum) {
            maxNum = candles[i];
        } else {
            i++;
        }
    }
    for(let j = 0; j < candles.length; j++){
        if(candles[j] === maxNum){
            count++;
        }
    }
    console.log(count);
    return count;
}
