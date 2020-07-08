// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {

  chrome.storage.sync.set({color: 'red'}, function() {
    console.log("Foi escrito em chrome storage e em seguida rodou uma callback ond");
  });

  const kLocales = {
    'com.au': 'Australia',
    'com.br': 'Brazil',
    'ca': 'Canada',
    'cn': 'China',
    'fr': 'France',
    'it': 'Italy',
    'co.in': 'India',
    'co.jp': 'Japan',
    'com.ms': 'Mexico',
    'ru': 'Russia',
    'co.za': 'South Africa',
    'co.uk': 'United Kingdom'
  };

  chrome.runtime.onInstalled.addListener(function() {
    for (let key of Object.keys(kLocales)) {
      chrome.contextMenus.create({
        id: key,
        title: kLocales[key],
        type: 'normal',
        contexts: ['selection'],
      });
    }
  });

  // Menu contextual da extensão 
  // quando o usuário clica com o botão direito do mouse em alguma página
  chrome.contextMenus.create({
    id: 'id de que',
    title: 'Awesome Browser',
    type: 'normal',
    contexts: ['all'],
  });

  // chrome.pageAction.onClicked.addListener(function (){
  //   alert("iaiii");
  // })



  // console.log('wtf');

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

chrome.browserAction.onClicked.addListener(function(tab) {
  alert('HELLOOOOO WORLD!!');
});