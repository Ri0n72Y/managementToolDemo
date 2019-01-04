// 如何调用另外一个js文件 https://www.jianshu.com/p/7dfd612693bc
var bg;
var whichMenu; //0为初始菜单，1为会员管理下的二级菜单，2为录入会员信息的界面，3为查看全体会员信息的界面。
var data = {}; // 读取原始JSON.
var vips = []; //用来装会员的list。
var firstIcon, secondIcon, thirdIcon;
var mainPage, memberPage, financePage, stuffPage, inventoryPage, 
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
    mainPage      = createMainPage (windowWidth, windowHeight, firstIcon, []);
    memberPage    = createMemberPage (windowWidth, windowHeight, thirdIcon, []);
    financePage   = createFinancePage (windowWidth, windowHeight, secondIcon, []);
    staffPage     = createStaffPage (windowWidth, windowHeight, secondIcon, []);
    inventoryPage = createInventoryPage (windowWidth, windowHeight, secondIcon, []);
    trd11Page     = createTRD11 (windowWidth, windowHeight,secondIcon, []);

}
  
function draw() {
    background(bg);

    switch (whichMenu) {
      case MenuType.PRM_MAIN_MENU: //绘制主菜单界面
        mainPage.drawImage(0.7);
        break;
      case MenuType.SND_01_MEMBERSHIP: //绘制会员菜单界面
        memberPage.drawImage(0.6);
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
        input1 = createInput();
        input1.position(windowWidth * 0.5, windowHeight * 0.5);
        break;
    }
    
}

function mouseClicked() {

  noLoop();

  switch (whichMenu) {
    case MenuType.PRM_MAIN_MENU:
      mainPage.clickReact();
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
  }
  redraw();
}

// 绘制预留空间
function testDraw() {
  if (whichMenu == MenuType.SND_01_MEMBERSHIP) {
    fill(255, 255, 255, 45);
    strokeWeight(4)
    rect(windowWidth * 0.26, windowHeight * 0.13, windowWidth * 0.65, windowHeight * 0.66)
  }
}

/**
 * input1 = createInput();
 * input1.position(windowWidth * 0.5, windowHeight * 0.5);
 */