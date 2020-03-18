import sketch from "sketch/dom";
import UI from "sketch/ui";

import LIBRARIES from './helpers/libraries';
import chooseLibrary from './helpers/chooseLibrary';

let libraryCheck = "WebApp";

let symbols = [];
let textStyles = [];

const iterateLayers = (layers, index) => {
    layers.forEach((layer, index) => {
        if (layer.layers) {
            iterateLayers(layer.layers);
        }

        if (layer.type == "SymbolInstance") {
            let symbolName = String(layer.sketchObject.symbolMaster().name());

            let filter = LIBRARIES[libraryCheck].filter(symbol => {
                return symbol.names.includes(symbolName);
            });

            if (filter.length == 0 && !symbols.includes(symbolName)) {
                symbols.push(symbolName);
            }
        }

        if (layer.type == "Text" && libraryCheck == LIBRARIES.CSText) {
            let styleName = String(layer.sharedStyle.name);

            let filter = LIBRARIES["CSText"].filter(text => {
                return styleName.includes(text.name);
            });

            if (filter.length == 0 && !textStyles.includes(styleName)) {
                textStyles.push(styleName);
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
