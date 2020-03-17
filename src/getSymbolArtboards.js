import sketch from "sketch/dom";
import UI from "sketch/ui";

import CSWeb from "./modules/CSWeb";
import CSiOS from "./modules/CSiOS";
import CSAndroid from "./modules/CSAndroid";
import CSText from "./modules/CSText";

const LIBRARIES = {
  WebApp: CSWeb,
  CSiOS: CSiOS,
  CSAndroid: CSAndroid,
  CSText: CSText
};

let libraryCheck = "WebApp";

let symbols = [];
let textStyles = [];

const iterateLayers = (layers, index) => {
  layers.forEach((layer, index) => {
    if (layer.type == "Page") {
      iterateLayers(layer.layers);
    }

    if (layer.type == "SymbolMaster") {
      let symbolName = layer.name;

      let filter = LIBRARIES[libraryCheck].filter(symbol => {
        return symbol.names.includes(symbolName);
      });

      if (filter.length == 0 || !symbols.includes(symbolName)) {
        symbols.push(symbolName);
      }
    }
  });
};

const chooseLibrary = () => {
  UI.getInputFromUser(
    "Which library do you want to reference?",
    {
      type: UI.INPUT_TYPE.selection,
      possibleValues: Object.keys(LIBRARIES),
      initialValue: libraryCheck
    },
    (err, value) => {
      if (err) {
        return;
      }

      libraryCheck = value;

      let document = sketch.Document.getSelectedDocument();
      let pages = document.pages;
      let selectedLayers = document.selectedLayers;

      // Iterate over all pages
      iterateLayers(
        selectedLayers && selectedLayers.length > 0 ? selectedLayers : pages
      );

      console.log(symbols.join(" /// "));
    }
  );
};

export default function(context) {
  UI.message("Check the console – 💎 Sketch dev tools");

  chooseLibrary();
}
