function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
	// write your solution here
    const rand = Math.random(rangeEnd-rangeStart) + rangeStart;
	return rand;
}

console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`)
