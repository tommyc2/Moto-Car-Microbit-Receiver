/**
 * There is enough code here to get your car moving but there are a few improvements that could be made.
 * 
 * See if you can spot them!
 */
/**
 * The goal here is to create the cars brain.
 * 
 * The Car will only do what it knows how to do, the radio received block contains the different instructions the car can take currently.
 * 
 * s = stop
 * 
 * l = left
 * 
 * r = right
 * 
 * You can add more functionality by extending the if statement with the plus button.
 * 
 * You need to add the final piece which is driving the car forward
 */
/**
 * Hint: (code improvement) - Optional
 * 
 * Moving the car left and right by stopping one wheel is good
 * 
 * but...
 * 
 * you could use some fancy maths or change the motor direction to make it the car spin on the spot.
 */
// This button A pressed wont be used often,
// 
// The reason it is here is so that you can debug if you have issues with your cars motors
// 
// If the motors do not spin after pressing A you could have a hardware problem.
radio.onReceivedValue(function (name, value) {
    if (name == "s") {
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 0)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 0)
    }
    if (name == "l") {
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 50)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 0)
    }
    if (name == "r") {
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 0)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 50)
    }
    if (name == "f") {
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 50)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 50)
    }
})
radio.setGroup(2)
motobit.enable(MotorPower.On)
