// let news1 = document.getElementById("dark1");
// news1.addEventListener("mouseenter", rollover);
// news1.addEventListener("mouseover", mouseaway);
//
// function rollover(my_image){
//   my_image.src = "news1.png";
// }
// function mouseaway(my_image){
//   my_image.src = "dark1.png";
// }
$(document).ready(function(){
  $("#dark1").on({
   "mouseover" : function() {
      this.src = 'news1.png';
    },
    "mouseout" : function() {
      this.src='dark1.png';
    }
  });
});
var pixelSize = 10;

interact(".rainbow-pixel-canvas")
  .origin("self")
  .draggable({
    max: Infinity,
    maxPerElement: Infinity,
    modifiers: [
      interact.modifiers.snap({
        // snap to the corners of a grid
        targets: [
          interact.snappers.grid({ x: pixelSize, y: pixelSize })
        ],
      })
    ],
    listeners: {
      // draw colored squares on move
      move: function(event) {
        var context = event.target.getContext("2d"),
          // calculate the angle of the drag direction
          dragAngle = 180 * Math.atan2(event.dx, event.dy) / Math.PI;

        // set color based on drag angle and speed
        context.fillStyle =
          "hsl(" +
          dragAngle +
          ", 86%, " +
          (30 + Math.min(event.speed / 1000, 1) * 50) +
          "%)";

        // draw squares
        context.fillRect(
          event.pageX - pixelSize / 2,
          event.pageY - pixelSize / 2,
          pixelSize,
          pixelSize
        );
      }
    }
  })
  // clear the canvas on doubletap
  .on("doubletap", function(event) {
    var context = event.target.getContext("2d");

    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  });

function resizeCanvases() {
  [].forEach.call(document.querySelectorAll(".rainbow-pixel-canvas"), function(
    canvas
  ) {
    canvas.width = document.body.clientWidth;
    canvas.height = window.innerHeight * 0.7;
  });
}

// interact.js can also add DOM event listeners
interact(document).on("DOMContentLoaded", resizeCanvases);
interact(window).on("resize", resizeCanvases);

  paper.install(window);
  // Only executed our code once the DOM is ready.
  	window.onload = function() {
  		// Get a reference to the canvas object
  		var canvas = document.getElementById('myCanvas');
  		// Create an empty project and a view for the canvas:
  		paper.setup(canvas);
      var tool = new Tool();
      tool.minDistance = 0.3;
      tool.maxDistance = 0.3;

      var path;

      tool.onMouseDown = function(event) {
    // Create a new path every time the mouse is clicked
        path = new Path();
        path.strokeColor = {
          hue: Math.random() * 360,
          saturation: 1,
          brightness: 1
        }
        path.add(event.point);
      }

      tool.onMouseDrag = function(event) {
        // Add a point to the path every time the mouse is dragged
        path.add(event.point);
      }

  	}




function dragMoveListener (event) {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)'

  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}

// this is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener


  // function positionRandom() {
  //   var left = generateRandom(0, 100);
  //   var top = generateRandom(0, 100);
  //   $('bike2Appear').css({"position": "absolute", "top": top + 'px', "left": left + "px"});
  // }
  // positionRandom();

//클릭하면 랜덤으로 나오기
  document.onclick = userClicked;
  function userClicked(){
    var transportation = ["bike1.png", "bike2.png", "car1.png", "car2.png", "kickgoing.png", "kickgoing2.png", "walk1.png", "walk2.png", "bus.png"];
    var random;
    random = transportation[Math.floor(Math.random() * transportation.length)];
    var x = event.clientX;
    var y = event.clientY;
    var bike = document.getElementById('bikeAppear');
    console.log(bike);
    bike.src = random;
    bike.style.display = 'block';
    bike.style.position = 'absolute';
    bike.style.left = (x - 100) + 'px';
    bike.style.top = y + 'px';
  }
