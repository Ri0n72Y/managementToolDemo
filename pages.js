// primary pages
var mainPage, membership, stuff, finance, inventory;
// page under membership
var allMembers, record, appointment, management, registration

/**
 * create main page 
 * @param {number} pageWidth  - width of the page
 * @param {number} pageHeight - height of the page
 * @param {*}      image      - image of button on main page
 * @param {[]}     shortcuts  - all shortcuts it have : findMember, newMember, checkout
 */
function createMainPage(pageWidth, pageHeight, image, shortcuts) {
    var member = new textButton (//Button1
            "会员菜单",
            pageWidth * 0.2, pageHeight * 0.1,
            image
        );
        member.onClick = function () {
            setPage(MenuType.SND_01_MEMBERSHIP);
        };
        
    var finance = new textButton (//Button2
            "本店账务",
            pageWidth * 0.4, pageHeight * 0.1,
            image
        );
        finance.onClick = function () {
            setPage(MenuType.SND_02_FINANCE);
        };
        
    var staff = new textButton (//Button3
            "员工管理",
            pageWidth * 0.2, pageHeight * 0.5,
            image
        );
        staff.onClick = function () {
            setPage(MenuType.SND_03_STAFF);
        };
        
    var invent = new textButton (//Button4
            "库存管理",
            pageWidth * 0.4, pageHeight * 0.5,
            image
        );
        invent.onClick = function () {
            setPage(MenuType.SND_04_INVENTORY);
        };
    var buttons = [member, finance, staff, invent];
    
    var temp = new page("主界面", [], buttons, shortcuts);
    temp.clickReact = function () {
        for (var i = 0; i < mainPage.buttons.length; i++) {
            if (mainPage.buttons[i].button.isClicked(mouseX, mouseY, 0.7)) {
              mainPage.buttons[i].onClick();
            }
        }
    }
    return temp;
}

/**
 * 创建会员注册界面
 * @param {number} pageWidth 
 * @param {number} pageHeight 
 * @param {*} image 
 * @param {[]} shortcuts 
 */
function createRegistrationPage(pageWidth, pageHeight, image, shortcuts) {
    var backToMainPage = new textButton (//b
        "返回上级",
        windowWidth * 0.82, windowHeight * 0.8,
        image
        );
        backToMainPage.onClick = function () {
            setPage(MenuType.SND_01_MEMBERSHIP);
            redraw();
        };

    var buttons = [backToMainPage];
    
    var temp = new page("会员菜单 -- 会员管理 -- 会员注册", [], buttons, shortcuts);
        temp.clickReact = function () {
            for (var i = 0; i < registrationPage.buttons.length; i++) {
                if (registrationPage.buttons[i].button.isClicked(mouseX, mouseY, 0.7)) {
                  registrationPage.buttons[i].onClick();
                }
            }
        }
    return temp;
}

/**
 * 创建会员管理界面
 * @param {number} pageWidth 
 * @param {number} pageHeight 
 * @param {*} image 
 * @param {[]} shortcuts 
 */
