import { runTest, TestData } from "./runTest";

describe('Rotate', () => {

  describe('Rotate rover to right', () => {
    const testsData: TestData[] = [
      {
        testName: 'The rover direction should be east if given "R"',
        commands: 'R',
        expectData: {
          coords: { x: 0, y: 0 },
          orientation: 'E'
        }
      },
      {
        testName: 'The rover direction should be sud if given "RR"',
        commands: 'RR',
        expectData: {
          coords: { x: 0, y: 0 },
          orientation: 'S'
        }
      },
      {
        testName: 'The rover direction should be west if given "RRR"',
        commands: 'RRR',
        expectData: {
          coords: { x: 0, y: 0 },
          orientation: 'W'
        }
      },
      {
        testName: 'The rover direction should be north if given "RRRR"',
        commands: 'RRRR',
        expectData: {
          coords: { x: 0, y: 0 },
          orientation: 'N'
        }
      },
    ]

    runTest(testsData)
  })

  describe('Rotate rover to left', () => {
    const testsData: TestData[] = [
      {
        testName: 'The rover direction should be weast if given "L"',
        commands: 'L',
        expectData: {
          coords: { x: 0, y: 0 },
          orientation: 'W'
        }
      },
      {
        testName: 'The rover direction should be sud if given "LL"',
        commands: 'LL',
        expectData: {
          coords: { x: 0, y: 0 },
          orientation: 'S'
        }
      },
      {
        testName: 'The rover direction should be east if given "LLL"',
        commands: 'LLL',
        expectData: {
          coords: { x: 0, y: 0 },
          orientation: 'E'
        }
      },
      {
        testName: 'The rover direction should be north if given "LLLL"',
        commands: 'LLLL',
        expectData: {
          coords: { x: 0, y: 0 },
          orientation: 'N'
        }
      },
    ]

    runTest(testsData)
  })


});