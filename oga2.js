// Optimized JavaScript program for fizz buzz problem
let s = "";
let c3 = 0, c5 = 0;
for (var i = 1; i <= 100; i++) {
	c3++;
	c5++;
	if (c3 == 3) {
		s += "fizz";
		c3 = 0;
	}
	if (c5 == 5) {
		s += "buzz";
		c5 = 0;
	}
	if (s.length == 0)
		console.log(i);
	else
		console.log(s);
	s = "";
}

// This code is contributed by phasing17



const radius = 10;
const pi = Math.PI;
const areaOfCircle = (radius, pi) => {
   return pi * radius * radius;
};
console.log("The area of the circle is: " + areaOfCircle(radius, pi));


const velocity =24;
const time =10;
const distance = (velocity, time)  => {
	return velocity * time;
};
console.log("distance ");



