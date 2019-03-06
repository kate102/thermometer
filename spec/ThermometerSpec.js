
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

});
