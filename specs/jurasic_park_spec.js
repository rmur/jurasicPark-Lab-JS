var assert = require("assert");
var Dinosaur = require("../dinosaurs.js");
var Park = require("../park.js")

describe("Jurasic park", function(){

  beforeEach(function(){
    dinosaur1 = new Dinosaur("Triceratops", 5);
    park = new Park();
    console.log(park.enclosure.length);
  })

  it("Check dinsaur1", function(){
    assert.equal(dinosaur1.type, "Triceratops");
    assert.equal(dinosaur1.offsprings, 5);
  })

  it("Check enclosure", function() {
    assert.equal(park.enclosure.length, 0);
  })




})