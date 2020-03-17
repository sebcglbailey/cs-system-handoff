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

let libraryCheck = "CSiOS";

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

const chooseLibrary = () => {
    UI.getInputFromUser(
        "Which library do you want to rename your layers to?",
        {
            type: UI.INPUT_TYPE.selection,
            possibleValues: Object.keys(LIBRARIES),
            initialValue: "CSiOS"
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
                selectedLayers && selectedLayers.length > 0
                    ? selectedLayers
                    : pages
            );

            if (value == LIBRARIES.CSText) {
                console.log(textStyles.join(" /// "));
            } else {
                console.log(symbols.join(" /// "));
            }
        }
    );
};

export default function(context) {
    UI.message("Check the console – 💎 Sketch dev tools");

    chooseLibrary();
}
