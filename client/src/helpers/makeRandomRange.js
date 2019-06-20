export const makeRandomRange = x => {
    var used = new Array(x),
        exhausted = false;

    return function getRandom() {
        var random = Math.floor(Math.random() * x);

        if (exhausted) {
            return random;
        } else {
            for (var i=0; i<x; i++) {
                random = (random + 1) % x;
                if (random in used)
                    continue;
                used[random] = true;
                return random;
            }
            // no free place found
            exhausted = true;
            used = null; // free memory
            return random;
        }
    };
}
