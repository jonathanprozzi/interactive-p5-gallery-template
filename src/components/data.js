export const sketchData = [
  {
    title: "Test Sketch",
    content: `<h2>Canvas Element: My Sketch 1</h2>`,
    sketch: `
    let x = 200;
    let y = 200;
    function setup() {
      createCanvas(x, y).parent('p5sketch');
    }
    
    function draw() {
      if (mouseIsPressed) {
        fill(0);
      } else {
        fill(255);
      }
      ellipse(mouseX, mouseY, 10, 10);
    }
    `
  },
  {
    title: "Sketch Two",
    sketch: `
    let sketch = new p5(p => {
      const x = 200;
      const y = 200;
    
      p.setup = function() {
        p.createCanvas(x, y).parent("p5sketch");
      };
    
      p.draw = function() {
        p.background(0);
        p.fill(255, 0, 100);
        p.rect(x / 2, y / 2, 20, 20);
      };
    });
    `
  }
];
