/*
 *  Author: Christopher Muller
 */

let URLREGEX = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/i;

function IsText(text) {
    if (text == "") {
        //alert("required field");
        return false;
    }
    return true;
}

function IsURL(text) {
    return URLREGEX.test(text);
}

export { IsText, IsURL }
