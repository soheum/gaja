$(document).ready(function() {
  function onMove (event) {
  // const event;

  const dataX = target.getAttribute('data-x');
  const dataY = target.getAttribute('data-y');
  const initialX = parseFloat(dataX) || 0;
  const initialY = parseFloat(dataY) || 0;

  const deltaX = event.dx;
  const deltaY = event.dy;

  const newX = initialX + deltaX;
  const newY = initialY + deltaY;

  target
    .style
    .transform = `translate(${newX}px, ${newY}px)`;

  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
}

interact('.item')
  .draggable({
    onmove: onMove,
    ondrop: function (event) {
      event.target.classList.add('drop-target')
      // event.relatedTarget.textContent = 'Dropped'
    },
    intertia: true,
    restrict: {
      restriction: 'parent',
    },
  })


  interact('.dropzone')
    .dropzone({
      accept: '.item',
      overlap: 0.75,
      ondropactivate: function (event) {
      const item = event.relatedTarget
      item.classList.add('dragging')
    },
    ondropdeactivate: function (event) {
      const item = event.relatedTarget
      item.classList.remove('dragging', 'cannot-drop')
    },
    ondragenter: function(event) {
      const item = event.relatedTarget
      item.classList.remove('cannot-drop')
      item.classList.add('can-drop')
    },
    ondragleave: function(event) {
      const item = event.relatedTarget
      item.classList.remove('can-drop')
      item.classList.add('cannot-drop')
    }
})
});
