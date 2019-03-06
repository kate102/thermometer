function Thermometer() {
  this.currentTemp = 20
  this.minimumTemp = 10
  this.powerSavingModeOn = true
  this.maximumTemp = 25
}

Thermometer.prototype.increaseTemperature = function() {
  this.currentTemp++;
}

Thermometer.prototype.decreaseTemperature = function() {

  if (this.currentTemp > this.minimumTemp){
      this.currentTemp--;
  }
  else {
    throw new Error("the minimum temperature cant be exceeded");
  }
}

Thermometer.prototype.setPowerSavingModeOn = function() {
  this.powerSavingModeOn = true;
  this.maximumTemp = 25;
}
