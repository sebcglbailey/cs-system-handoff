import sketch from "sketch/dom";
import UI from "sketch/ui";

import CSWeb from "./modules/CSWeb";
import CSiOS from "./modules/CSiOS";
import CSAndroid from "./modules/CSAndroid";
import CSText from "./modules/CSText";

import chooseLibrary from './helpers/chooseLibrary';
import LIBRARIES from './helpers/libraries';

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

      if (filter.length == 0 && !symbols.includes(symbolName)) {
        symbols.push(symbolName);
      }
    }
  });
};

export default function (context) {

  let document = sketch.Document.getSelectedDocument();
  let pages = document.pages;
  let selectedLayers = document.selectedLayers;
  let selectedPage = document.selectedPage;

  chooseLibrary(
    (library) => {
      libraryCheck = library

      let layers = selectedLayers && selectedLayers.length > 0 ? selectedLayers : selectedPage ? selectedPage.layers : pages

      iterateLayers(layers)

      UI.message("Check the console – 💎 Sketch dev tools");

      if (library == "CSText") {
        console.log(textStyles.join(" /// "));
      } else {
        console.log(symbols.join(" /// "));
      }
    }
  );
}