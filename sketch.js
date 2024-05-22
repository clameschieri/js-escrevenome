function setup() {
    createCanvas(650, 500);
    background("white");
    }
    
    function draw() {
      
      stroke("orange")
      fill("yellow")
      
      // console.log(mouseIsPressed)
      
      if(mouseIsPressed) {
        
      rect(mouseX, mouseY, 10, 20)
      }
    }