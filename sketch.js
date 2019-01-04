// 如何调用另外一个js文件 https://www.jianshu.com/p/7dfd612693bc
var mouseIsPressing; //mouseIsPressing显示是否我之前已经摁下去鼠标了只是还没来得及抬起来
var bg;
var whichMenu; //0为初始菜单，1为会员管理下的二级菜单，2为录入会员信息的界面，3为查看全体会员信息的界面。
var firstIcon;
var secondIcon;
var data = {}; // 读取原始JSON.
var vips = []; //用来装会员的list。

var mainPage;
var memberPage;
var testbutton;

function loadData() {

}

function addVip() {
  //用来增加会员
}
function setPage (page) {
  whichMenu = page;
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    bg = loadImage("assets/bg.png");
    firstIcon  = loadImage("assets/prime.png");
    secondIcon = loadImage("assets/second.png");
    thirdIcon  = loadImage("assets/thrid.png");
    whichMenu = MenuType.PRM_MAIN_MENU;
    textAlign(CENTER, CENTER);
    textSize(40);
    mainPage    = createMainPage (windowWidth, windowHeight, firstIcon, []);
    memberPage  = createMemberPage (windowWidth, windowHeight, thirdIcon, []);
    financePage = createFinancePage (windowWidth, windowHeight, firstIcon, []);
}
  
function draw() {
    background(bg);
    
    if (whichMenu == MenuType.PRM_MAIN_MENU) {//绘制主菜单界面

      mainPage.drawImage(0.7);
    
    } else if (whichMenu == MenuType.SND_MEMBERSHIP) {//绘制会员管理界面

      memberPage.drawImage(0.6);
      testDraw();

    } else if (whichMenu==2) {//绘制账务管理界面

      financePage.drawImage(0.6);

    } else if (whichMenu==3) {
      console.log("3");
    } else if (whichMenu==4) {
      console.log("4");
    }
}

function mouseClicked() {
  if (whichMenu == MenuType.PRM_MAIN_MENU) {//主界面
    for (var i = 0; i < mainPage.buttons.length; i++) {
      if (mainPage.buttons[i].button.isClicked(mouseX, mouseY, 0.7)) {
        mainPage.buttons[i].onClick();
      }
    }
  } else if (whichMenu == MenuType.SND_MEMBERSHIP) {//会员管理界面
    for (var i = 0; i < memberPage.buttons.length; i++) {
      if (memberPage.buttons[i].button.isClicked(mouseX, mouseY, 0.6)) {
        memberPage.buttons[i].onClick();
      }
    }
  }
}

// 绘制预留空间
function testDraw() {
  fill(255, 255, 255, 15);
  strokeWeight(4)
  rect(windowWidth * 0.26, windowHeight * 0.13, windowWidth * 0.65, windowHeight * 0.66)
}