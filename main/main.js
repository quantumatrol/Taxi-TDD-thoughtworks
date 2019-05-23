module.exports = function main(distance,parkTime) {
    // write your code here...
    const feeForDistance = 0.8;
    const startingFee = 6;//for first 2km
    const feeForParkTime = 0.25;
    const extraFeeDistance = 8;
    const extraFeeRate = 0.5;
    const startingDistance = 2;

    var price = 0;
    //distance = 2;
    //parkTime = 0;

    if(distance > startingDistance)
    {
        if(distance > extraFeeDistance)//高于加费里程
            price = startingFee + feeForParkTime*parkTime + (distance-startingDistance)*feeForDistance 
                + (distance-extraFeeDistance)*feeForDistance*extraFeeRate;
        else
            price = startingFee + feeForParkTime*parkTime + (distance-startingDistance)*feeForDistance;
    }
    else//起步价
        price = startingFee + feeForParkTime*parkTime;

    //console.log(Math.round(price));

    return Math.round(price);
};
