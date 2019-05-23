module.exports = function main(inputs) {
    // write your code here...
    const feeForDistance = 0.8;
    const startingFee = 6;//for first 2km
    const feeForParkTime = 0.25;
    const extraFeeDistance = 8;
    const extraFeeRate = 0.5;
    const startingDistance = 2;

    var summary = 0;
    //distance = 2;
    //parkTime = 0;

    if(inputs.distance > startingDistance)
    {
        if(inputs.distance > extraFeeDistance)//高于加费里程
            summary = startingFee + feeForParkTime*inputs.parkTime + (inputs.distance-startingDistance)*feeForDistance 
                + (inputs.distance-extraFeeDistance)*feeForDistance*extraFeeRate;
        else
            summary = startingFee + feeForParkTime*inputs.parkTime + (inputs.distance-startingDistance)*feeForDistance;
    }
    else//起步价
        summary = startingFee + feeForParkTime*inputs.parkTime;

    //console.log(Math.round(summary));

    return Math.round(summary);
};
