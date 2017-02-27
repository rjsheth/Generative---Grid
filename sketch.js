var tileCount = 10;
function setup() {
  createCanvas(800, 800);
}

function draw() {
    background(150,0,100,5);
    smooth();
    randomSeed(10);
    translate(width / tileCount / 2, height / tileCount / 2);
    for (var gridY = 0; gridY < tileCount; gridY++) {
      for (var gridX = 0; gridX < tileCount; gridX++) {
        var posX = width / tileCount * gridX;
        var posY = height / tileCount * gridY;
        
        var shiftX = random(-mouseX, mouseX) / 20;
        var shiftY = random(-mouseX, mouseX) / 20;

        push();
        noStroke();
        fill(153, 255, 204);
        ellipse(posX + shiftX, posY + shiftY, mouseX / 2, mouseX / 2);
        // fill(255, 153, 51);
        // ellipse(posX + shiftX, posY + shiftY, mouseX / 4, mouseY / 4,90,PI);
        fill(0, 102, 102);
        ellipse(posX + shiftX, posY + shiftY, mouseY / 4, mouseX / 4);
        fill(153, 102, 102);
        ellipse(posX + shiftX, posY + shiftY, mouseY / 4, mouseY / 4,90,PI);
        pop();
      }
    }
}
// function mousePressed{
//   background(123,234, 0);
// }