
/*
  Returns a random whole number between minimum value and maximum value
  For example, calling randomNumber(0, 255);
  will return a random whole number between 0 and 255.
  Source: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
*/
function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
  Returns a random floating point number between minimum value and maximum value
  For example, calling randomFloat(0, 1);
  will return a random floating between 0.0 and 1.0.
  Source: https://stackoverflow.com/questions/9724404/random-floating-point-double-in-inclusive-range
*/
function randomFloat (min, max) {
  var float = Math.random();
  var value;

  if (float < 0.5) {
    value = (1 - Math.random()) * (max-min) + min;
  } else {
    value = Math.random() * (max-min) + min;
  }

  return parseFloat(value.toFixed(2));
}

/*
  Returns a color string in the form of "hsl(100, 50%, 50%)"
  For example, calling color(10, 100, 40);
  will return a string "hsl(10, 100%, 40%)"
*/
function hslColor(h, s, l) {
  var hue = h;
  var saturation = s + "%";
  var luminance = l + "%";

  var color = "hsl(" + hue + "," + saturation + "," + luminance + ")";

  return color;
}


/* TO DO */

// 1. Select container element
// 2. Add 500 divs with the class "shape" to it
// 3. Add a random animation duration and delay to each shape
// 4. When the cursor is over the shape, add a modifier class
// 5. When the cursor is outside of the shape, remove the modifier class
// 6. When a shape is clicked, change the color

for (var i = 0; i < 500; i++) {
  //create a div 
  var shape = document.createElement('div');
  
  //add class "shape" to div
  shape.classList.add('shape');

  var duration = randomNumber(1000,5000);

  // makes only a certain section go
  if (i > 100 && i < 200)

  // this is the duration in 'seconds'
  shape.style.animationDuration = duration + 'ms';
  //shape.style.animationDelay = 2s;


  // select container div
  var container = document.querySelector('.content');

  // add a div with a class "shape" to container div
  container.append(shape);
}


var shapes = document.querySelectorAll('.shape');

shapes.forEach(function(shape, i){
  shape.addEventListener('mouseover', function(event) {

    if (shape.classList.contains('shape-interaction')) {
      shape.classList.remove( 'shape-interaction');
    } else {
      shape.classList.add('shape-interaction');
    }
    
  });
});




