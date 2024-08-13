// ==UserScript==
// @name         Avoid Closing Tab
// @version      0.2
// @description  Preventing tab been closed by hitting Ctrl-W for specific websites.
// @license      MIT
// @homepage     https://blog.miniasp.com/
// @homepageURL  https://blog.miniasp.com/
// @website      https://www.facebook.com/will.fans
// @source       https://github.com/doggy8088/AvoidClosingTab
// @namespace    https://github.com/doggy8088/AvoidClosingTab
// @author       Will Huang
// @match        https://*/*
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener('beforeunload', function (e) {
        // Cancel the event
        e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
        // Chrome requires returnValue to be set
        e.returnValue = '';
    });
})();
