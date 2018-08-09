"use strict";
/**
 * This class has string and color property
 */
var T2C = /** @class */ (function () {
    function T2C(str, color) {
        this.string = str;
        this.color = color;
        this.html = "<span style=\"color: " + color + "\">" + str + "</span>";
    }
    return T2C;
}());
/**
 * This is a simple javascript class for generating color from text.
 */
var TextToColor = /** @class */ (function () {
    function TextToColor(rand) {
        this.randStr = 'some string';
        this.rand = 1234;
        this.rand = rand;
    }
    /**
     * generate T2C object from string
     * @param  {string} str
     * @return {T2C}    T2C object
     */
    TextToColor.prototype.generateColorHexFromString = function (str) {
        var rgb = this.__stringToRgb(str);
        var hex = this.__rgbToHex(rgb);
        return (new T2C(str, hex));
    };
    /**
     * generate T2C object list from string list
     * @param  {string[]} strList [description]
     * @return {T2C[]}            [description]
     */
    TextToColor.prototype.generateColorHexFromStringList = function (strList) {
        var t2cList = new Array();
        var self = this;
        strList.forEach(function (str) {
            t2cList.push(self.generateColorHexFromString(str));
        });
        return t2cList;
    };
    /**
     * generate RGB value from string
     * @param  {string}   str
     * @return {number[]}
     */
    TextToColor.prototype.__stringToRgb = function (str) {
        var rgb = [0, 0, 0];
        var len = str.length;
        if (len === 0) {
            return rgb;
        }
        var base = this.rand + len;
        var ord = 0;
        for (var cI = 0; cI < len; cI++) {
            ord += str.charCodeAt(cI);
        }
        var coef_tmp = [
            Math.round(((ord % 7) / 6) * 100) / 100,
            Math.round(((ord % 11) / 10) * 100) / 100,
            1 + Math.round(((ord % 13) / 12) * 100) / 100
        ];
        var coef = [0, 0, 0];
        coef[(len % 5) % 3] = coef_tmp[0];
        coef[((len % 5) + 1) % 3] = coef_tmp[1];
        coef[((len % 5) + 2) % 3] = coef_tmp[2];
        for (var nI = 0; nI < 3; nI++) {
            var tmpV = Math.round(base * coef[((ord % 7) + nI) % 3] * (1 + this.rand));
            rgb[nI] = tmpV - (255 * Math.floor(tmpV / 255));
        }
        return rgb;
    };
    /**
     * convert RGB to Hex value
     * @param  {number[]} rgb
     * @return {string}       color code hex
     */
    TextToColor.prototype.__rgbToHex = function (rgb) {
        var color = '#000000';
        var hex = '#';
        for (var i = 0; i < 3; i++) {
            var h = rgb[i].toString(16);
            if (h.length == 1) {
                h = "0" + h;
            }
            hex += h;
        }
        if (hex.match(/^#[0-9a-f]{6}$/)) {
            color = hex;
        }
        return color;
    };
    return TextToColor;
}());
