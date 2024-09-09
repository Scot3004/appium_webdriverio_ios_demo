class BottomSideMenuScreen {
  get expandMenuButton() {
    if(driver.isAndroid) {
      return $("~open menu");
    } else {
      return $("~tab bar option menu");
    }
  }
}

module.exports = new BottomSideMenuScreen();
