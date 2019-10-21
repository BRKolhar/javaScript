var visitorCount = (function() 
{
    var privateVisitorCounter = 0;
    
    // inner function
    function changeBy(val) 
    {
        privateVisitorCounter += val;
    }


    return {
        increment: function() {
            changeBy(1);
        },
        decrement: function() {
            changeBy(-1);
        },
        totalHits: function() {
            return privateVisitorCounter;
        }
    };
})();




console.log(visitorCount.totalHits());
visitorCount.increment();
console.log(visitorCount.totalHits());
visitorCount.decrement();
console.log(visitorCount.totalHits());
visitorCount.increment();
console.log(visitorCount.totalHits());
// output
// 0
// 1
// 0
// 1
