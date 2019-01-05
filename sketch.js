// 如何调用另外一个js文件 https://www.jianshu.com/p/7dfd612693bc
var bg;
var whichMenu; //0为初始菜单，1为会员管理下的二级菜单，2为录入会员信息的界面，3为查看全体会员信息的界面。
var data = {}; // 读取原始JSON.
var vips = []; //用来装会员的list。
var firstIcon, secondIcon, thirdIcon;
var mainPage, registrationPage, 
    memberPage, financePage, stuffPage, inventoryPage, 
    trd11Page;

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
    textAlign(CENTER, CENTER);
    textSize(40);
    whichMenu = MenuType.PRM_MAIN_MENU;
    mainPage         = createMainPage (windowWidth, windowHeight, firstIcon, []);
    memberPage       = createMemberPage (windowWidth, windowHeight, thirdIcon, []);
    financePage      = createFinancePage (windowWidth, windowHeight, secondIcon, []);
    staffPage        = createStaffPage (windowWidth, windowHeight, secondIcon, []);
    inventoryPage    = createInventoryPage (windowWidth, windowHeight, secondIcon, []);
    trd11Page        = createTRD11Page (windowWidth, windowHeight,thirdIcon, []);
    registrationPage = createRegistrationPage (windowWidth, windowHeight,thirdIcon, []);

}
  
function draw() {
    background(bg);
    noStroke();

    switch (whichMenu) {
      case MenuType.PRM_MAIN_MENU: //绘制主菜单界面
        mainPage.drawImage(0.7);
        break;
      case MenuType.PRM_REGISTRATION: //注册界面
        registrationPage.drawImage(0.7);
        testDraw();
        break;

      case MenuType.SND_01_MEMBERSHIP: //绘制会员菜单界面
        memberPage.drawImage(0.7);
        testDraw();
        break;
      case MenuType.SND_02_FINANCE: //绘制账务管理界面
        financePage.drawImage(0.7);
        break;
      case MenuType.SND_03_STAFF: //绘制员工管理界面
        staffPage.drawImage(0.7);
        break;
      case MenuType.SND_04_INVENTORY: //绘制库存管理界面
        inventoryPage.drawImage(0.7);
        break;
      case MenuType.TRD_11_MEMBERMANAGE: //会员菜单 -- 会员管理
        trd11Page.drawImage(0.7);
        
        break;
    }

}

function mouseClicked() {

  noLoop();

  switch (whichMenu) {
    case MenuType.PRM_MAIN_MENU:
      mainPage.clickReact();
      break;
    case MenuType.PRM_REGISTRATION:
      registrationPage.clickReact();
      break;

    case MenuType.SND_01_MEMBERSHIP:
      memberPage.clickReact();
      break;
    case MenuType.SND_02_FINANCE:
      financePage.clickReact();
      break;
    case MenuType.SND_03_STAFF:
      staffPage.clickReact();
      break;
    case MenuType.SND_04_INVENTORY:
      inventoryPage.clickReact();
      break;
    case MenuType.TRD_11_MEMBERMANAGE:
      trd11Page.clickReact();
      break;


    default:
      setPage(MenuType.PRM_MAIN_MENU);
      break;
  }
  redraw();
}

// 绘制预留空间
function testDraw() {

    switch (whichMenu) {
      case MenuType.SND_01_MEMBERSHIP:// 预约信息一览
        fill(255, 255, 255, 45);
        strokeWeight(5)
        rect(windowWidth * 0.26, windowHeight * 0.13, 
             windowWidth * 0.65, windowHeight * 0.66);
             break;
      case MenuType.PRM_REGISTRATION:// 会员注册界面
        fill(255, 255, 255, 40);
        strokeWeight(5);
        stroke(255, 193, 37, 50);
        rect(windowWidth * 0.05, windowHeight * 0.1,
             windowWidth * 0.7, windowHeight * 0.83, 
             25, 25, 25, 25);
        break;
    }

}
