const LeftSideMenuScreen = require("../screenObjects/ios/BottomSideMenu.screen")
const MainMenuScreen = require("../screenObjects/ios/MainMenu.screen")

describe("Drawing Demo", () => {
  before(async () => {
    await LeftSideMenuScreen.expandMenuButton.click();
    await MainMenuScreen.drawMenuOption.click();
  });

  it('draw some lines', async () => {
    //Panel de dibujo no estaba listo
    const windowSize = await browser.getWindowSize();
    console.log(windowSize);
    await browser.pause(15000);
    await browser.action('pointer', {
      parameters: { pointerType: 'touch' } 
    })
    .move({ duration: 0, x: windowSize.width * 0.9, y: windowSize.height * 0.35 })
    .down({ button: 0 }) // left button
    .move({ duration: 700, x: windowSize.width * 0.6, y: windowSize.height * 0.35 })
    .up({ button: 0 })
    .perform()
    await browser.pause(5000);
  })
});
  