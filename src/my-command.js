import sketch from "sketch/dom";
import UI from "sketch/ui";
// documentation: https://developer.sketchapp.com/reference/api/

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

const iterateLayers = (layers, index) => {
  // layers = layers.filter((sub, index) => {
  //     return sub.type == "SymbolInstance" || sub.type == "Group" || sub.type == "Artboard" || sub.type == "Page" || sub.type == "SymbolMaster"
  // })

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
      let symbolName = String(layer.sketchObject.symbolMaster().name());
      let id = layer.symbolId;

      let filter = LIBRARIES[libraryCheck].filter(symbol => {
        return symbol.names.includes(symbolName);
      });

      if (
        filter.length >= 1 &&
        filter[0].componentName &&
        filter[0].componentName.length > 0
      ) {
        layer.name = filter[0].componentName;
      }
    } else if (layer.type == "Text") {
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

const chooseLibrary = () => {
  UI.getInputFromUser(
    "Which library do you want to rename your layers to?",
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
    }
  );
};

export default function(context) {
  chooseLibrary();
}
