export const sketchData = [
  {
    title: "Test Sketch",
    content: `<h2>Canvas Element: My Sketch 1</h2>`,
    sketch: `
    function setup() {
      createCanvas(200,200);
    }
    
    function draw() {
      background(0);
      fill(255,0,100);
      rect(200,200,50,50);
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
