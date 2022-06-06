const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log("draw");
  },
};

circle.draw();

//factory function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circleOne = createCircle(1);

//constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circleTwo = new Circle(1);

//design a stopwatch object
//duration : 0 - property
//reset, start, stop - methods
//start can only be called once
//stop can only be called once, after being started
//duration gives you the time from the start to the stop being called
//reset, will takes it to the initial state

function Stopwatch() {
  let startTime,
    stopTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) {
      throw new Error("Watch is already running.");
    }
    running = true;
    startTime = new Date();
  };

  this.stop = function () {
    if (!running) {
      throw new Error("Watch is not running.");
    }
    running = false;
    stopTime = new Date();
    const seconds = (stopTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

const sw = new Stopwatch();
