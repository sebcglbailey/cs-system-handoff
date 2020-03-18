import sketch from 'sketch/dom';
import UI from 'sketch/ui';

import LIBRARIES from './libraries';

const chooseLibrary = (callback) => {
    UI.getInputFromUser(
        "Which library do you want to reference?",
        {
            type: UI.INPUT_TYPE.selection,
            possibleValues: Object.keys(LIBRARIES),
            initialValue: "WebApp"
        },
        (err, value) => {
            if (err) {
                return;
            }

            callback(value);

        }
    );
};

export default chooseLibrary