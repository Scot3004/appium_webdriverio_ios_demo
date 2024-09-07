const path = require('path');
const { config } = require('../wdio.shared.conf');
const androidAppPath = path.join(process.cwd(), "app/android/rn-demo.apk");

// ====================
// Runner Configuration
// ====================
//
config.port = 4723;

//
// ============
// Specs
// ============
config.specs = [
  path.join(process.cwd(), './test/specs/*.e2e.js')
];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    platformName: "Android",
    'appium:deviceName': 'emulator-5554',
    'appium:automationName': 'uiautomator2',
    "appium:app": androidAppPath,
  }
]

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = [['appium', {
  args: {
    address: 'localhost',
    port: 4723,
    relaxedSecurity: true
  },
  logPath: './'
}]];

exports.config = config;