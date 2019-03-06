function Thermometer() {
  this.currentTemp = 20
  this.minimumTemp = 10
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
