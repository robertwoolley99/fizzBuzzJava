describe ("fizzBuzz", function(){
  it("returns fizzbuzz when 15 is passed", function(){
    expect(fizzBuzz(15)).toEqual("fizzbuzz");
  });
  it("returns 1 when 1 is passed", function(){
    expect(fizzBuzz(1)).toEqual(1);
  });
  it("returns fizz when 3 is passed", function(){
    expect(fizzBuzz(3)).toEqual("fizz");
  });
  it("returns buzz when 5 is passed", function(){
    expect(fizzBuzz(5)).toEqual("buzz");
  });
  it("returns fizzBuzz when 45 is passed", function(){
    expect(fizzBuzz(45)).toEqual("fizzbuzz");
  })
});
