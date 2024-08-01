class CatalogScreen {
  get productsHeader() {
    if(driver.isAndroid) {
      return $("~container header").$('android=className("android.widget.TextView")');
    } else {
      return $('~Products');
    }
  }
}

module.exports = new CatalogScreen();
