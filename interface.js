
// $.getScript('../src/Thermostat.js', function()
// {

  $(document).ready(function() {
    var thermostat = new Thermostat();
    $('#temperature').text(thermostat.temperature);
  })

// });
console.log('HEEELLLLPPPPP!!!')
// document).ready(function() { console.log('YAY!')})
///////////////////////////////////////////////////////
function Thermostat() {
  this.currentTemp = 20
  this.minimumTemp = 10
  this.powerSavingModeOn = true
  this.maximumTemp = 25
}

Thermostat.prototype.increaseTemperature = function() {

  if(this.currentTemp < this.maximumTemp) {

    this.currentTemp++;
  }
  else {
    throw new Error("the maximum temperature cant be exceeded");
  }
}

Thermostat.prototype.decreaseTemperature = function() {

  if (this.currentTemp > this.minimumTemp){
      this.currentTemp--;
  }
  else {
    throw new Error("the minimum temperature cant be exceeded");
  }
}

Thermostat.prototype.setPowerSavingMode = function() {
  this.powerSavingModeOn = (!this.powerSavingModeOn);
  if (this.powerSavingModeOn){
    this.maximumTemp = 25;
  }
  else {
    this.maximumTemp = 32;
  }
}

Thermostat.prototype.resetTemperature = function() {
  this.currentTemp = 20
}

Thermostat.prototype.showEnergyUsage = function() {
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
    case(this.currentTemp >= 25):
    {
      energyUsage = 'high-usage';
      break;
    }
  }
  return energyUsage;
}
