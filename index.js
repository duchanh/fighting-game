const canvas = document.getElementById("myCanvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

c.fillRect(0, 0, canvas.width, canvas.height);
const gravity = 0.2;
class Sprite {
  constructor({ position, velocity, height }) {
    this.position = position;
    this.height = 150;
    this.velocity = velocity;
  }

  draw() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, 50, this.height);
  }

  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if (this.position.y + this.height + this.velocity.y >= canvas.height) {
      this.velocity.y = 0;
    } else {
      this.velocity.y += gravity;
    }
  }
}

const player = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 0,
  },
});

const enemy = new Sprite({
  position: {
    x: 400,
    y: 100,
  },
  velocity: {
    x: 0,
    y: 0,
  },
});

function animate() {
  window.requestAnimationFrame(animate);
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);
  player.update();
  enemy.update();
}

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "d":
      player.velocity.x = 1;
      break;
    case "a":
      player.velocity.x = -1;
      break;
    case "w":
      player.velocity.y = -1;
      break;
  }
});
window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "d":
      player.velocity.x = 0;
      break;
    case "a":
      player.velocity.x = 0;
      break;
  }
});
animate();
