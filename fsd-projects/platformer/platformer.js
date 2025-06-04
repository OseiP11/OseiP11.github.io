$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(150, 650, 200, 25, "blue");
    createPlatform(500, 550, 50, 100, "red");
    createPlatform(700, 450, 50, 50, "blue");
    createPlatform(900, 525, 100, 200, "green"); 
    createPlatform(1225, 400, 200, 25, "blue");
    createPlatform(900, 275, 100, 50, "red");
    createPlatform(1100, 660, 100, 125, "red");
    createPlatform(500, 200, 125, 50, "yellow");

    // TODO 3 - Create Collectables
    createCollectable("kennedi", 650, 170, 10, 1.02);
    createCollectable("max", 875, 300);
    createCollectable("grace", 350, 300);
    createCollectable("diamond", 1350, 475, 15, 1.01)
    createCollectable("steve", 550, 100, 0.5, 0.5);



    
    // TODO 4 - Create Cannons
    createCannon("left", 420, 1100);
    createCannon("top", 1150, 2100);
    createCannon("left", 200, 3100);
    createCannon("bottom", 1300, 4100);



    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
