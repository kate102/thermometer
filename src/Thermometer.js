function Thermometer() {
  this.currentTemp = 20
}

Thermometer.prototype.increaseTemperature = function() {
  this.currentTemp++;
}
