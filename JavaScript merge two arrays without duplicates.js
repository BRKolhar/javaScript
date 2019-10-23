
        window.removeDuplicates=(array)=>
        {
            var indexValue = {};
            array.forEach(function(i) {
            if (!indexValue[i]) {
                    indexValue[i] = true;
                }
            });
            return Object.keys(indexValue);
        };
        
        window.sortIntegerArray=(array)=>
        {
            var indexValue = {};
            array.forEach(function(i) {
            if (!indexValue[i]) {
                    indexValue[i] = true;
                }
            });
            return Object.keys(indexValue);
        };

        var array1 = [10, 1, 3, 5, 3, 5, 4];
        var array2 = [5, 6, 2, 5, 3, 5, 4,2];
        var array3 = array1.concat(array2);
        console.info(sortIntegerArray(array3));
