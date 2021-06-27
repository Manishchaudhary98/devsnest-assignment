var Cylinder = {
    Volume : function (height, radius) {
        var v = height * 3.14 * radius * radius;
        return v.toFixed(4);
    }
}
console.log(Cylinder.Volume(6,2));