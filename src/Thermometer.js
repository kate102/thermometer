function Thermometer() {
  this.currentTemp = 20
  this.minimumTemp = 10
  this.powerSavingModeOn = true
  this.maximumTemp = 25
}

Thermometer.prototype.increaseTemperature = function() {
  if(this.currentTemp < this.maximumTemp) {

    this.currentTemp++;
  }
  else {
    throw new Error("the maximum temperature cant be exceeded");
  }
}

Thermometer.prototype.decreaseTemperature = function() {

  if (this.currentTemp > this.minimumTemp){
      this.currentTemp--;
  }
  else {
    throw new Error("the minimum temperature cant be exceeded");
  }
}

Thermometer.prototype.setPowerSavingModeOn = function(modeOn) {
  this.powerSavingModeOn = modeOn;
  if (this.powerSavingModeOn){
    this.maximumTemp = 25;
  }
  else {
    this.maximumTemp = 32;
  }
}

Thermometer.prototype.resetTemperature = function() {
  this.currentTemp = 20
}

Thermometer.prototype.showEnergyUsage = function() {
  console.log(this.currentTemp);
  switch(true){
    case(this.currentTemp < 18):
    {
      energyUsage = 'low-usage';
      break;
    }
    case(this.currentTemp >= 18 && this.currentTemp < 25):
    {
      energyUsage = 'medium-usage';
      break;
    }
  }
  return energyUsage;
}
