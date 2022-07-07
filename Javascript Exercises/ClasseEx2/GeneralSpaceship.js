class Spaceship {
    constructor(name, crew, seats)    {
        this.name = name
        this.crew = crew
        this.speed = 0
        }
        SpeedUp(accel)
        {
            let newSpeed = this.speed += (accel * (1 - 0.17))
            return newSpeed
        }
}