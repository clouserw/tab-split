

async function clicked() {
  const message = await browser.tabsplit.tabsplit();
  console.log(`tabsplit sez: "${message}"`);
}

async function init() {
  const message = await browser.tabsplit.init();
  console.log(`init sez: "${message}"`);
  browser.browserAction.onClicked.addListener(clicked);
}

init();

// TODO: Call tabsplit.destroy
// TODO: Call init on new tab

