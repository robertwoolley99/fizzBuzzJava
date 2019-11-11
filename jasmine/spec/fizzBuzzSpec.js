describe ("fizzBuzz", function(){
  it("returns fizzbuzz when 15 is passed", function(){
    expect(fizzBuzz(15)).toEqual("fizzbuzz");
  });
  it("returns 1 when 1 is passed", function(){
    expect(fizzBuzz(1)).toEqual(1);
  });
});
