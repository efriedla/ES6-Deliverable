// Write a class called Point, which represents a point in two-dimensional space.
// A point has x and y properties, given as arguments to its constructor.

// It also has a single method plus, which takes another point and returns the sum
// of the two points, that is, a new point whose x is the sum of the x properties
// of the two original points, and whose y is the sum of their y properties.

// Your code here
class Point{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  // plus(x, y){
  //   let newX = this.x + x.x;
  //   let newY = this.y + x.y;
  //   return `x:${newX}, y:${newY}`;

    //or
  plus(pt){

      return new Point(this.x + pt.x, this.y + pt.y);
  }
}

console.log(new Point(1, 2).plus(new Point(2, 1)))
// → Point{x: 3, y: 3}


// source: http://marijnhaverbeke.nl/talks/es6_falsyvalues2015/exercises/#Point
