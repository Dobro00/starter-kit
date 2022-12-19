sap.ui.define([], function () {
    "use strict";
    return {
        FormatName: function (sFirstName, sLastName) {
            if (sLastName.includes('-')) {
                return sFirstName[0] + "." + sLastName.substring(0, sLastName.indexOf('-'));
            }
            else {
                return sFirstName[0] + "." + sLastName
            }

        }
    }
})