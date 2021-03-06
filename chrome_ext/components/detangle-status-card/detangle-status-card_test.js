// Copyright 2017 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// TODO: High-level file comment.

goog.setTestOnly();

goog.require('detangle.ProfileLabels');
goog.require('detangle.Profiles');
goog.require('goog.testing.jsunit');


chrome = {
  runtime: {sendMessage: function() {}}
};


/**
 * Waits for async events to settle down, then flush the dom and resolves the
 * promise.
 *
 * @public
 * @return {!Promise}
 */
function wait() {
  return new Promise(function(resolve) {
    window.setTimeout(function() {
      Polymer.dom.flush();
      resolve();
    }, 250);
  });
}


function testComputedPropertiesCorporate() {
  var element = document.createElement('detangle-status-card');
  element.setAttribute('this-profile', detangle.Profiles.CORPORATE);
  return wait().then(function() {
    assertEquals(
        detangle.ProfileLabels[detangle.Profiles.CORPORATE],
        element.profileLabel);
  });
}


function testComputedPropertiesRegular() {
  var element = document.createElement('detangle-status-card');
  element.setAttribute('this-profile', detangle.Profiles.REGULAR);
  return wait().then(function() {
    assertEquals(
        detangle.ProfileLabels[detangle.Profiles.REGULAR],
        element.profileLabel);
  });
}


function testComputedPropertiesIsolated() {
  var element = document.createElement('detangle-status-card');
  element.setAttribute('this-profile', detangle.Profiles.ISOLATED);
  return wait().then(function() {
    assertEquals(
        detangle.ProfileLabels[detangle.Profiles.ISOLATED],
        element.profileLabel);
  });
}


function testComputedPropertiesUndefined() {
  var element = document.createElement('detangle-status-card');
  return wait().then(function() {
    assertEquals('Get Started', element.profileLabel);
  });
}
