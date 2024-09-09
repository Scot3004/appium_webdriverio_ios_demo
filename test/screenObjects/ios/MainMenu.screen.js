class MainMenuScreen {
  get loginMenuOption() {
    return $('~menu item log in');
  }

  get drawMenuOption() {
    return $('~menu item drawing');
  }
}
  
module.exports = new MainMenuScreen();
  