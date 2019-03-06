
describe("Thermometer", function() {

  it("the inital temperature is 20 degrees", function() {
    thermometer = new Thermometer()
    expect(thermometer.currentTemp).toEqual(20);
  });

});
