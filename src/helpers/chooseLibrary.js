import sketch from 'sketch/dom';
import UI from 'sketch/ui';

import LIBRARIES from './libraries';

import dialog from '../helpers/Dialog'
const Dialog = dialog.dialog
const ui = dialog.ui

const chooseLibrary = (callback) => {

    var input = new Dialog("Rename layers from a library")
    input.addLabel("Which library file to you want to reference?")
    let chooseLibraryView = ui.popupButton(Object.keys(LIBRARIES))
    input.addView(chooseLibraryView)

    input.addView(ui.divider())

    let includeTypeView = ui.checkBox(true, "Rename text layers")
    input.addView(includeTypeView)

    let responseCode = input.run()
    if (responseCode == 1000) {
        let libraryIndex = chooseLibraryView.indexOfSelectedItem();
        let chosenLibraryName = Object.keys(LIBRARIES)[libraryIndex]
        let includeType = includeTypeView.state() == NSOnState

        callback(chosenLibraryName, includeType)
    }
};

export default chooseLibrary