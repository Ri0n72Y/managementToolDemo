var bg;
var icon_sb_dot, icon_sb_left, icon_sb_right;
var currentPage, numOfPages, scale;
var shortcuts = [];
var w, h;

function preload() {
    bg = loadImage("../../assets/bg.png");
    icon_sb_dot   = loadImage("../../assets/small/sb_dot.png");
    icon_sb_left  = loadImage("../../assets/small/sb_left.png");
    icon_sb_right = loadImage("../../assets/small/sb_right.png");
}

function setup() {
    scale = Math.min(windowWidth / stdWidth, windowHeight / stdHeight);
    w = stdWidth * scale; h = stdHeight * scale;
    createCanvas(w, h);
    textAlign(CENTER, CENTER);
    textSize(40);
    currentPage = 0; numOfPages = 3;

    var left  = new button(stdWidth * 0.4 * scale, stdHeight * 0.9 * scale, icon_sb_left);
        left.onClick  = function () {if (currentPage > 0) currentPage--;};
    var right = new button(stdWidth * 0.6 * scale, stdHeight * 0.9 * scale, icon_sb_right);
        right.onClick = function () {if (currentPage < 2) currentPage++;};
    var dot0  = new button(stdWidth * 0.45 * scale, stdHeight * 0.9 * scale, icon_sb_dot);
        dot0.onClick  = function () {if (currentPage != 0) currentPage = 0};
    var dot1  = new button(stdWidth * 0.50 * scale, stdHeight * 0.9 * scale, icon_sb_dot);
        dot1.onClick  = function () {if (currentPage != 1) currentPage = 1};
    var dot2  = new button(stdWidth * 0.55 * scale, stdHeight * 0.9 * scale, icon_sb_dot);
        dot2.onClick  = function () {if (currentPage != 2) currentPage = 2};
    shortcuts = [left, right, dot0, dot1, dot2];
}

function draw() {
    background(bg);
    noStroke();
    fill(255,255,255);
    switch (currentPage) {
        case 0:
            text("page 1", w * 0.5, h * 0.5);
            break;
        case 1:
            text("page 2", w * 0.5, h * 0.5);
            break;
        case 2:
            text("page 3", w * 0.5, h * 0.5);
            break;
    }
    drawBase();
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

//滚轴切换三个页面
//颜色深浅显示当前页面

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