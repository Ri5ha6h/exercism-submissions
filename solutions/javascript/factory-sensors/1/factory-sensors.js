// @ts-check

export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

/**
 * Check if the humidity level is not too high.
 *
 * @param {number} humidityPercentage
 * @throws {Error}
 */
export function checkHumidityLevel(humidityPercentage) {
  if(humidityPercentage > 70){
    throw new Error("Humidity is above 70%.")
  }
}

/**
 * Check if the temperature is not too high.
 *
 * @param {number|null} temperature
 * @throws {ArgumentError|OverheatingError}
 */
export function reportOverheating(temperature) {
  if(temperature === null){
    throw new ArgumentError();
  }
  if(temperature > 500){
    throw new OverheatingError(temperature);
  }
}

/**
 *  Triggers the needed action depending on the result of the machine check.
 *
 * @param {{
 * check: function,
 * alertDeadSensor: function,
 * alertOverheating: function,
 * shutdown: function
 * }} actions
 * @throws {ArgumentError|OverheatingError|Error}
 */
export function monitorTheMachine(actions) {
  try{
    actions.check();
  }catch(error){
    if(error instanceof ArgumentError){
      actions.alertDeadSensor();
    }else if(error instanceof OverheatingError){
      if(error.message){
        const errorSplit = error.message.split(" ");
        const temp = +errorSplit[3];
        if(temp > 600){
          actions.shutdown();
        }else if(temp < 600){
          actions.alertOverheating();
        }
      }
    }else{
      throw error;
    }
  }
  
}



















