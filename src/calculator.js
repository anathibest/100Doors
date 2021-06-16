class Calculator {
    add(doors) {
        if (doors === "") return 0

        return doors.join();
    }

    openEverySecondDoor(doors) {
        for (let i = 0; i < doors.length; i += 2) {
            doors[i] = "@";
        }
        return doors.join();
    }

    openEveryThirdDoor(doors) {
        for (let i = 0; i < doors.length; i += 3) {
            if (doors[i] === "X") {
                doors[i] = "@";
            }

            doors[i] = "X";
        }

        return doors.join();
    }
}

module.exports = Calculator