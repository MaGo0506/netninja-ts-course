"use strict";
//----------
// tuples
//----------
let person = ['Luffy', 30, true];
//----------
// tuples examples
//----------
let hsla;
hsla = [200, '100%', '50%', 1];
let xy;
xy = [94.7, 21.3];
function useCoords() {
    // get coords
    const lat = 100;
    const long = 50;
    return [lat, long];
}
const [lat, long] = useCoords();
//----------
// named tuples
//----------
let user;
user = ['Luffy', 17];
console.log(user[0]);
