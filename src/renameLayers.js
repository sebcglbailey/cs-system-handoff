import sketch from "sketch/dom";
import UI from "sketch/ui";
// documentation: https://developer.sketchapp.com/reference/api/

import LIBRARIES from './helpers/libraries';
import chooseLibrary from './helpers/chooseLibrary';

const document = sketch.Document.getSelectedDocument();

let libraryCheck = "WebApp";
let typeCheck = true;

function getOverrides(layer, symbol) {

  const overrideNames = symbol.overrides.map(option => {
    return option.overrideName
  })

  let overrides = layer.overrides.filter(override => {
    return override.editable && overrideNames.includes(override.affectedLayer?.name)
  })

  overrides.forEach((override, index) => {
    const name = override.affectedLayer?.name
    let overrideSymbol = symbol.overrides.filter(overrideObj => {
      return overrideObj.overrideName == name
    })[0]


    if (!overrideSymbol || !overrides.value) {
      layer.name = layer.name.replace("{override}", "")
      return
    }

    let optionName =
      override &&
        override.sketchObject &&
        override.sketchObject.children &&
        override.sketchObject.children()[0] &&
        override.sketchObject.children()[0].master &&
        override.sketchObject.children()[0].master().name ?
        String(override.sketchObject.children()[0]?.master().name()) :
        null

    let overrideFilter = overrideSymbol.options.filter(option => {
      return option.names.includes(optionName)
    })[0]

    if (!overrideFilter) {
      layer.name = layer.name.replace("{override}", "")
    } else {
      if (overrideFilter.replaceName) {
        layer.name = filter[0].componentName
        layer.name = layer.name.replace("{override}", "")
      } else if (overrideFilter.addAccessoryToName) {
        layer.name = layer.name.replace("{override}", overrideFilter[0].componentNameAddition)
      } else {
        layer.name += filter[0].componentNameAddition
        layer.name = layer.name.replace("{override}", "")
      }
    }

  })

}

function iterateLayers(layers, index) {

  layers.forEach(layer => {

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

      if (filter.length == 0) {
        return;
      } else if (
        filter.length >= 1 &&
        filter[0].componentName &&
        filter[0].componentName.length > 0
      ) {
        layer.name = filter[0].componentName;

        if (layer.overrides.length > 0 && filter[0].overrides) {
          getOverrides(layer, filter[0])
        }

      }
    } else if (layer.type == "Text" && typeCheck) {
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

  let selectedLayers = document.selectedLayers;
  let selectedPage = document.selectedPage;

  chooseLibrary(
    (library, includeType) => {
      libraryCheck = library
      typeCheck = includeType

      let layers = selectedLayers && selectedLayers.length > 0 ? selectedLayers : selectedPage ? selectedPage.layers : selectedPage.layers

      iterateLayers(layers)
    }
  );
}
