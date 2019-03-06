
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

});
