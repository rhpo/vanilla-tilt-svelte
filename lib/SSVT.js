/*!

    ░█▀▀▀█ ░█▀▀▀█ ░█──░█ ▀▀█▀▀
    ─▀▀▀▄▄ ─▀▀▀▄▄ ─░█░█─ ─░█──
    ░█▄▄▄█ ░█▄▄▄█ ──▀▄▀─ ─░█──  by @rhpo on github


 * SSVT (Svelte Support for Vanilla Tilt)
 * https://github.com/rhpo/vanilla-tilt-svelte
 *
 * Author: Ramy Hadid (@rhpo on github)
 * Author's website: https://www.ramey.ml
 *
 * Copyright (C) 2023 SSVT. All rights reserved.
 * Released under the MIT license
 *
 * Permission is hereby granted, free of charge, to any  person  obtaining  a  copy  of  this  software
 * and associated documentation files (the "Software"), to deal in  the  Software  without  restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:

 * The above copyright notice and this permission  notice shall be included in all copies or substantial
 * portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT  NOT
 * LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
 * NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES  OR  OTHER  LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR  IN  CONNECTION  WITH  THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * Release Date: Thu Jun 22 2023 13:58:44 GMT+0100 (UTC+01:00)
 *
 * #free_palestine  🇵🇸
 * #free_ukraine    🇺🇦
 *
 * ﷽
*/

import VanillaTilt from './vanilla-tilt.js';

const defaultParams = {
    reverse: false,  // reverse the tilt direction
    max: 35,     // max tilt rotation (degrees)
    startX: 0,      // the starting tilt on the X axis, in degrees.
    startY: 0,      // the starting tilt on the Y axis, in degrees.
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1,      // 2 = 200%, 1.5 = 150%, etc..
    speed: 300,    // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be enabled. Can be "x" or "y"
    reset: true,   // If the tilt effect has to be reset on exit.
    "reset-to-start": true,   // Whether the exit reset will go to [0,0] (default) or [startX, startY]
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    glare: false,  // if it should have a "glare" effect
    "max-glare": 1,      // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
    "glare-prerender": false,  // false = VanillaTilt creates the glare elements for you, otherwise
    // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
    "mouse-event-element": null,   // css-selector or link to HTML-element what will be listen mouse events
    gyroscope: true,   // Boolean to enable/disable device orientation detection,
    gyroscopeMinAngleX: -45,    // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;
    gyroscopeMaxAngleX: 45,     // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element;
    gyroscopeMinAngleY: -45,    // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;
    gyroscopeMaxAngleY: 45,     // This is the top limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the bottom border of the element;
}

/**
 * @typedef {{
 *   reverse: boolean,
 *   max: number,
 *   startX: number,
 *   startY: number,
 *   perspective: number,
 *   scale: number,
 *   speed: number,
 *   transition: boolean,
 *   axis: string|null,
 *   reset: boolean,
 *   resetToStart: boolean,
 *   easing: string,
 *   glare: boolean,
 *   maxGlare: number,
 *   glarePrerender: boolean,
 *   mouseEventElement: string|null,
 *   gyroscope: boolean,
 *   gyroscopeMinAngleX: number,
 *   gyroscopeMaxAngleX: number,
 *   gyroscopeMinAngleY: number,
 *   gyroscopeMaxAngleY: number,
 * }} SSVTProps
 */

/**
 * Initializes Vanilla Tilt on a target node with provided settings.
 * @param {Node} node - The target DOM node.
 * @param {SSVTProps} settingsObject - Configuration settings for Vanilla Tilt.
 */
export default function svelteTilt(node, settingsObject) {

    if (!(node instanceof Node)) {
        throw ("Can't initialize VanillaTilt because " + node + " is not a Node.");
    }

    let settings = Object.assign(defaultParams, settingsObject);

    VanillaTilt.init(node, settings);

    return {
    	update(newSettings) {
    		settingsObject = newSettings;
    		VanillaTilt.update();

    	},

    	destroy() {
    		VanillaTilt.destroy();
    	}
    };

}

// Author's website:   www.ramey.ml
// Credits:            Vanilla Tilt JS (https://micku7zu.github.io/vanilla-tilt.js/)

// written by @rhpo with 💓
