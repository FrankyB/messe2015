var drawingCanvas = function() {

  var drawingCanvasId = "drawingCanvas";
  var canvasDiv;
  var context;
  var clickX = new Array();
  var clickY = new Array();
  var clickColor = new Array();
  var clickDrag = new Array();
  var paint;
  var _activeColor = "#ff2d2d";

  function _canvasWidth() {
     if ( $( window ).width() > $("#canvasParent").innerWidth() ) {
      return $( window ).width();
    } else {
      return $("#canvasParent").innerWidth();
    }
  }

  function _canvasHeight() {
     if ( $( window ).height() > $("#canvasParent").innerHeight() ) {
      return $( window ).height();
    } else {
      return $("#canvasParent").innerHeight();
    }
  }

  function _registerCanvasEvents() {
    _registerCanvasMouseDown();
    _registerCanvasMouseMove();
    _registerCanvasMouseUp();
  }


  function _registerCanvasMouseDown() {
    $("#"+drawingCanvasId).mousedown(function(e){
      var mouseX = e.pageX - this.offsetLeft;
      var mouseY = e.pageY - this.offsetTop;
                    
      paint = true;
      _addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
      redraw();
    });
  }

  function _registerCanvasMouseMove() {
    $("#"+drawingCanvasId).mousemove(function(e){
      if(paint){
        _addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
        redraw();
      }
    });
  }

  function _registerCanvasMouseUp() {
    $("#"+drawingCanvasId).mouseup(function(e){
      paint = false;
    });
  }

  function _registerCanvasMouseOut() {
    $("#"+drawingCanvasId).mouseleave(function(e){
      paint = false;
    });  
  }
  
  function redraw(){
    context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
    
    context.lineJoin = "round";
    context.lineWidth = 5;
                          
    for(var i=0; i < clickX.length; i++) {                
      context.strokeStyle = clickColor[i-1];
      context.beginPath();
      if(clickDrag[i] && i){
        context.moveTo(clickX[i-1], clickY[i-1]);
      }else{
        context.moveTo(clickX[i]-1, clickY[i]);
      }
      context.lineTo(clickX[i], clickY[i]);
      context.closePath();
      context.stroke();
    }
  }

  function _addClick (x, y, dragging) {
    clickX.push(x);
    clickY.push(y);
    clickColor.push(_activeColor);
    clickDrag.push(dragging);
  }

  return {

    appendCanvas : function (aCanvasContainer) {
      var canvasDiv = document.getElementById(aCanvasContainer);
      canvas = document.createElement('canvas');
      canvas.className = "drawingCanvas";
      canvas.setAttribute('width', _canvasWidth());
      canvas.setAttribute('height', _canvasHeight());
      canvas.setAttribute('id', drawingCanvasId);
      canvas.style.display = "none";

      canvasDiv.appendChild(canvas);
      if(typeof G_vmlCanvasManager != 'undefined') {
              canvas = G_vmlCanvasManager.initElement(canvas);
      }
      context = canvas.getContext("2d");
      _registerCanvasEvents();
    },
    
    setActiveColor : function (aColor) {
      _activeColor = aColor;
    },
    
    clearCanvas : function () {
      context.clearRect(0, 0, _canvasWidth(), _canvasHeight());
    },
    
    show : function () {
      canvas.style.display = "";
    },
    
    hide : function () {
      canvas.style.display = "none";
    }
    
  }  
}();

function initCanvas() {
  drawingCanvas.appendCanvas("canvasParent");
}

function showCanvas() {
  drawingCanvas.show();
}

function hideCanvas() {
  drawingCanvas.hide();
}

function chooseColor(aColorId) {
  var color = $("#"+aColorId).css("background-color");
  drawingCanvas.setActiveColor(color);
}