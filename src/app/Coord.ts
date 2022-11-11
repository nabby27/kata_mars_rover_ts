export class Coord {

    constructor(
        private x: number,
        private y: number,
    ) { }

    public exceeds(otherCoord: Coord): boolean {
        return this.exceedsX(otherCoord) || this.exceedsY(otherCoord)
    }

    public exceedsX(otherCoord: Coord): boolean {
        return this.x > otherCoord.value.x
    }

    public exceedsY(otherCoord: Coord): boolean {
        return this.y > otherCoord.value.y
    }

    public isEqual(otherCoord: Coord): boolean {
        return this.isEqualX(otherCoord) && this.isEqualY(otherCoord)
    }

    public isEqualY(otherCoord: Coord): boolean {
        return this.y === otherCoord.value.y
    }

    public isEqualX(otherCoord: Coord): boolean {
        return this.x === otherCoord.value.x
    }

    public get value() {
        return {
            x: this.x,
            y: this.y
        }
    }
}