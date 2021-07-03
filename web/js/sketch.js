// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

let gesture;

const GESTURES = ["kick", "up", "back", "pass", "drill"];

let count = {
  kick: 0,
  up: 0,
  back: 0,
  pass: 0,
  drill: 0,
};

let updateCount = (g) => {
  count[g] = count[g] + 1;
  console.log("Gestures Count: ", count);
  PubSub.publish("gestures", count);
};

function onInferenceSketch(i) {
  switch (i) {
    case 0:
      gesture = "kick";
      updateCount(gesture);
      break;
    case 1:
      gesture = "up";
      updateCount(gesture);
      break;
    case 2:
      gesture = "back";
      updateCount(gesture);
      break;
    case 3:
      gesture = "pass";
      updateCount(gesture);
      break;
    case 4:
      gesture = "drill";
      updateCount(gesture);

      break;
    default:
    // code block
  }
}

/************************************************************************
// SCRIPT FOR DISPLAY
/************************************************************************/

if (!!navigator.bluetooth) {
  document.body.classList.add("not-supported");
}

/************************************************************************
// SCRIPT FOR BUTTONS
/************************************************************************/

// // GO TO PLAY --- ONLY FOR TESTING
// document.getElementById("go_to_play").addEventListener("click", function(){
//   document.querySelector('.play').scrollIntoView({
//       behavior: "smooth",
//       });
//     }, 100);

// GO TO SKETCH BUTTON
// document.getElementById("go_to_sketch").addEventListener(
//   "click",
//   function () {
//     document.querySelector("#sketch-holder").scrollIntoView({
//       behavior: "smooth",
//     });
//   },
//   100
// );

window.tinyMlExperimentBleInterface.createConnectButton(
  "#connectButtonContainer",
  {
    model: "FUImodel/model.tflite",
    numClasses: 5,
    threshold: 0.181,
    numSamples: 25,
    captureDelay: 30,
    useMagnetometer: false,
    onConnect() {
      console.log("The BLE is connected!");
    },

    onTransferProgress(progress) {
      console.log(`Loaded ${Math.round(progress * 100)}%)`);
      var bar = document.getElementById("myBar");
      document.getElementById("myProgress").style.visibility = "visible";
      // bar.style.width = Math.round(progress * 100) + "%";
      document.getElementById("myBar").innerHTML = `${Math.round(
        progress * 100
      )}%`;
    },

    onTransferCompleted() {},

    onDisconnect() {
      console.log("The BLE is disconnected!");
    },

    onInference(data) {
      onInferenceSketch(data.index);
    },
  }
);
