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
    firstIcon = loadImage("assets/prime.png");
    secondIcon = loadImage("assets/second.png");
    thirdIcon = loadImage("assets/thrid.png");
    whichMenu = 0;
    textAlign(CENTER, CENTER);
    textSize(40);
    mainPage   = createMainPage (windowWidth, windowHeight, firstIcon, []);
    memberPage = createMemberPage (windowWidth, windowHeight, thirdIcon, []);
}
  
function draw() {
    background(bg);
    
    if (whichMenu == MenuType.PRM_MAIN_MENU) {
      
      //绘制主菜单界面
      mainPage.drawImage(0.7);
      
      if (!mouseIsPressing && mouseIsPressed) {
        mouseIsPressing = true;
        for (var i = 0; i < mainPage.buttons.length; i++) {
          if (mainPage.buttons[i].button.isClicked(mouseX, mouseY, 0.7)) {
              whichMenu = i + 1;
          }
        }
      } else {
        mouseIsPressing = false;
      }

    } else if (whichMenu == MenuType.SND_MEMBERSHIP) {

      //绘制会员管理界面
      memberPage.drawImage(0.6);

      fill(255, 255, 255, 15);
      strokeWeight(4)
      rect(windowWidth * 0.26, windowHeight * 0.13, windowWidth * 0.65, windowHeight * 0.66)

    } else if (whichMenu==2) {
      //这三个createInput()没法点进去输入，很神奇，不知道是为了什么，是不是mousePressed干扰了他
      console.log("2");
    } else if (whichMenu==3) {
      console.log("3");
    } else if (whichMenu==4) {
      console.log("4");
    }
}

  //这个function负责处理点击事务，如果以后没问题会把上面的东西去掉。
  // function mousePressed() {
  //   if (whichMenu == 0) {
  //     //用于捕捉点击会员管理
  //     if (mouseX >= width/10 && mouseY >= height/7 && mouseX <= width/10 + firstIcon.width/2 && mouseY <= height/7 + firstIcon.height/2) {
  //       whichMenu = 1;
  //     }
  //   } else if (whichMenu == 1) {
  //     //用于捕捉点击所有会员
  //     if (mouseX >= width/10 && mouseY >= height/7 && mouseX <= width/10 + secondIcon.width/1.5 && mouseY <= height/7 + secondIcon.height/1.5) {
  //       whichMenu = 3;
  //     }
  //     //用于捕捉点击新增会员 
  //     else if (mouseX >= 1.9*width/10 + 3*secondIcon.width/1.5 && mouseY >= height/7 && mouseX <= 1.9*width/10 + 3*secondIcon.width/1.5 + secondIcon.width/1.5 && mouseY <= height/7 + secondIcon.height/1.5) {
  //       whichMenu = 2;
  //     } 
  //     //用于捕捉返回上级
  //     else if (mouseX >= 1.9*width/10 + 3*secondIcon.width/1.5 && mouseY >= 1.3*height/7 + secondIcon.height/1.5 && mouseX <= 1.9*width/10 + 3*secondIcon.width/1.5 + secondIcon.width/1.5 && mouseY <= 1.3*height/7 + secondIcon.height/1.5 + secondIcon.height/1.5) {
  //       whichMenu = 0;
  //     }
  //   }
  //} 

