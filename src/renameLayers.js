import sketch from "sketch/dom";
import UI from "sketch/ui";
// documentation: https://developer.sketchapp.com/reference/api/

import LIBRARIES from './helpers/libraries';
import chooseLibrary from './helpers/chooseLibrary';

let libraryCheck = "WebApp";

const iterateLayers = (layers, index) => {

  layers.forEach((layer, index) => {

    if (layer.layers) {
      iterateLayers(layer.layers);
      return;
    }

    // Skip if layer is locked
    if (layer.locked) {
      return;
    }

    // Get the original symbol name & id
    if (layer.type == "SymbolInstance") {
      let symbolName = layer.sketchObject.symbolMaster() ? String(layer.sketchObject.symbolMaster().name()) : null;

      let filter = LIBRARIES[libraryCheck].filter(symbol => {
        return symbol.names.includes(symbolName);
      });

      if (
        filter.length >= 1 &&
        filter[0].componentName &&
        filter[0].componentName.length > 0
      ) {
        // console.log(filter[0].componentName)
        layer.name = filter[0].componentName;
      }
    } else if (layer.type == "Text" && libraryCheck == "CSText") {
      if (!layer.sharedStyle) {
        return;
      }

      let sharedStyleName = layer.sharedStyle
        ? String(layer.sharedStyle.name)
        : null;

      let filter = LIBRARIES["CSText"].filter(text => {
        return sharedStyleName.includes(text.name);
      });

      if (
        filter.length >= 1 &&
        filter[0].styleName &&
        filter[0].styleName.length > 0
      ) {
        layer.name = filter[0].styleName;
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
    }
  );
}
