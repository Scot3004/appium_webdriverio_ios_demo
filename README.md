# Appium + WebDriver.IO Demo Framework - Android & IOS Example

For this repository is recommended to install node 18+ https://nodejs.org/en/download/package-manager

You can find the app in this url https://github.com/saucelabs/my-demo-app-rn/releases

Run on ios can be done by running the command

```sh {"id":"01J7BR19NEGVVKHCYVKGTRX2SG"}
npm run wdio
```

For run the test on android run the command

```sh {"id":"01J7BR1NE4537VJERZA8K11S44"}
npm run wdioAndroid
```

If you want to run an specific test add `--spec` flag with the test that you want to run, for example to run draw test on android

```sh {"id":"01J7BR3QGTMZ6NFYAHCB9KF5EH"}
npm run wdioAndroid -- --spec ./test/specs/draw.e2e.js
```