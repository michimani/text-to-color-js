/**
 * This is a simple javascript class for generating color from text.
 */
class TextToColor {
    randStr: string = 'some string';
    rand: number = 1234;

    constructor(rand: number) {
        this.rand = rand;
    }

    /**
     * generate color code hex from string
     * @param  {string} str
     * @return {string}     color code hex
     */
    generateColorHexFromString(str: string): string {
        let rgb: number[] = this.__stringToRgb(str);
        return this.__rgbToHex(rgb);
    }

    /**
     * generate RGB value from string
     * @param  {string}   str
     * @return {number[]}
     */
    __stringToRgb(str: string): number[] {
        var rgb: number[] = [0, 0, 0];
        const len: number = str.length;
        if (len === 0) {
            return rgb;
        }

        const base: number = this.rand + len;
        var ord: number = 0;

        for (let cI = 0; cI < len; cI++) {
            ord += str.charCodeAt(cI);
        }

        const coef_tmp: number[] = [
            Math.round(((ord % 7) / 6) * 100) / 100,
            Math.round(((ord % 11) / 10) * 100) / 100,
            1 + Math.round(((ord % 13) / 12) * 100) / 100
        ];

        var coef: number[] = [0, 0, 0];
        coef[(len % 5) % 3] = coef_tmp[0];
        coef[((len % 5) + 1) % 3] = coef_tmp[1];
        coef[((len % 5) + 2) % 3] = coef_tmp[2];

        for (let nI = 0; nI < 3; nI++) {
            let tmpV: number = Math.round(base * coef[((ord % 7) + nI) % 3] * (1 + this.rand));
            rgb[nI] = tmpV - (255 * Math.floor(tmpV / 255));
        }

        return rgb;
    }

    /**
     * convert RGB to Hex value
     * @param  {number[]} rgb
     * @return {string}       color code hex
     */
    __rgbToHex(rgb: number[]): string {
        var color = '#000000';
        var hex = '#';
        for (let i = 0; i < 3; i++) {
            let h = rgb[i].toString(16);
            if (h.length == 1) {
                h = `0${h}`;
            }
            hex += h;
        }

        if (hex.match(/^#[0-9a-f]{6}$/)) {
            color = hex;
        }

        return color;
    }
}