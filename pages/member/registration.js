var bg;
var icon_sb_dot, icon_sb_left, icon_sb_right;
var currentPage, numOfPages, scale;
var shortcuts = [];

function preload() {
    bg = loadImage("assets/bg.png");
    icon_sb_dot   = loadImage("assets/small/sb_dot");
    icon_sb_left  = loadImage("assets/small/sb_left");
    icon_sb_right = loadImage("assets/small/sb_right");
}

function setup() {
    currentPage = 0; numOfPages = 3;
    scale = Math.min(windowWidth / stdWidth, windowHeight / stdHeight);

    var left  = new button(stdWidth * 0.4, stdHeight * 0.9, icon_sb_left);
        left.onClick  = function () {if (currentPage > 0) currentPage--;};
    var right = new button(stdWidth * 0.6, stdHeight * 0.9, icon_sb_right);
        right.onClick = function () {if (currentPage < 2) currentPage++;};
    var dot0  = new button(stdWidth * 0.45, stdHeight * 0.9, icon_sb_dot);
        dot0.onClick  = function () {if (currentPage != 0) currentPage = 0};
    var dot1  = new button(stdWidth * 0.50, stdHeight * 0.9, icon_sb_dot);
        dot1.onClick  = function () {if (currentPage != 1) currentPage = 1};
    var dot2  = new button(stdWidth * 0.55, stdHeight * 0.9, icon_sb_dot);
        dot2.onClick  = function () {if (currentPage != 2) currentPage = 2};
    shortcuts = [left, right, dot0, dot1, dot2];
}

function draw() {
    background(bg);
    switch (currentPage) {
        case 0:
            break;
        case 1:
            break;
        case 2:
            break;
    }
}

function mouseClicked() {
    noLoop();
    baseAction();
    switch (currentPage) {
        case 0:
            break;
        case 1:
            break;;
        case 2:
            break;
    }
    redraw();
}

function create01() {
    var p0 = new page("0",[])
}

function drawBase() {
    for (var i = 0; i < shortcuts.length; i++) {
        shortcuts[i].drawImage(scale);
    }
}

function baseAction() {
    for (var i = 0; i < shortcuts.length; i++) {
        if (shortcuts[i].isClicked(mouseX, mouseY, scale)) {
            shortcuts[i].onClick();
        }
    }
}