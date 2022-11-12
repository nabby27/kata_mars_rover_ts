import { Coord } from "./Coord";
import { Mars } from "./Mars";

export type CardinalPointValue = 'N' | 'E' | 'S' | 'W'
class CardinalPoint {

    constructor(
        private _value: CardinalPointValue
    ) { }

    public get value(): CardinalPointValue {
        return this._value
    }

    public onRight(): CardinalPoint {
        if (this._value === 'N') return new CardinalPoint('E');
        if (this._value === 'E') return new CardinalPoint('S');
        if (this._value === 'S') return new CardinalPoint('W');
        return new CardinalPoint('N');
    }

    public onLeft(): CardinalPoint {
        if (this._value === 'N') return new CardinalPoint('W');
        if (this._value === 'E') return new CardinalPoint('N');
        if (this._value === 'S') return new CardinalPoint('E');
        return new CardinalPoint('S');
    }
}

export class Rover {

    private _orientation: CardinalPoint = new CardinalPoint('N')

    constructor(
        private mars: Mars
    ) { }

    public get orientation(): CardinalPointValue {
        return this._orientation.value
    }

    public move(commands: string): void {
        const commnadsArray = commands.split('');

        commnadsArray.forEach(command => {
            if (command === 'R') {
                this._orientation = this._orientation.onRight()
                return
            }

            if (command === 'L') {
                this._orientation = this._orientation.onLeft()
                return
            }

            const currentRoverCoord = this.mars.whereIsRover()

            let newRoverCoord = new Coord(0, 0)

            if (this._orientation.value === 'W') {
                newRoverCoord = new Coord(
                    currentRoverCoord.value.x - 1,
                    currentRoverCoord.value.y
                )

                if (this.mars.isRoverOnLimitLeft()) {
                    newRoverCoord = new Coord(
                        this.mars.limitCoord.value.x - 1,
                        currentRoverCoord.value.y,
                    )
                }
            }

            if (this._orientation.value === 'E') {
                newRoverCoord = new Coord(
                    currentRoverCoord.value.x + 1,
                    currentRoverCoord.value.y
                )

                if (this.mars.isRoverOnLimitRight()) {
                    newRoverCoord = new Coord(
                        0,
                        currentRoverCoord.value.y,
                    )
                }
            }

            if (this._orientation.value === 'N') {
                newRoverCoord = new Coord(
                    currentRoverCoord.value.x,
                    currentRoverCoord.value.y + 1
                )

                if (this.mars.isRoverOnLimitTop()) {
                    newRoverCoord = new Coord(
                        currentRoverCoord.value.x,
                        0
                    )
                }
            }

            if (this._orientation.value === 'S') {
                newRoverCoord = new Coord(
                    currentRoverCoord.value.x,
                    currentRoverCoord.value.y - 1
                )

                if (this.mars.isRoverOnLimitBottom()) {

                    newRoverCoord = new Coord(
                        currentRoverCoord.value.x,
                        this.mars.limitCoord.value.y - 1,
                    )
                }
            }

            this.mars.setRover(newRoverCoord)
        })
    }
}