import { runTest, TestData } from "./runTest";

describe('Forward', () => {

  describe('Move the rover straight to north', () => {
    const testsData: TestData[] = [
      {
        testName: 'The rover should move 1 north of Mars if given "F"',
        commands: 'F',
        expectData: {
          coords: { x: 0, y: 1 },
          orientation: 'N'
        }
      },
      {
        testName: 'The rover should move 2 north of Mars if given "FF"',
        commands: 'FF',
        expectData: {
          coords: { x: 0, y: 2 },
          orientation: 'N'
        }
      },
      {
        testName: 'The rover should move 3 north of Mars if given "FFF"',
        commands: 'FFF',
        expectData: {
          coords: { x: 0, y: 3 },
          orientation: 'N'
        }
      },
      {
        testName: 'The rover should go around Mars and be at point 0 north if it moves 10 to the north',
        commands: 'FFFFFFFFFF',
        expectData: {
          coords: { x: 0, y: 0 },
          orientation: 'N'
        }
      },
      {
        testName: 'The rover should go around Mars and be at point 2 north if it moves 12 to the north',
        commands: 'FFFFFFFFFFFF',
        expectData: {
          coords: { x: 0, y: 2 },
          orientation: 'N'
        }
      }
    ]

    runTest(testsData)
  });

  describe('Rotate rover to right and move to east', () => {
    const testsData: TestData[] = [
      {
        testName: 'The rover should move 1 east of Mars if given "RF"',
        commands: 'RF',
        expectData: {
          coords: { x: 1, y: 0 },
          orientation: 'E'
        }
      },
      {
        testName: 'The rover should move 1 east of Mars if given "RFF"',
        commands: 'RFF',
        expectData: {
          coords: { x: 2, y: 0 },
          orientation: 'E'
        }
      },
      {
        testName: 'The rover should go around Mars and be at point 0 east of Mars if given "RFFFFFFFFFF"',
        commands: 'RFFFFFFFFFF',
        expectData: {
          coords: { x: 0, y: 0 },
          orientation: 'E'
        }
      },
      {
        testName: 'The rover should go around Mars and be at point 2 east of Mars if given "RFFFFFFFFFFFF"',
        commands: 'RFFFFFFFFFFFF',
        expectData: {
          coords: { x: 2, y: 0 },
          orientation: 'E'
        }
      },
    ]

    runTest(testsData)
  })

  describe('Rotate rover to left and move to west', () => {
    const testsData: TestData[] = [
      {
        testName: 'The rover should go around Mars and be at point 9 weast of Mars if given "LF"',
        commands: 'LF',
        expectData: {
          coords: { x: 9, y: 0 },
          orientation: 'W'
        }
      },
      {
        testName: 'The rover should go around Mars and be at point 8 weast of Mars if given "LFF"',
        commands: 'LFF',
        expectData: {
          coords: { x: 8, y: 0 },
          orientation: 'W'
        }
      },
    ]

    runTest(testsData)
  })

  describe('Rotate rover to left twice and move to sud', () => {
    const testsData: TestData[] = [
      {
        testName: 'The rover should go around Mars and be at point 9 sud of Mars if given "LLF"',
        commands: 'LLF',
        expectData: {
          coords: { x: 0, y: 9 },
          orientation: 'S'
        }
      },
      {
        testName: 'The rover should go around Mars and be at point 8 sud of Mars if given "LLFF"',
        commands: 'LLFF',
        expectData: {
          coords: { x: 0, y: 8 },
          orientation: 'S'
        }
      },
    ]

    runTest(testsData)
  })

  describe('Rotate rover to right twice and move to sud', () => {
    const testsData: TestData[] = [
      {
        testName: 'The rover should go around Mars and be at point 9 sud of Mars if given "RRF"',
        commands: 'RRF',
        expectData: {
          coords: { x: 0, y: 9 },
          orientation: 'S'
        }
      },
      {
        testName: 'The rover should go around Mars and be at point 8 sud of Mars if given "RRFF"',
        commands: 'RRFF',
        expectData: {
          coords: { x: 0, y: 8 },
          orientation: 'S'
        }
      },
    ]

    runTest(testsData)
  })
});