function createMemberPage(pageWidth, pageHeight, image, shortcuts) {
    var memberManage = new textButton (//Button1
            "会员管理",
            pageWidth * 0.07, pageHeight * 0.1,
            image
        );
        memberManage.onClick = function () {
            setPage(MenuType.TRD_11_MEMBERMANAGE);
            inputTest = createInput();
            inputTest.size(200, 50);
            inputTest.position(windowWidth * 0.42, windowHeight * 0.40);
        };

    var appointmentManage = new textButton (//Button2
            "预约管理",
            pageWidth * 0.07, pageHeight * 0.25,
            image
        );
        appointmentManage.onClick = function () {
            setPage(MenuType.TRD_12_APPOINTMENTMANAGE);
        };

    var newMember = new textButton (//Button3
            "添加会员",
            windowWidth * 0.07, windowHeight * 0.4,
            image
        );
        newMember.onClick = function () {
            setPage(MenuType.PRM_REGISTRATION);
        };

    var allMember = new textButton (//Button4
            "所有会员",
            windowWidth * 0.07, windowHeight * 0.55,
            image
        );
        allMember.onClick = function () {
            setPage(MenuType.TRD_14_ALLMEMBER);
        };

    var backToMainPage = new textButton (//Button5
            "返回上级",
            windowWidth * 0.07, windowHeight * 0.7,
            image
        );
        backToMainPage.onClick = function () {
            setPage(MenuType.PRM_MAIN_MENU);
            redraw();
        }

    var buttons = [memberManage, appointmentManage, newMember, allMember, backToMainPage];
    
    var temp = new page("会员管理", [], buttons, shortcuts);
    temp.clickReact = function () {
        for (var i = 0; i < memberPage.buttons.length; i++) {
            if (memberPage.buttons[i].button.isClicked(mouseX, mouseY, 0.6)) {
              memberPage.buttons[i].onClick();
            }
        }
    }
    return temp;
}

/**
 * 创建账务管理界面
 * @param {number} pageWidth 
 * @param {number} pageHeight 
 * @param {*} image 
 * @param {[]} shortcuts 
 */
function createFinancePage(pageWidth, pageHeight, image, shortcuts) {
    var accountsOvervire = new textButton (//b1
        "账目总览",
        windowWidth * 0.15, windowHeight * 0.4,
        image
        );
        accountsOvervire.onClick = function () {
        setPage();
        };

    var resultOvervirew = new textButton (//b2
        "业绩统计",
        windowWidth * 0.3, windowHeight * 0.4,
        image
        );
        resultOvervirew.onClick = function () {
        setPage();
        };

    var salesStatistics = new textButton (//b3
        "销售统计",
        windowWidth * 0.45, windowHeight * 0.4,
        image
        );
        salesStatistics.onClick = function () {
        setPage();
        };

    var newBill = new textButton (//b4
        "新建账单",
        windowWidth * 0.6, windowHeight * 0.4,
        image
        );
        newBill.onClick = function () {
        setPage();
        }

    var backToMainPage = new textButton (//b5
            "返回上级",
            windowWidth * 0.85, windowHeight * 0.7,
            image
        );
        backToMainPage.onClick = function () {
            setPage(MenuType.PRM_MAIN_MENU);
            redraw();
        }

    var buttons = [accountsOvervire, resultOvervirew, salesStatistics, newBill, backToMainPage];
    
    var temp = new page("账务管理", [], buttons, shortcuts);
    temp.clickReact = function () {
        for (var i = 0; i < financePage.buttons.length; i++) {
            if (financePage.buttons[i].button.isClicked(mouseX, mouseY, 0.7)) {
              financePage.buttons[i].onClick();
            }
        }
    }
    return temp;
}

/**
 * 创建员工管理界面
 * @param {number} pageWidth 
 * @param {number} pageHeight 
 * @param {*} image 
 * @param {[]} shortcuts 
 */
function createStaffPage(pageWidth, pageHeight, image, shortcuts) {
    var staffManage = new textButton (//b1
        "人员管理",
        windowWidth * 0.15, windowHeight * 0.4,
        image
        );
        staffManage.onClick = function () {
            setPage ();
        }

    var staffRegister = new textButton (//b2
        "员工注册",
        windowWidth * 0.3, windowHeight * 0.4,
        image
        );
        staffRegister.onClick = function () {
            setPage();
        }

    var staffArrange = new textButton (//b3
        "员工安排",
        windowWidth * 0.45, windowHeight * 0.4,
        image
        );
        staffArrange.onClick = function () {
            setPage();
        }

    var staffscheduling = new textButton (//b4
        "员工排班",
        windowWidth * 0.6, windowHeight * 0.4,
        image
        );
        staffscheduling.onClick = function () {
            setPage();
        }

    var backToMainPage = new textButton (//b5
        "返回上级",
        windowWidth * 0.85, windowHeight * 0.7,
        image
        );
        backToMainPage.onClick = function () {
            setPage(MenuType.PRM_MAIN_MENU);
            redraw();
        }

    var buttons = [staffManage, staffRegister, staffArrange, staffscheduling, backToMainPage];
    
    var temp = new page("员工管理", [], buttons, shortcuts);
    temp.clickReact = function () {
        for (var i = 0; i < staffPage.buttons.length; i++) {
            if (staffPage.buttons[i].button.isClicked(mouseX, mouseY, 0.7)) {
              staffPage.buttons[i].onClick();
            }
        }
    }
    return temp;
}

