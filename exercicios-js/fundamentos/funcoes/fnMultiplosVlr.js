/**
 * obtendo múltiplos valores a partir de uma função
*/
    function getSize(width, height, depth) {
        var area = width * height;
        var volume = width * height + depth;
        var sizes = [area, volume];
        return sizes;
    }
    var areaZone = getSize(3, 2, 3) [0];
    var volumeOne = getSize(3, 2, 3) [1];

    console.log(areaZone)
    console.log(volumeOne)