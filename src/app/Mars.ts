import { Coord } from "./Coord";

export class Mars {

    public readonly limitCoord: Coord = new Coord(10, 10)
    private roverCoord: Coord = new Coord(0, 0)

    public setRover(coord: Coord) {
        if (coord.exceeds(this.limitCoord)) {
            throw new Error(`The coord [${coord.value.x}, ${coord.value.y}] not exist on Mars`);
        }

        this.roverCoord = coord
    }

    public isRoverOnLimitRight() {
        if (this.roverCoord.isEqualX(new Coord(this.limitCoord.value.x - 1, 0))) {
            return true
        }

        return false
    }

    public isRoverOnLimitLeft() {
        if (this.roverCoord.isEqualX(new Coord(0, 0))) {
            return true
        }

        return false
    }

    public isRoverOnLimitTop(): boolean {
        if (this.roverCoord.isEqualY(new Coord(0, this.limitCoord.value.y - 1))) {
            return true
        }

        return false
    }

    public isRoverOnLimitBottom() {
        if (this.roverCoord.isEqualY(new Coord(0, 0))) {
            return true
        }

        return false
    }

    public whereIsRover(): Coord {
        return new Coord(
            this.roverCoord.value.x,
            this.roverCoord.value.y,
        )
    }
}