const A = parseFloat(prompt(`Please enter the length of the side A of the triangle`));
const B = parseFloat(prompt(`Please enter the length of the side B of the triangle`));
const angle = parseFloat(prompt(`Please enter the angle between side A and side B`));
let output;

const angles = 180;
const g = Math.PI/angles*angle;
const C = Math.sqrt(A * A + B * B - 2 * A * B * Math.cos(g));
const p = (A + B + C) / 2;
const per = A + B + C;
const sqr = Math.sqrt(p * (p-A) * (p-B) * (p-C));


if(A > 0 && B > 0 && angle > 0) {
    output=`C length: ${+C.toFixed(2)}
Triangle Square: ${+sqr.toFixed(2)}
Triangle Perimeter: ${+per.toFixed(2)}`;

} else {
    output = `Invalid data`;
}


console.log(output);