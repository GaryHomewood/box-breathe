var r = 0;
var seconds = 0;
var delta = 2;
var maxRadius = 200;
var container = 346;
var expanding = true;
var animating = true;
var frameCounter = 0;
var drawR;
var drawStep = 80;

function setup() {
    createCanvas(maxRadius * 2, maxRadius * 2);
    stroke('#fff');
    background('#119532');
    fill('#119532');
    smooth();
}

function draw() {
    if (frameCounter > 0 && frameCounter % 60 == 0) {
        seconds++;
    }

    if (frameCounter % 60 == 0) {
        if (seconds % 4 == 0) {
            if (seconds % 8 == 0) {
                if (expanding) {
                    delta = 1.5;
                } else {
                     delta = -1.5;
                }
            } else {
                delta = 0;
                expanding = !expanding;
            }
        }
    }

    fill('#119532');
    background('#119532');

    stroke('rgba(255, 255, 255, 0.2)');
    rect(24, 24, container + 5, container + 5);

    if (r < 400) {
        ellipse(maxRadius, maxRadius, container, container);
    }


    stroke('rgba(255, 255, 255, 0.3)');
    //fill('#44ea6e');
    fill('#14b33c');
    drawCircle(10);

    drawR = 15;
    drawFilledCircle(r, drawR, '#14b33c');
    drawR += drawStep;
    drawFilledCircle(r, drawR, '#18d246');
    drawR += drawStep;
    drawFilledCircle(r, drawR, '#26e656');
    drawR += drawStep;
    drawFilledCircle(r, drawR, '#44ea6e');

    if (animating) {
        r = r + delta;
        frameCounter++;
    }
}

function mouseClicked() {
    animating = !animating;
}

function drawCircle(r) {
    ellipse(maxRadius, maxRadius, r, r);
}

function drawFilledCircle(r, drawR, color) {
    if (r > drawR) {
        fill(color);
        drawCircle(r - drawR);
    }
}

function drawTime() {
    stroke('#119532');
    fill('#119532');
    rect(0, 0, 75, 50);
    textSize(20);
    fill('rgba(255, 255, 255, 0.5)');
    text(seconds + "s", 10, 50);
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
}
