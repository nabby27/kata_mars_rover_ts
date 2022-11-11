import { Coord } from "./Coord";

export class Mars {

    private limitCoord: Coord = new Coord(10, 10)
    private roverCoord: Coord = new Coord(0, 0)

    public setRover(coord: Coord) {
        if (coord.exceeds(this.limitCoord)) {
            throw new Error(`The coord [${coord.value.x}, ${coord.value.y}] not exist on Mars`);
        }

        this.roverCoord = coord
    }

    public isRoverOnLimitTop(): boolean {
        if (this.roverCoord.isEqualY(new Coord(0, this.limitCoord.value.y - 1))) {
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