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
  $("#dark2").on({
   "mouseover" : function() {
      this.src = 'news2.png';
    },
    "mouseout" : function() {
      this.src='dark2.png';
    }
  });
  $("#dark3").on({
   "mouseover" : function() {
      this.src = 'news3.png';
    },
    "mouseout" : function() {
      this.src='dark3.png';
    }
  });

  $("#mem1").on({
   "mouseover" : function() {
      this.src = 'member1-1.png';
    },
    "mouseout" : function() {
      this.src='member1.png';
    }
  });
  $("#mem2").on({
   "mouseover" : function() {
      this.src = 'member2-1.png';
    },
    "mouseout" : function() {
      this.src='member2.png';
    }
  });
  $("#mem3").on({
   "mouseover" : function() {
      this.src = 'member3-1.png';
    },
    "mouseout" : function() {
      this.src='member3.png';
    }
  });
  $("#mem4").on({
   "mouseover" : function() {
      this.src = 'member4-1.png';
    },
    "mouseout" : function() {
      this.src='member4.png';
    }
  });
  // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
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
          ", 50%, " +
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
          hue: 1,
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
    bike.style.left = (x - 200) + 'px';
    bike.style.top = (y-200) + 'px';
  }
