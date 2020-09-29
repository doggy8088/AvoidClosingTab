# Avoid Closing Tab

A [Tampermonkey](https://www.tampermonkey.net/) Userscript that preventing tab been closed by hitting `Ctrl-W` for specific websites.

## Features

- Only the following websites been protected by this user script:
  - GitHub Codespaces
    - `https://*.github.dev/*`
  - App Service Editor
    - `https://*.scm.azurewebsites.net/dev/*`

## Usage

1. Install [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) Chrome extension.

2. Click [this link](https://github.com/doggy8088/AvoidClosingTab/raw/master/AvoidClosingTab.user.js) to install Userscript.

3. Hit **Install** button in the Tampermonkey extension page.

## Links

- [Tampermonkey • Documentation](https://www.tampermonkey.net/documentation.php)
  - [@run-at](https://www.tampermonkey.net/documentation.php#_run_at)
- [WindowEventHandlers.onbeforeunload - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeunload)

## Related Userscripts

- [doggy8088/TrackingTokenStripper: A Tampermonkey Userscript that remove most of the annoying tracking token from URL parameters](https://github.com/doggy8088/TrackingTokenStripper)
