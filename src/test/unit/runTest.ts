import { Mars } from '../../app/Mars'
import { Rover, CardinalPointValue } from '../../app/Rover'

export interface TestData {
    testName: string;
    commands: string;
    expectData: {
        coords: {
            x: number;
            y: number;
        },
        orientation: CardinalPointValue;
    }
}

export function runTest(testsData: TestData[]) {
    testsData.forEach(({ testName, commands, expectData }) => {
        test(testName, () => {
            const mars = new Mars()
            const rover = new Rover(mars)

            rover.move(commands)

            const roverCoords = mars.whereIsRover().value
            expect(roverCoords).toEqual(expectData.coords)
            expect(rover.orientation).toEqual(expectData.orientation)
        });
    })
}