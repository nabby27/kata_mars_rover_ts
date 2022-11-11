import { Coord } from "./Coord";
import { Mars } from "./Mars";

export class Rover {

    constructor(
        private mars: Mars
    ) { }

    public move(commands: string): void {
        const commnadsArray = commands.split('');

        commnadsArray.forEach(command => {
            const currentRoverCoord = this.mars.whereIsRover()

            let newRoverCoord = new Coord(
                currentRoverCoord.value.x,
                currentRoverCoord.value.y + 1
            )

            if (this.mars.isRoverOnLimitTop()) {
                newRoverCoord = new Coord(
                    currentRoverCoord.value.x,
                    0
                )
            }


            this.mars.setRover(newRoverCoord)
        })
    }
}