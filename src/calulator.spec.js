let Calculator = require("./calculator");

//Example test
describe("string calculator", function() {
    let closed_doors = Array(100).fill("X");

    it("should return 0 if string is empty", function() {
        let calculator = new Calculator();
        let calculatorResult = calculator.add('');
        expect(calculatorResult).toBe(0);
    });

    it("should return closed doors", function() {
        let calculator = new Calculator();
        let calculatorResult = calculator.add(closed_doors);
        expect(calculatorResult).toBe(closed_doors.join());
    });

    it("should return every second door open", function() {
        let calculator = new Calculator();
        let calculatorResult = calculator.openEverySecondDoor(closed_doors);
        for (let i = 0; i < closed_doors.length; i += 2) {
            closed_doors[i] = "@";
        }
        expect(calculatorResult).toBe(closed_doors.join());
    });



    it("should return every third door open", function() {
        let calculator = new Calculator();
        let calculatorResult = calculator.openEveryThirdDoor(closed_doors);
        for (let i = 0; i < closed_doors.length; i += 3) {
            if (closed_doors[i] === "X") {
                closed_doors[i] = "@";
            }

            closed_doors[i] = "X";
        }
        expect(calculatorResult).toBe(closed_doors.join());
    });
});