const flock = [];

let alignSlider, cohesionSlider, separationSlider;

function setup() {
  createCanvas(640*1.5, 360*1.5);
  alignSlider = createSlider(0, 5, 1, 0.1);
  cohesionSlider = createSlider(0, 5, 1, 0.1);
  separationSlider = createSlider(0, 5, 1, 0.1);
  alignSlider.position(10, 10);
  cohesionSlider.position((width/2)-(cohesionSlider.width/2), 10);
  separationSlider.position(width-(separationSlider.width), 10);
  for (let i =0; i < 200; i++) {
    flock.push(new Boid());
  }
}

function draw() {
  //background(225, 204, 240);
  background(51);
  text('Alignment Multiplier', alignSlider.x, alignSlider.y*3);
  text('Cohesion Multiplier', cohesionSlider.x, cohesionSlider.y*3);
  text('Separation Multiplier', separationSlider.x, separationSlider.y*3);
  for (let boid of flock) {
    boid.edged();
    boid.flock(flock);
    boid.show();
    boid.update();
  }
}
