
describe("Thermometer", function() {

  beforeEach(function() {
    thermometer = new Thermometer();
  });

  it("the inital temperature is 20 degrees", function() {
    expect(thermometer.currentTemp).toEqual(20);
  });

  it('increases temperature by 1', function(){
    thermometer.increaseTemperature();
    expect(thermometer.currentTemp).toEqual(21);
  })

  it('decrease temperature by 1', function(){
    thermometer.decreaseTemperature();
    expect(thermometer.currentTemp).toEqual(19);
  })

  it("the minimum temperature is 10 degrees", function() {
    expect(thermometer.minimumTemp).toEqual(10);
  });

  it("the minimum temperature cant be exceeded", function() {
    count = 1
    while (count < 11){
      thermometer.decreaseTemperature();
      count++;
    }
    expect(thermometer.currentTemp).toEqual(thermometer.minimumTemp);
    expect(function() {
      thermometer.decreaseTemperature();
    }).toThrowError("the minimum temperature cant be exceeded");
  });

    it('sets the power saving mode on and max temp to 25', function(){
      thermometer.setPowerSavingModeOn(true);
      expect(thermometer.powerSavingModeOn).toEqual(true);
      expect(thermometer.maximumTemp).toEqual(25);
    });


    it("if power saving mode on, restrict max temp to 25 degrees", function() {
      thermometer.setPowerSavingModeOn(true);
      while (thermometer.currentTemp < 25){
        thermometer.increaseTemperature();
      }
      expect(thermometer.currentTemp).toEqual(thermometer.maximumTemp);
      expect(function() {
        thermometer.increaseTemperature();
      }).toThrowError("the maximum temperature cant be exceeded");
    });

    it('sets the power saving mode off and max temp to 32', function(){
      thermometer.setPowerSavingModeOn(false);
      expect(thermometer.powerSavingModeOn).toEqual(false);
      expect(thermometer.maximumTemp).toEqual(32);
    });

    it("if power saving mode off, restrict max temp to 32 degrees", function() {
      thermometer.setPowerSavingModeOn(false);
      while (thermometer.currentTemp < 32){
        thermometer.increaseTemperature();
      }
      expect(thermometer.currentTemp).toEqual(thermometer.maximumTemp);
      expect(function() {
        thermometer.increaseTemperature();
      }).toThrowError("the maximum temperature cant be exceeded");
    });

    it("can reset to 20", function() {
      thermometer.resetTemperature();
      expect(thermometer.currentTemp).toEqual(20);
    });

    it("returns low usage when temperature < 18 degrees", function() {
      thermometer.currentTemp = Math.floor(Math.random() * (18-10)) + 10;

      expect(thermometer.showEnergyUsage()).toEqual("low-usage");
    });

    it("returns medium usage when temperature is 24 degrees", function() {
      while (thermometer.currentTemp != 24)
      {
        thermometer.increaseTemperature();
      }
      expect(thermometer.showEnergyUsage()).toEqual("medium-usage");
    });

    it("returns medium usage when temperature is 18 degrees", function() {
      while (thermometer.currentTemp != 18)
      {
        thermometer.decreaseTemperature();
      }
      expect(thermometer.showEnergyUsage()).toEqual("medium-usage");
    });

    // it("returns high usage when temperature is 25 or higher", function() {
    //   while (thermometer.currentTemp != 18)
    //   {
    //     thermometer.decreaseTemperature();
    //   }
    //   expect(thermometer.showEnergyUsage()).toEqual("medium-usage");
    // });
});
