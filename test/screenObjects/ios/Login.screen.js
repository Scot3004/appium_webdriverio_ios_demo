class LoginScreen {
  get inputUsername() {
    return $('~Username input field');
  }

  get inputPassword() {
    return $('~Password input field');
  }

  get btnLogin() {
    return $(
      '~Login button'
    );
  }

  get errorMessageText() {
    if(driver.isAndroid) {
      return $(
        '~generic-error-message'
      ).$('android=className("android.widget.TextView")');
    } else {
      return $(
        '~generic-error-message'
      );
    }

  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async login(username, password) {
    await this.inputUsername.clearValue();
    await this.inputUsername.setValue(username);

    // User type the pass
    await this.inputPassword.setValue(password);
    await this.btnLogin.click();
  }

}

module.exports = new LoginScreen();