let gameBox = document.querySelector(".cube-container");
let colorBtn = document.querySelectorAll(".colors");
let resetBtn = document.querySelector(".reset");
let input = document.getElementById("rangeInput");
let output = document.getElementById("rangeOutput");
let gridVisibility = document.querySelector(".grid");
let grid = 16;
let currentColor = "black";
let cubes;

function draw() {
    if(document.querySelectorAll(".cube").length != 0) {
        clear();
    }

    for(let i = 0; i < Math.pow(grid, 2); i++) {
        let cube = document.createElement('div');
        cube.classList.add("cube");
        cube.classList.add("border");
        cube.style.height = `${(grid/Math.pow(grid, 2)) * 100}%`;
        cube.style.width = `${(grid/Math.pow(grid, 2)) * 100}%`;
        gameBox.appendChild(cube);
    }
    
    cubes = document.querySelectorAll(".cube");
    
    for(const cube of cubes) {
        cube.addEventListener('mouseover', function() {
            this.style.background = currentColor;
        });
    }
}

function clear() {
    for(const cube of cubes) {
        cube.remove();
    }
}

for(const btn of colorBtn) {
    btn.addEventListener('click', function() {
        currentColor = this.textContent;
    });
}

resetBtn.addEventListener('click', function() {
    for(const cube of cubes) {
        cube.style.background = "none";
    }
});

input.addEventListener('input', function() {
    output.textContent = input.value;
    grid = input.value;
    draw();
});

gridVisibility.addEventListener('click', function() {
    if(gridVisibility.textContent.toLowerCase() == "no grid") {
        for(const cube of cubes) {
            cube.classList.remove("border");
        }

        gridVisibility.textContent = "Grid";
    } else if(gridVisibility.textContent.toLowerCase() == "grid") {
        for(const cube of cubes) {
            cube.classList.add("border");
        }

        gridVisibility.textContent = "No Grid";
    }
});

draw();