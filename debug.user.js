// ==UserScript==
// @name        DebuggingTM
// @description Debugging reload function in tamper monkey
// @match       *://*.askubuntu.com/*
// @match       *://*.mathoverflow.net/*
// @match       *://*.serverfault.com/*
// @match       *://*.stackapps.com/*
// @match       *://*.stackexchange.com/*
// @match       *://*.stackoverflow.com/*
// @match       *://*.superuser.com/*
// @exclude     *://api.stackexchange.com/*
// @exclude     *://blog.*.com/*
// @exclude     *://chat.*.com/*
// @exclude     *://data.stackexchange.com/*
// @exclude     *://elections.stackexchange.com/*
// @exclude     *://openid.stackexchange.com/*
// @exclude     *://stackexchange.com/*
// @exclude     *://*/review
// @grant       none
// @version     0.1
// @history     0.1 First version
// @author      Håkon Hægland

// ==/UserScript==
/* global $, StackExchange */
/* eslint-disable no-multi-spaces, curly */

var rootNode = $("#content");

console.warn ("Debugging: This is a test2");
