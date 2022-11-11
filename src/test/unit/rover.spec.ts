import { Mars } from '../../app/Mars'
import { Rover } from '../../app/Rover'

interface TestData {
  name: string;
  input: string;
  output: {
    x: number;
    y: number;
  }
}

describe('Rover', () => {

  describe('Move rover to north', () => {
    const testsData: TestData[] = [
      {
        name: 'The rover should move 1 north of Mars if only given "M"',
        input: 'M',
        output: { x: 0, y: 1 }
      },
      {
        name: 'The rover should move 2 north of Mars if only given "MM"',
        input: 'MM',
        output: { x: 0, y: 2 }
      },
      {
        name: 'The rover should move 3 north of Mars if only given "MMM"',
        input: 'MMM',
        output: { x: 0, y: 3 }
      },
      {
        name: 'The rover should go around Mars and be at point 0 if it moves 10 to the north',
        input: 'MMMMMMMMMM',
        output: { x: 0, y: 0 }
      },
      {
        name: 'The rover should go around Mars and be at point 2 if it moves 12 to the north',
        input: 'MMMMMMMMMMMM',
        output: { x: 0, y: 2 }
      }
    ]

    runTest(testsData)
  });

  function runTest(testsData: TestData[]) {
    testsData.forEach(({ name, input, output }) => {
      test(name, () => {
        const mars = new Mars()
        const rover = new Rover(mars)

        rover.move(input)

        const roverCoords = mars.whereIsRover().value
        expect(roverCoords).toEqual(output)
      });
    })
  }
});