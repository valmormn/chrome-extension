// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

"use strict";



chrome.runtime.onInstalled.addListener(function () {

  console.log("chrome.runtime.onInstalled.addListener");

  // 
  chrome.storage.sync.set({ color: "red" }, () => {
    console.log(
      "Foi escrito \"{color: 'red'}\" chrome storage e em seguida rodou uma callback"
    );
  });

  chrome.browserAction.onClicked.addListener(function (tab) {
    alert("HELLOOOOO WORLD!!");
  });

  // This will run when a bookmark is created.
  chrome.bookmarks.onCreated.addListener(function () {
    // do something
    console.log("background.js/bookmarks.onCreated");
  });

  const kLocales = {
    "com.au": "Australia",
    "com.br": "Brazil",
    ca: "Canada",
    cn: "China",
    fr: "France",
    it: "Italy",
    "co.in": "India",
    "co.jp": "Japan",
    "com.ms": "Mexico",
    ru: "Russia",
    "co.za": "South Africa",
    "co.uk": "United Kingdom",
  };

  var xoxota = function(arg) { console.log(arg) }

  for (let key of Object.keys(kLocales)) {
    chrome.contextMenus.create({
      id: key,
      title: kLocales[key],
      type: "normal",
      contexts: ["all"],
      // onclick: xoxota(kLocales[key]),
    }, ()=>{
      // console.log(kLocales[key]);
    });
  }

  function getword(info,tab) {
    // if (info.menuItemId !== CONTEXT_MENU_ID) {
    //   return;
    // }
    console.log("Word " + info.selectionText + " was clicked.");
    chrome.tabs.create({  
      url: "http://www.google.com/search?q=" + info.selectionText
    });
  }

  chrome.contextMenus.onClicked.addListener(getword)


  // chrome.runtime.onInstalled.addListener(function() {
  // });

  // Menu contextual da extensão
  // quando o usuário clica com o botão direito do mouse em alguma página
  // chrome.contextMenus.create({
  //   id: 'id de que',
  //   title: 'Awesome Browser',
  //   type: 'normal',
  //   contexts: ['all'],
  // });

  // chrome.pageAction.onClicked.addListener(function (){
  //   alert("iaiii");
  // })

  
  // chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
  //   chrome.declarativeContent.onPageChanged.addRules([{
  //     conditions: [new chrome.declarativeContent.PageStateMatcher({
  //       pageUrl: {hostEquals: 'developer.chrome.com'},
  //     })
  //     ],
  //         actions: [new chrome.declarativeContent.ShowPageAction()]
  //   }]);
  // });
});

// chrome.browserAction.onClicked.addListener(function (tab){
//   alert("iaiii");
// })




