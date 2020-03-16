import sketch from 'sketch/dom'
import UI from 'sketch/ui'
// documentation: https://developer.sketchapp.com/reference/api/

const iterateLayers = (layers) => {
    layers = layers.filter((sub) => {
        return sub.type == "SymbolInstance" || sub.type == "Group" || sub.type == "Artboard" || sub.type == "Page" || sub.type == "SymbolMaster"
    })
    layers.forEach((layer) => {
        if (layer.layers) {
            iterateLayers(layer.layers)
            return 
        }
        var symbolName = layer.sketchObject.symbolMaster().name()
        console.log(layer.name, symbolName)
    })
}

export default function(context) {
    UI.message("Check the console – 💎 Sketch dev tools")
    // Get the document and pages
    var document = sketch.Document.getSelectedDocument()
    var pages = document.pages

    // Iterate over all pages
    iterateLayers(pages)
}

