// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    return {redirectUrl: "https://pc-arealights.netlify.app/build/playcanvas.js"};
  },
  // filters
  {
    urls: [
      "https://code.playcanvas.com/playcanvas-stable.js"
    ],
    types: ["js"]
  },
  // extraInfoSpec
  ["blocking"]);