/**
 * 创建库存管理界面
 * @param {number} pageWidth 
 * @param {number} pageHeight 
 * @param {*} image 
 * @param {[]} shortcuts 
 */
function createInventoryPage(pageWidth, pageHeight, image, shortcuts) {
    var allProducts = new textButton (//b1
        "所有产品",
        windowWidth * 0.15, windowHeight * 0.4,
        image);
        allProducts.onClick = function () {
            setPage (MenuType.PRM_MAIN_MENU);
        };
    
    var productLable = new textButton (//b2
        "产品标签",
        windowWidth * 0.3, windowHeight * 0.4,
        image
        );
        productLable.onClick = function () {
            setPage ();
        };

    var inventorys = new textButton (//3
        "库存总览",
        windowWidth * 0.45, windowHeight * 0.4,
        image
        );
        inventorys.onClick = function () {
            setPage ();
        }

    var inOutRecords = new textButton (//4
        "存取记录",
        windowWidth * 0.6, windowHeight * 0.4,
        image
        );
        inOutRecords.onClick = function () {
            setPage ();
        };

    var backToMainPage = new textButton (//b5
        "返回上级",
        windowWidth * 0.85, windowHeight * 0.7,
        image
        );
        backToMainPage.onClick = function () {
            setPage(MenuType.PRM_MAIN_MENU);
            redraw();
        }
    
    var buttons = [allProducts, productLable, inventorys, inOutRecords, backToMainPage];
    
    var temp = new page("库存管理", [], buttons, shortcuts);
        temp.clickReact = function () {
            for (var i = 0; i < inventoryPage.buttons.length; i++) {
                if (inventoryPage.buttons[i].button.isClicked(mouseX, mouseY, 0.7)) {
                  inventoryPage.buttons[i].onClick();
                }
            }
        }
    return temp;
}

/**
 * 创建会员查询界面
 * @param {number} pageWidth 
 * @param {number} pageHeight 
 * @param {*} image 
 * @param {[]} shortcuts 
 */
function createTRD11Page(pageWidth, pageHeight, image, shortcuts) {

    var searchMember = new textButton (//b2
        "会员查询",
        windowWidth * 0.401, windowHeight * 0.5,
        image
        );
        searchMember.onClick = function () {
            inputTest.remove();
            setPage();
            redraw();
        }

    var backToMainPage = new textButton (//b4
        "返回上级",
        windowWidth * 0.82, windowHeight * 0.8,
        image
        );
        backToMainPage.onClick = function () {
            inputTest.remove();
            setPage(MenuType.SND_01_MEMBERSHIP); 
            redraw();
        };

    var buttons = [searchMember, backToMainPage];
    
    var temp = new page("会员菜单 -- 会员管理", [], buttons, shortcuts);
        temp.clickReact = function () {
            for (var i = 0; i < trd11Page.buttons.length; i++) {
                if (trd11Page.buttons[i].button.isClicked(mouseX, mouseY, 0.7)) {
                    trd11Page.buttons[i].onClick();
                }
            }
        }
    return temp;
}

/**
 * 创建预约管理界面
 * @param {number} pageWidth 
 * @param {number} pageHeight 
 * @param {*} image 
 * @param {[]} shortcuts 
 */
function creat3TRD12Page(pageWidth, pageHeight, image, shortcuts) {

}


function exitPages() {}