class LoginScreen {
  get inputUsername() {
    return $('-ios class chain:**/XCUIElementTypeTextField[`name == "Username input field"`]');
  }

  get inputPassword() {
    return $('-ios predicate string:name == "Password input field"');
  }

  get btnLogin() {
    return $(
      '//*[@name="Login button"]'
    );
  }

  get errorMessageText() {
    return $(
      '//*[@name="generic-error-message"]'
    );
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async login(username, password) {
    await this.inputUsername.clearValue();

    // User type the username
    await username.split('').map(async (char, i) => {
      await browser.pause(i * 100)
      await this.inputUsername.addValue(char)
    });

    // User type the pass
    await this.inputPassword.setValue(password);
    await this.btnLogin.click();
  }

}

module.exports = new LoginScreen();