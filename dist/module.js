/*!
 * # License information
 *
 *     This work uses the following libraries with their licenses attached.
 *
 *     # [EasyMDE](https://github.com/Ionaru/easy-markdown-editor)
 *
 *     ## The MIT License (MIT)
 *
 *     Copyright (c) 2015 Sparksuite, Inc.
 *     Copyright (c) 2017 Jeroen Akkerman.
 *
 *     Permission is hereby granted, free of charge, to any person obtaining a copy
 *     of this software and associated documentation files (the "Software"), to deal
 *     in the Software without restriction, including without limitation the rights
 *     to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *     copies of the Software, and to permit persons to whom the Software is
 *     furnished to do so, subject to the following conditions:
 *
 *     The above copyright notice and this permission notice shall be included in all
 *     copies or substantial portions of the Software.
 *
 *     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *     IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *     AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *     SOFTWARE.
 *     © 2020 GitHub, Inc.
 *
 *     # [Markdown-It](https://github.com/markdown-it/markdown-it)
 *
 *     ## The MIT License (MIT)
 *
 *     Copyright (c) 2014 Vitaly Puzrin, Alex Kocharin.
 *
 *     Permission is hereby granted, free of charge, to any person
 *     obtaining a copy of this software and associated documentation
 *     files (the "Software"), to deal in the Software without
 *     restriction, including without limitation the rights to use,
 *     copy, modify, merge, publish, distribute, sublicense, and/or sell
 *     copies of the Software, and to permit persons to whom the
 *     Software is furnished to do so, subject to the following
 *     conditions:
 *
 *     The above copyright notice and this permission notice shall be
 *     included in all copies or substantial portions of the Software.
 *
 *     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *     EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 *     OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *     NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 *     HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 *     WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 *     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 *     OTHER DEALINGS IN THE SOFTWARE.
 *
 *     # [Codemirror](https://codemirror.net/)
 *
 *     ## The MIT License (MIT)
 *
 *     MIT License
 *
 *     Copyright (C) 2017 by Marijn Haverbeke <marijnh@gmail.com> and others
 *
 *     Permission is hereby granted, free of charge, to any person obtaining a copy
 *     of this software and associated documentation files (the "Software"), to deal
 *     in the Software without restriction, including without limitation the rights
 *     to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *     copies of the Software, and to permit persons to whom the Software is
 *     furnished to do so, subject to the following conditions:
 *
 *     The above copyright notice and this permission notice shall be included in
 *     all copies or substantial portions of the Software.
 *
 *     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *     IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *     AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *     THE SOFTWARE.
 *
 *     # [markdown-it-container](https://github.com/markdown-it/markdown-it-container)
 *
 *     ## The MIT License (MIT)
 *
 *     Copyright (c) 2015 Vitaly Puzrin, Alex Kocharin.
 *
 *     Permission is hereby granted, free of charge, to any person
 *     obtaining a copy of this software and associated documentation
 *     files (the "Software"), to deal in the Software without
 *     restriction, including without limitation the rights to use,
 *     copy, modify, merge, publish, distribute, sublicense, and/or sell
 *     copies of the Software, and to permit persons to whom the
 *     Software is furnished to do so, subject to the following
 *     conditions:
 *
 *     The above copyright notice and this permission notice shall be
 *     included in all copies or substantial portions of the Software.
 *
 *     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *     EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 *     OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *     NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 *     HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 *     WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 *     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 *     OTHER DEALINGS IN THE SOFTWARE.
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/ecr-markdown.scss":
/*!**************************************!*\
  !*** ./src/styles/ecr-markdown.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../static/templates/template.html":
/*!*****************************************!*\
  !*** ../static/templates/template.html ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("");

/***/ }),

/***/ "./src/logger.ts":
/*!***********************!*\
  !*** ./src/logger.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logger": () => (/* binding */ logger),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const logger = (...args) => {
    const [first, ...rest] = args;
    if (typeof first === 'string') {
        console.log(`==ECR: ${first}`, ...rest);
    }
    else {
        console.log('==ECR', ...args);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logger);


/***/ }),

/***/ "./src/misc/index.ts":
/*!***************************!*\
  !*** ./src/misc/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rollNPCTokenHitPoints": () => (/* reexport safe */ _rollNPCTokenHitPoints__WEBPACK_IMPORTED_MODULE_0__.rollNPCTokenHitPoints)
/* harmony export */ });
/* harmony import */ var _rollNPCTokenHitPoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rollNPCTokenHitPoints */ "./src/misc/rollNPCTokenHitPoints.ts");



/***/ }),

/***/ "./src/misc/rollNPCTokenHitPoints.ts":
/*!*******************************************!*\
  !*** ./src/misc/rollNPCTokenHitPoints.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rollNPCTokenHitPoints": () => (/* binding */ rollNPCTokenHitPoints),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logger */ "./src/logger.ts");

const rollNPCTokenHitPoints = async (tokenDoc) => {
    (0,_logger__WEBPACK_IMPORTED_MODULE_0__.logger)('rollNPCTokenHitPoints', tokenDoc);
    const actor = tokenDoc.actor;
    if (!actor) {
        (0,_logger__WEBPACK_IMPORTED_MODULE_0__.logger)('Ignoring actor-less token.');
        return;
    }
    if (actor.type !== 'NPC') {
        (0,_logger__WEBPACK_IMPORTED_MODULE_0__.logger)(`Ignoring actor type "${actor.type}" token.`);
        return;
    }
    const data = actor.data.data;
    const currentHp = data.attributes.hp;
    const shouldRoll = tokenDoc.isLinked
        ? currentHp.max !== null && currentHp.max !== 0
        : currentHp.max === null ||
            currentHp.max === 0 ||
            currentHp.value === currentHp.max;
    if (!shouldRoll) {
        (0,_logger__WEBPACK_IMPORTED_MODULE_0__.logger)(`Ignoring token. (isLinked: ${tokenDoc.isLinked}, hp: ${currentHp}).`);
        return;
    }
    const hitDice = data.attributes.hitDice.value;
    const maxHPRoll = new Roll(hitDice);
    const maxHPRollResult = await maxHPRoll.evaluate({
        async: true,
    });
    let maxHP = maxHPRollResult.total || 0;
    if (maxHP < 1) {
        (0,_logger__WEBPACK_IMPORTED_MODULE_0__.logger)(`Warning, maxHP roll was less than 0 (${maxHPRollResult.total}); using 1.`);
        maxHP = 1;
    }
    data.attributes.hp.value = maxHP;
    data.attributes.hp.max = maxHP;
    tokenDoc.update();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rollNPCTokenHitPoints);


/***/ }),

/***/ "./src/module/helper/TemplatePreloader.ts":
/*!************************************************!*\
  !*** ./src/module/helper/TemplatePreloader.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplatePreloader": () => (/* binding */ TemplatePreloader)
/* harmony export */ });
/* harmony import */ var _static_templates_template_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../static/templates/template.html */ "../static/templates/template.html");

class TemplatePreloader {
    /**
     * Preload a set of templates to compile and cache them for fast access during rendering
     */
    static async preloadHandlebarsTemplates() {
        const templatePaths = ['__ALL_TEMPLATES__'];
        return loadTemplates(templatePaths);
    }
}


/***/ }),

/***/ "./src/vision/lightSources.ts":
/*!************************************!*\
  !*** ./src/vision/lightSources.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lightAnimation": () => (/* binding */ lightAnimation),
/* harmony export */   "lightColors": () => (/* binding */ lightColors),
/* harmony export */   "lightDuration": () => (/* binding */ lightDuration),
/* harmony export */   "lightSource": () => (/* binding */ lightSource),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// How different lights flicker, or don't.
const lightAnimation = {
    none: {
        type: '',
    },
    'open flame': {
        type: 'torch',
        speed: 2,
        intensity: 2,
    },
    'enclosed flame': {
        type: 'torch',
        speed: 4,
        intensity: 1,
    },
};
// The colors of various lighting types.
const lightColors = {
    torchlight: '#9c6d0c',
};
// in minutes
const lightDuration = {
    candle: 360,
    torch: 60,
    'oil lamp': 180,
    'bullseye lantern': 120,
};
const lightSource = {
    none: {
        dim: 0,
        bright: 0,
        lightAnimation: lightAnimation.none,
    },
    candle: {
        dim: 20,
        bright: 5,
        color: lightColors.torchlight,
        alpha: 0.15,
        angle: 360,
        lightAnimation: lightAnimation['open flame'],
    },
    torch: {
        dim: 35,
        bright: 25,
        color: lightColors.torchlight,
        alpha: 0.15,
        angle: 360,
        lightAnimation: lightAnimation['open flame'],
    },
    'oil lamp': {
        dim: 45,
        bright: 15,
        color: lightColors.torchlight,
        alpha: 0.15,
        angle: 360,
        lightAnimation: lightAnimation['enclosed flame'],
    },
    'bullseye lantern': {
        dim: 120,
        bright: 60,
        color: lightColors.torchlight,
        alpha: 0.15,
        angle: 52.5,
        lightAnimation: lightAnimation['enclosed flame'],
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    lightAnimation,
    lightColors,
    lightDuration,
    lightSource,
});


/***/ }),

/***/ "./src/vision/visionTypes.ts":
/*!***********************************!*\
  !*** ./src/vision/visionTypes.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "visionTypes": () => (/* binding */ visionTypes),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const visionTypes = {
    human: {
        description: `Normal human sight without a light source.`,
        data: {
            vision: true,
            dimSight: 1.5,
            brightSight: 0,
        },
    },
    'under-sight': {
        description: `A strange manner of sight without light.`,
        data: {
            vision: true,
            dimSight: 60,
            brightSight: 45,
        },
    },
    unsighted: {
        description: `A lack of vision.`,
        data: {
            vision: false,
            dimSight: 0,
            brightSight: 0,
        },
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (visionTypes);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_helper_TemplatePreloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/helper/TemplatePreloader */ "./src/module/helper/TemplatePreloader.ts");
/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc */ "./src/misc/index.ts");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger */ "./src/logger.ts");
/* harmony import */ var _vision_lightSources__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vision/lightSources */ "./src/vision/lightSources.ts");
/* harmony import */ var _vision_visionTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vision/visionTypes */ "./src/vision/visionTypes.ts");
/* harmony import */ var _styles_ecr_markdown_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/ecr-markdown.scss */ "./src/styles/ecr-markdown.scss");
/* eslint-disable @typescript-eslint/no-namespace */
console.log('LOADING ECR INDEX');





// import './MEME';

Hooks.once('init', async () => {
    (0,_logger__WEBPACK_IMPORTED_MODULE_2__.logger)('Init hook called.');
});
Hooks.once('ready', async () => {
    (0,_logger__WEBPACK_IMPORTED_MODULE_2__.logger)('Ready hook called.');
    const g = game;
    if (!g) {
        throw new Error('game global not available!');
    }
    // tell moulinette where the assets may be found
    // @ts-ignore
    if (g.moulinette) {
        const sources = [
            {
                type: 'images',
                publisher: 'Various',
                pack: 'Various',
                source: 'data',
                path: 'modules/ecr/images/unknown',
            },
            {
                type: 'images',
                publisher: 'basilisk-asterisk',
                pack: '0-level',
                source: 'data',
                path: 'modules/ecr/images/basilisk-asterisk/0-level',
            },
            {
                type: 'images',
                publisher: 'basilisk-asterisk',
                pack: 'A Trip to Dolm',
                source: 'data',
                path: 'modules/ecr/images/basilisk-asterisk/a-trip-to-dolm',
            },
            {
                type: 'images',
                publisher: 'basilisk-asterisk',
                pack: 'Demonic Runes',
                source: 'data',
                path: 'modules/ecr/images/basilisk-asterisk/demonic-runes',
            },
            {
                type: 'images',
                publisher: 'basilisk-asterisk',
                pack: 'Elzemon and the Blood-Drinking Box',
                source: 'data',
                path: 'modules/ecr/images/basilisk-asterisk/elzemon-and-the-blood-drinking-box',
            },
            {
                type: 'images',
                publisher: 'basilisk-asterisk',
                pack: 'Heraldry',
                source: 'data',
                path: 'modules/ecr/images/basilisk-asterisk/heraldry',
            },
            {
                type: 'images',
                publisher: 'basilisk-asterisk',
                pack: 'Mama Hungry',
                source: 'data',
                path: 'modules/ecr/images/basilisk-asterisk/mama-hungry',
            },
            {
                type: 'images',
                publisher: 'basilisk-asterisk',
                pack: 'Party Poopers',
                source: 'data',
                path: 'modules/ecr/images/basilisk-asterisk/party-poopers',
            },
            {
                type: 'images',
                publisher: 'basilisk-asterisk',
                pack: 'Sailors on the Starless Sea',
                source: 'data',
                path: 'modules/ecr/images/basilisk-asterisk/sailors-on-the-starless-sea',
            },
            {
                type: 'images',
                publisher: 'basilisk-asterisk',
                pack: 'Utility',
                source: 'data',
                path: 'modules/ecr/images/basilisk-asterisk/utility',
            },
            {
                type: 'images',
                publisher: 'basilisk-asterisk',
                pack: 'Where the White Things Are',
                source: 'data',
                path: 'modules/ecr/images/basilisk-asterisk/where-the-white-things-are',
            },
        ];
        // @ts-ignore
        game.moulinette.sources.push(...sources);
        (0,_logger__WEBPACK_IMPORTED_MODULE_2__.logger)('Sources updated');
    }
    g.ECR = {
        rollNPCTokenHitPoints: _misc__WEBPACK_IMPORTED_MODULE_1__.rollNPCTokenHitPoints,
        lightSources: _vision_lightSources__WEBPACK_IMPORTED_MODULE_3__["default"],
        visionTypes: _vision_visionTypes__WEBPACK_IMPORTED_MODULE_4__["default"],
    };
});
Hooks.on('createToken', _misc__WEBPACK_IMPORTED_MODULE_1__.rollNPCTokenHitPoints);
if (true) {
    if (false) {}
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLGlFQUFlLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztBQ0FWLE1BQU0sTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFXLEVBQUUsRUFBRTtJQUNyQyxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQzlCLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxLQUFLLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0tBQzNDO1NBQU07UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0tBQ2pDO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDVDBDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0E3QjtBQUU1QixNQUFNLHFCQUFxQixHQUFHLEtBQUssRUFBRSxRQUF1QixFQUFFLEVBQUU7SUFDbkUsK0NBQU0sQ0FBQyx1QkFBdUIsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMxQyxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO0lBRTdCLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDUiwrQ0FBTSxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDckMsT0FBTztLQUNWO0lBRUQsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLEtBQUssRUFBRTtRQUN0QiwrQ0FBTSxDQUFDLHdCQUF3QixLQUFLLENBQUMsSUFBSSxVQUFVLENBQUMsQ0FBQztRQUNyRCxPQUFPO0tBQ1Y7SUFFRCxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQXVCLENBQUM7SUFFaEQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7SUFFckMsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLFFBQVE7UUFDaEMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssSUFBSSxJQUFJLFNBQVMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUMvQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxJQUFJO1lBQ3RCLFNBQVMsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUNuQixTQUFTLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxHQUFHLENBQUM7SUFFeEMsSUFBSSxDQUFDLFVBQVUsRUFBRTtRQUNiLCtDQUFNLENBQ0YsOEJBQThCLFFBQVEsQ0FBQyxRQUFRLFNBQVMsU0FBUyxJQUFJLENBQ3hFLENBQUM7UUFDRixPQUFPO0tBQ1Y7SUFFRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDOUMsTUFBTSxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEMsTUFBTSxlQUFlLEdBQUcsTUFBTSxTQUFTLENBQUMsUUFBUSxDQUFDO1FBQzdDLEtBQUssRUFBRSxJQUFJO0tBQ2QsQ0FBQyxDQUFDO0lBQ0gsSUFBSSxLQUFLLEdBQUcsZUFBZSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7SUFFdkMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1FBQ1gsK0NBQU0sQ0FDRix3Q0FBd0MsZUFBZSxDQUFDLEtBQUssYUFBYSxDQUM3RSxDQUFDO1FBQ0YsS0FBSyxHQUFHLENBQUMsQ0FBQztLQUNiO0lBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0lBQy9CLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUN0QixDQUFDLENBQUM7QUFFRixpRUFBZSxxQkFBcUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEZTtBQUU3QyxNQUFNLGlCQUFpQjtJQUMxQjs7T0FFRztJQUNILE1BQU0sQ0FBQyxLQUFLLENBQUMsMEJBQTBCO1FBQ25DLE1BQU0sYUFBYSxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUM1QyxPQUFPLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN4QyxDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWRCwwQ0FBMEM7QUFDbkMsTUFBTSxjQUFjLEdBQUc7SUFDMUIsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFLEVBQUU7S0FDWDtJQUNELFlBQVksRUFBRTtRQUNWLElBQUksRUFBRSxPQUFPO1FBQ2IsS0FBSyxFQUFFLENBQUM7UUFDUixTQUFTLEVBQUUsQ0FBQztLQUNmO0lBQ0QsZ0JBQWdCLEVBQUU7UUFDZCxJQUFJLEVBQUUsT0FBTztRQUNiLEtBQUssRUFBRSxDQUFDO1FBQ1IsU0FBUyxFQUFFLENBQUM7S0FDZjtDQUNLLENBQUM7QUFFWCx3Q0FBd0M7QUFDakMsTUFBTSxXQUFXLEdBQUc7SUFDdkIsVUFBVSxFQUFFLFNBQVM7Q0FDeEIsQ0FBQztBQUVGLGFBQWE7QUFDTixNQUFNLGFBQWEsR0FBRztJQUN6QixNQUFNLEVBQUUsR0FBRztJQUNYLEtBQUssRUFBRSxFQUFFO0lBQ1QsVUFBVSxFQUFFLEdBQUc7SUFDZixrQkFBa0IsRUFBRSxHQUFHO0NBQzFCLENBQUM7QUFFSyxNQUFNLFdBQVcsR0FBRztJQUN2QixJQUFJLEVBQUU7UUFDRixHQUFHLEVBQUUsQ0FBQztRQUNOLE1BQU0sRUFBRSxDQUFDO1FBQ1QsY0FBYyxFQUFFLGNBQWMsQ0FBQyxJQUFJO0tBQ3RDO0lBQ0QsTUFBTSxFQUFFO1FBQ0osR0FBRyxFQUFFLEVBQUU7UUFDUCxNQUFNLEVBQUUsQ0FBQztRQUNULEtBQUssRUFBRSxXQUFXLENBQUMsVUFBVTtRQUM3QixLQUFLLEVBQUUsSUFBSTtRQUNYLEtBQUssRUFBRSxHQUFHO1FBQ1YsY0FBYyxFQUFFLGNBQWMsQ0FBQyxZQUFZLENBQUM7S0FDL0M7SUFDRCxLQUFLLEVBQUU7UUFDSCxHQUFHLEVBQUUsRUFBRTtRQUNQLE1BQU0sRUFBRSxFQUFFO1FBQ1YsS0FBSyxFQUFFLFdBQVcsQ0FBQyxVQUFVO1FBQzdCLEtBQUssRUFBRSxJQUFJO1FBQ1gsS0FBSyxFQUFFLEdBQUc7UUFDVixjQUFjLEVBQUUsY0FBYyxDQUFDLFlBQVksQ0FBQztLQUMvQztJQUNELFVBQVUsRUFBRTtRQUNSLEdBQUcsRUFBRSxFQUFFO1FBQ1AsTUFBTSxFQUFFLEVBQUU7UUFDVixLQUFLLEVBQUUsV0FBVyxDQUFDLFVBQVU7UUFDN0IsS0FBSyxFQUFFLElBQUk7UUFDWCxLQUFLLEVBQUUsR0FBRztRQUNWLGNBQWMsRUFBRSxjQUFjLENBQUMsZ0JBQWdCLENBQUM7S0FDbkQ7SUFDRCxrQkFBa0IsRUFBRTtRQUNoQixHQUFHLEVBQUUsR0FBRztRQUNSLE1BQU0sRUFBRSxFQUFFO1FBQ1YsS0FBSyxFQUFFLFdBQVcsQ0FBQyxVQUFVO1FBQzdCLEtBQUssRUFBRSxJQUFJO1FBQ1gsS0FBSyxFQUFFLElBQUk7UUFDWCxjQUFjLEVBQUUsY0FBYyxDQUFDLGdCQUFnQixDQUFDO0tBQ25EO0NBQ0ssQ0FBQztBQUVYLGlFQUFlO0lBQ1gsY0FBYztJQUNkLFdBQVc7SUFDWCxhQUFhO0lBQ2IsV0FBVztDQUNkLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRUssTUFBTSxXQUFXLEdBQUc7SUFDdkIsS0FBSyxFQUFFO1FBQ0gsV0FBVyxFQUFFLDRDQUE0QztRQUN6RCxJQUFJLEVBQUU7WUFDRixNQUFNLEVBQUUsSUFBSTtZQUNaLFFBQVEsRUFBRSxHQUFHO1lBQ2IsV0FBVyxFQUFFLENBQUM7U0FDakI7S0FDSjtJQUNELGFBQWEsRUFBRTtRQUNYLFdBQVcsRUFBRSwwQ0FBMEM7UUFDdkQsSUFBSSxFQUFFO1lBQ0YsTUFBTSxFQUFFLElBQUk7WUFDWixRQUFRLEVBQUUsRUFBRTtZQUNaLFdBQVcsRUFBRSxFQUFFO1NBQ2xCO0tBQ0o7SUFDRCxTQUFTLEVBQUU7UUFDUCxXQUFXLEVBQUUsbUJBQW1CO1FBQ2hDLElBQUksRUFBRTtZQUNGLE1BQU0sRUFBRSxLQUFLO1lBQ2IsUUFBUSxFQUFFLENBQUM7WUFDWCxXQUFXLEVBQUUsQ0FBQztTQUNqQjtLQUNKO0NBQ0ssQ0FBQztBQUVYLGlFQUFlLFdBQVcsRUFBQzs7Ozs7OztVQzNCM0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkEsb0RBQW9EO0FBRXBELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUVxQztBQUN2QjtBQUNiO0FBRWU7QUFDRjtBQUUvQyxtQkFBbUI7QUFDaUI7QUFFcEMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxJQUFJLEVBQUU7SUFDMUIsK0NBQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ2hDLENBQUMsQ0FBQyxDQUFDO0FBRUgsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUU7SUFDM0IsK0NBQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBRTdCLE1BQU0sQ0FBQyxHQUFTLElBQVksQ0FBQztJQUU3QixJQUFJLENBQUMsQ0FBQyxFQUFFO1FBQ0osTUFBTSxJQUFJLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0tBQ2pEO0lBQ0QsZ0RBQWdEO0lBRWhELGFBQWE7SUFDYixJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUU7UUFDZCxNQUFNLE9BQU8sR0FBRztZQUNaO2dCQUNJLElBQUksRUFBRSxRQUFRO2dCQUNkLFNBQVMsRUFBRSxTQUFTO2dCQUNwQixJQUFJLEVBQUUsU0FBUztnQkFDZixNQUFNLEVBQUUsTUFBTTtnQkFDZCxJQUFJLEVBQUUsNEJBQTRCO2FBQ3JDO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsU0FBUyxFQUFFLG1CQUFtQjtnQkFDOUIsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsSUFBSSxFQUFFLDhDQUE4QzthQUN2RDtZQUNEO2dCQUNJLElBQUksRUFBRSxRQUFRO2dCQUNkLFNBQVMsRUFBRSxtQkFBbUI7Z0JBQzlCLElBQUksRUFBRSxnQkFBZ0I7Z0JBQ3RCLE1BQU0sRUFBRSxNQUFNO2dCQUNkLElBQUksRUFBRSxxREFBcUQ7YUFDOUQ7WUFDRDtnQkFDSSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxTQUFTLEVBQUUsbUJBQW1CO2dCQUM5QixJQUFJLEVBQUUsZUFBZTtnQkFDckIsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsSUFBSSxFQUFFLG9EQUFvRDthQUM3RDtZQUNEO2dCQUNJLElBQUksRUFBRSxRQUFRO2dCQUNkLFNBQVMsRUFBRSxtQkFBbUI7Z0JBQzlCLElBQUksRUFBRSxvQ0FBb0M7Z0JBQzFDLE1BQU0sRUFBRSxNQUFNO2dCQUNkLElBQUksRUFBRSx5RUFBeUU7YUFDbEY7WUFDRDtnQkFDSSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxTQUFTLEVBQUUsbUJBQW1CO2dCQUM5QixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsSUFBSSxFQUFFLCtDQUErQzthQUN4RDtZQUNEO2dCQUNJLElBQUksRUFBRSxRQUFRO2dCQUNkLFNBQVMsRUFBRSxtQkFBbUI7Z0JBQzlCLElBQUksRUFBRSxhQUFhO2dCQUNuQixNQUFNLEVBQUUsTUFBTTtnQkFDZCxJQUFJLEVBQUUsa0RBQWtEO2FBQzNEO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsU0FBUyxFQUFFLG1CQUFtQjtnQkFDOUIsSUFBSSxFQUFFLGVBQWU7Z0JBQ3JCLE1BQU0sRUFBRSxNQUFNO2dCQUNkLElBQUksRUFBRSxvREFBb0Q7YUFDN0Q7WUFDRDtnQkFDSSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxTQUFTLEVBQUUsbUJBQW1CO2dCQUM5QixJQUFJLEVBQUUsNkJBQTZCO2dCQUNuQyxNQUFNLEVBQUUsTUFBTTtnQkFDZCxJQUFJLEVBQUUsa0VBQWtFO2FBQzNFO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsU0FBUyxFQUFFLG1CQUFtQjtnQkFDOUIsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsSUFBSSxFQUFFLDhDQUE4QzthQUN2RDtZQUNEO2dCQUNJLElBQUksRUFBRSxRQUFRO2dCQUNkLFNBQVMsRUFBRSxtQkFBbUI7Z0JBQzlCLElBQUksRUFBRSw0QkFBNEI7Z0JBQ2xDLE1BQU0sRUFBRSxNQUFNO2dCQUNkLElBQUksRUFBRSxpRUFBaUU7YUFDMUU7U0FDSixDQUFDO1FBQ0YsYUFBYTtRQUNiLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBRXpDLCtDQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztLQUM3QjtJQUVELENBQUMsQ0FBQyxHQUFHLEdBQUc7UUFDSixxQkFBcUI7UUFDckIsWUFBWTtRQUNaLFdBQVc7S0FDZCxDQUFDO0FBQ04sQ0FBQyxDQUFDLENBQUM7QUFFSCxLQUFLLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSx3REFBcUIsQ0FBQyxDQUFDO0FBRS9DLElBQUksSUFBc0MsRUFBRTtJQUN4QyxJQUFJLEtBQVUsRUFBRSxFQTRCZjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9lY3ItbWFya2Rvd24uc2Nzcz9jZDdhIiwid2VicGFjazovLy8uLi9zdGF0aWMvdGVtcGxhdGVzL3RlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWlzYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWlzYy9yb2xsTlBDVG9rZW5IaXRQb2ludHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZS9oZWxwZXIvVGVtcGxhdGVQcmVsb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Zpc2lvbi9saWdodFNvdXJjZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Zpc2lvbi92aXNpb25UeXBlcy50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGRlZmF1bHQgXCJcIjsiLCJleHBvcnQgY29uc3QgbG9nZ2VyID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3QgW2ZpcnN0LCAuLi5yZXN0XSA9IGFyZ3M7XG4gICAgaWYgKHR5cGVvZiBmaXJzdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc29sZS5sb2coYD09RUNSOiAke2ZpcnN0fWAsIC4uLnJlc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCc9PUVDUicsIC4uLmFyZ3MpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2dlcjtcbiIsImV4cG9ydCB7IHJvbGxOUENUb2tlbkhpdFBvaW50cyB9IGZyb20gJy4vcm9sbE5QQ1Rva2VuSGl0UG9pbnRzJztcbiIsImltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4uL2xvZ2dlcic7XG5cbmV4cG9ydCBjb25zdCByb2xsTlBDVG9rZW5IaXRQb2ludHMgPSBhc3luYyAodG9rZW5Eb2M6IFRva2VuRG9jdW1lbnQpID0+IHtcbiAgICBsb2dnZXIoJ3JvbGxOUENUb2tlbkhpdFBvaW50cycsIHRva2VuRG9jKTtcbiAgICBjb25zdCBhY3RvciA9IHRva2VuRG9jLmFjdG9yO1xuXG4gICAgaWYgKCFhY3Rvcikge1xuICAgICAgICBsb2dnZXIoJ0lnbm9yaW5nIGFjdG9yLWxlc3MgdG9rZW4uJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoYWN0b3IudHlwZSAhPT0gJ05QQycpIHtcbiAgICAgICAgbG9nZ2VyKGBJZ25vcmluZyBhY3RvciB0eXBlIFwiJHthY3Rvci50eXBlfVwiIHRva2VuLmApO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IGFjdG9yLmRhdGEuZGF0YSBhcyBEQ0NOUENBY3RvckRhdGE7XG5cbiAgICBjb25zdCBjdXJyZW50SHAgPSBkYXRhLmF0dHJpYnV0ZXMuaHA7XG5cbiAgICBjb25zdCBzaG91bGRSb2xsID0gdG9rZW5Eb2MuaXNMaW5rZWRcbiAgICAgICAgPyBjdXJyZW50SHAubWF4ICE9PSBudWxsICYmIGN1cnJlbnRIcC5tYXggIT09IDBcbiAgICAgICAgOiBjdXJyZW50SHAubWF4ID09PSBudWxsIHx8XG4gICAgICAgICAgY3VycmVudEhwLm1heCA9PT0gMCB8fFxuICAgICAgICAgIGN1cnJlbnRIcC52YWx1ZSA9PT0gY3VycmVudEhwLm1heDtcblxuICAgIGlmICghc2hvdWxkUm9sbCkge1xuICAgICAgICBsb2dnZXIoXG4gICAgICAgICAgICBgSWdub3JpbmcgdG9rZW4uIChpc0xpbmtlZDogJHt0b2tlbkRvYy5pc0xpbmtlZH0sIGhwOiAke2N1cnJlbnRIcH0pLmBcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGhpdERpY2UgPSBkYXRhLmF0dHJpYnV0ZXMuaGl0RGljZS52YWx1ZTtcbiAgICBjb25zdCBtYXhIUFJvbGwgPSBuZXcgUm9sbChoaXREaWNlKTtcbiAgICBjb25zdCBtYXhIUFJvbGxSZXN1bHQgPSBhd2FpdCBtYXhIUFJvbGwuZXZhbHVhdGUoe1xuICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICB9KTtcbiAgICBsZXQgbWF4SFAgPSBtYXhIUFJvbGxSZXN1bHQudG90YWwgfHwgMDtcblxuICAgIGlmIChtYXhIUCA8IDEpIHtcbiAgICAgICAgbG9nZ2VyKFxuICAgICAgICAgICAgYFdhcm5pbmcsIG1heEhQIHJvbGwgd2FzIGxlc3MgdGhhbiAwICgke21heEhQUm9sbFJlc3VsdC50b3RhbH0pOyB1c2luZyAxLmBcbiAgICAgICAgKTtcbiAgICAgICAgbWF4SFAgPSAxO1xuICAgIH1cblxuICAgIGRhdGEuYXR0cmlidXRlcy5ocC52YWx1ZSA9IG1heEhQO1xuICAgIGRhdGEuYXR0cmlidXRlcy5ocC5tYXggPSBtYXhIUDtcbiAgICB0b2tlbkRvYy51cGRhdGUoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJvbGxOUENUb2tlbkhpdFBvaW50cztcbiIsImltcG9ydCAnLi4vLi4vLi4vLi4vc3RhdGljL3RlbXBsYXRlcy90ZW1wbGF0ZS5odG1sJztcblxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlUHJlbG9hZGVyIHtcbiAgICAvKipcbiAgICAgKiBQcmVsb2FkIGEgc2V0IG9mIHRlbXBsYXRlcyB0byBjb21waWxlIGFuZCBjYWNoZSB0aGVtIGZvciBmYXN0IGFjY2VzcyBkdXJpbmcgcmVuZGVyaW5nXG4gICAgICovXG4gICAgc3RhdGljIGFzeW5jIHByZWxvYWRIYW5kbGViYXJzVGVtcGxhdGVzKCkge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZVBhdGhzID0gWydfX0FMTF9URU1QTEFURVNfXyddO1xuICAgICAgICByZXR1cm4gbG9hZFRlbXBsYXRlcyh0ZW1wbGF0ZVBhdGhzKTtcbiAgICB9XG59XG4iLCIvLyBIb3cgZGlmZmVyZW50IGxpZ2h0cyBmbGlja2VyLCBvciBkb24ndC5cbmV4cG9ydCBjb25zdCBsaWdodEFuaW1hdGlvbiA9IHtcbiAgICBub25lOiB7XG4gICAgICAgIHR5cGU6ICcnLFxuICAgIH0sXG4gICAgJ29wZW4gZmxhbWUnOiB7XG4gICAgICAgIHR5cGU6ICd0b3JjaCcsXG4gICAgICAgIHNwZWVkOiAyLFxuICAgICAgICBpbnRlbnNpdHk6IDIsXG4gICAgfSxcbiAgICAnZW5jbG9zZWQgZmxhbWUnOiB7XG4gICAgICAgIHR5cGU6ICd0b3JjaCcsXG4gICAgICAgIHNwZWVkOiA0LFxuICAgICAgICBpbnRlbnNpdHk6IDEsXG4gICAgfSxcbn0gYXMgY29uc3Q7XG5cbi8vIFRoZSBjb2xvcnMgb2YgdmFyaW91cyBsaWdodGluZyB0eXBlcy5cbmV4cG9ydCBjb25zdCBsaWdodENvbG9ycyA9IHtcbiAgICB0b3JjaGxpZ2h0OiAnIzljNmQwYycsXG59O1xuXG4vLyBpbiBtaW51dGVzXG5leHBvcnQgY29uc3QgbGlnaHREdXJhdGlvbiA9IHtcbiAgICBjYW5kbGU6IDM2MCxcbiAgICB0b3JjaDogNjAsXG4gICAgJ29pbCBsYW1wJzogMTgwLFxuICAgICdidWxsc2V5ZSBsYW50ZXJuJzogMTIwLFxufTtcblxuZXhwb3J0IGNvbnN0IGxpZ2h0U291cmNlID0ge1xuICAgIG5vbmU6IHtcbiAgICAgICAgZGltOiAwLFxuICAgICAgICBicmlnaHQ6IDAsXG4gICAgICAgIGxpZ2h0QW5pbWF0aW9uOiBsaWdodEFuaW1hdGlvbi5ub25lLFxuICAgIH0sXG4gICAgY2FuZGxlOiB7XG4gICAgICAgIGRpbTogMjAsXG4gICAgICAgIGJyaWdodDogNSxcbiAgICAgICAgY29sb3I6IGxpZ2h0Q29sb3JzLnRvcmNobGlnaHQsXG4gICAgICAgIGFscGhhOiAwLjE1LFxuICAgICAgICBhbmdsZTogMzYwLFxuICAgICAgICBsaWdodEFuaW1hdGlvbjogbGlnaHRBbmltYXRpb25bJ29wZW4gZmxhbWUnXSxcbiAgICB9LFxuICAgIHRvcmNoOiB7XG4gICAgICAgIGRpbTogMzUsXG4gICAgICAgIGJyaWdodDogMjUsXG4gICAgICAgIGNvbG9yOiBsaWdodENvbG9ycy50b3JjaGxpZ2h0LFxuICAgICAgICBhbHBoYTogMC4xNSxcbiAgICAgICAgYW5nbGU6IDM2MCxcbiAgICAgICAgbGlnaHRBbmltYXRpb246IGxpZ2h0QW5pbWF0aW9uWydvcGVuIGZsYW1lJ10sXG4gICAgfSxcbiAgICAnb2lsIGxhbXAnOiB7XG4gICAgICAgIGRpbTogNDUsXG4gICAgICAgIGJyaWdodDogMTUsXG4gICAgICAgIGNvbG9yOiBsaWdodENvbG9ycy50b3JjaGxpZ2h0LFxuICAgICAgICBhbHBoYTogMC4xNSxcbiAgICAgICAgYW5nbGU6IDM2MCxcbiAgICAgICAgbGlnaHRBbmltYXRpb246IGxpZ2h0QW5pbWF0aW9uWydlbmNsb3NlZCBmbGFtZSddLFxuICAgIH0sXG4gICAgJ2J1bGxzZXllIGxhbnRlcm4nOiB7XG4gICAgICAgIGRpbTogMTIwLFxuICAgICAgICBicmlnaHQ6IDYwLFxuICAgICAgICBjb2xvcjogbGlnaHRDb2xvcnMudG9yY2hsaWdodCxcbiAgICAgICAgYWxwaGE6IDAuMTUsXG4gICAgICAgIGFuZ2xlOiA1Mi41LFxuICAgICAgICBsaWdodEFuaW1hdGlvbjogbGlnaHRBbmltYXRpb25bJ2VuY2xvc2VkIGZsYW1lJ10sXG4gICAgfSxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBsaWdodEFuaW1hdGlvbixcbiAgICBsaWdodENvbG9ycyxcbiAgICBsaWdodER1cmF0aW9uLFxuICAgIGxpZ2h0U291cmNlLFxufTtcbiIsImV4cG9ydCBjb25zdCB2aXNpb25UeXBlcyA9IHtcbiAgICBodW1hbjoge1xuICAgICAgICBkZXNjcmlwdGlvbjogYE5vcm1hbCBodW1hbiBzaWdodCB3aXRob3V0IGEgbGlnaHQgc291cmNlLmAsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHZpc2lvbjogdHJ1ZSxcbiAgICAgICAgICAgIGRpbVNpZ2h0OiAxLjUsXG4gICAgICAgICAgICBicmlnaHRTaWdodDogMCxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgICd1bmRlci1zaWdodCc6IHtcbiAgICAgICAgZGVzY3JpcHRpb246IGBBIHN0cmFuZ2UgbWFubmVyIG9mIHNpZ2h0IHdpdGhvdXQgbGlnaHQuYCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgdmlzaW9uOiB0cnVlLFxuICAgICAgICAgICAgZGltU2lnaHQ6IDYwLFxuICAgICAgICAgICAgYnJpZ2h0U2lnaHQ6IDQ1LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgdW5zaWdodGVkOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBgQSBsYWNrIG9mIHZpc2lvbi5gLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB2aXNpb246IGZhbHNlLFxuICAgICAgICAgICAgZGltU2lnaHQ6IDAsXG4gICAgICAgICAgICBicmlnaHRTaWdodDogMCxcbiAgICAgICAgfSxcbiAgICB9LFxufSBhcyBjb25zdDtcblxuZXhwb3J0IGRlZmF1bHQgdmlzaW9uVHlwZXM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1uYW1lc3BhY2UgKi9cblxuY29uc29sZS5sb2coJ0xPQURJTkcgRUNSIElOREVYJyk7XG5cbmltcG9ydCB7IFRlbXBsYXRlUHJlbG9hZGVyIH0gZnJvbSAnLi9tb2R1bGUvaGVscGVyL1RlbXBsYXRlUHJlbG9hZGVyJztcbmltcG9ydCB7IHJvbGxOUENUb2tlbkhpdFBvaW50cyB9IGZyb20gJy4vbWlzYyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuL2xvZ2dlcic7XG5cbmltcG9ydCBsaWdodFNvdXJjZXMgZnJvbSAnLi92aXNpb24vbGlnaHRTb3VyY2VzJztcbmltcG9ydCB2aXNpb25UeXBlcyBmcm9tICcuL3Zpc2lvbi92aXNpb25UeXBlcyc7XG5cbi8vIGltcG9ydCAnLi9NRU1FJztcbmltcG9ydCAnLi9zdHlsZXMvZWNyLW1hcmtkb3duLnNjc3MnO1xuXG5Ib29rcy5vbmNlKCdpbml0JywgYXN5bmMgKCkgPT4ge1xuICAgIGxvZ2dlcignSW5pdCBob29rIGNhbGxlZC4nKTtcbn0pO1xuXG5Ib29rcy5vbmNlKCdyZWFkeScsIGFzeW5jICgpID0+IHtcbiAgICBsb2dnZXIoJ1JlYWR5IGhvb2sgY2FsbGVkLicpO1xuXG4gICAgY29uc3QgZzogR2FtZSA9IGdhbWUgYXMgR2FtZTtcblxuICAgIGlmICghZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dhbWUgZ2xvYmFsIG5vdCBhdmFpbGFibGUhJyk7XG4gICAgfVxuICAgIC8vIHRlbGwgbW91bGluZXR0ZSB3aGVyZSB0aGUgYXNzZXRzIG1heSBiZSBmb3VuZFxuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGlmIChnLm1vdWxpbmV0dGUpIHtcbiAgICAgICAgY29uc3Qgc291cmNlcyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2VzJyxcbiAgICAgICAgICAgICAgICBwdWJsaXNoZXI6ICdWYXJpb3VzJyxcbiAgICAgICAgICAgICAgICBwYWNrOiAnVmFyaW91cycsXG4gICAgICAgICAgICAgICAgc291cmNlOiAnZGF0YScsXG4gICAgICAgICAgICAgICAgcGF0aDogJ21vZHVsZXMvZWNyL2ltYWdlcy91bmtub3duJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2ltYWdlcycsXG4gICAgICAgICAgICAgICAgcHVibGlzaGVyOiAnYmFzaWxpc2stYXN0ZXJpc2snLFxuICAgICAgICAgICAgICAgIHBhY2s6ICcwLWxldmVsJyxcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICdkYXRhJyxcbiAgICAgICAgICAgICAgICBwYXRoOiAnbW9kdWxlcy9lY3IvaW1hZ2VzL2Jhc2lsaXNrLWFzdGVyaXNrLzAtbGV2ZWwnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2VzJyxcbiAgICAgICAgICAgICAgICBwdWJsaXNoZXI6ICdiYXNpbGlzay1hc3RlcmlzaycsXG4gICAgICAgICAgICAgICAgcGFjazogJ0EgVHJpcCB0byBEb2xtJyxcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICdkYXRhJyxcbiAgICAgICAgICAgICAgICBwYXRoOiAnbW9kdWxlcy9lY3IvaW1hZ2VzL2Jhc2lsaXNrLWFzdGVyaXNrL2EtdHJpcC10by1kb2xtJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2ltYWdlcycsXG4gICAgICAgICAgICAgICAgcHVibGlzaGVyOiAnYmFzaWxpc2stYXN0ZXJpc2snLFxuICAgICAgICAgICAgICAgIHBhY2s6ICdEZW1vbmljIFJ1bmVzJyxcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICdkYXRhJyxcbiAgICAgICAgICAgICAgICBwYXRoOiAnbW9kdWxlcy9lY3IvaW1hZ2VzL2Jhc2lsaXNrLWFzdGVyaXNrL2RlbW9uaWMtcnVuZXMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2VzJyxcbiAgICAgICAgICAgICAgICBwdWJsaXNoZXI6ICdiYXNpbGlzay1hc3RlcmlzaycsXG4gICAgICAgICAgICAgICAgcGFjazogJ0VsemVtb24gYW5kIHRoZSBCbG9vZC1Ecmlua2luZyBCb3gnLFxuICAgICAgICAgICAgICAgIHNvdXJjZTogJ2RhdGEnLFxuICAgICAgICAgICAgICAgIHBhdGg6ICdtb2R1bGVzL2Vjci9pbWFnZXMvYmFzaWxpc2stYXN0ZXJpc2svZWx6ZW1vbi1hbmQtdGhlLWJsb29kLWRyaW5raW5nLWJveCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdpbWFnZXMnLFxuICAgICAgICAgICAgICAgIHB1Ymxpc2hlcjogJ2Jhc2lsaXNrLWFzdGVyaXNrJyxcbiAgICAgICAgICAgICAgICBwYWNrOiAnSGVyYWxkcnknLFxuICAgICAgICAgICAgICAgIHNvdXJjZTogJ2RhdGEnLFxuICAgICAgICAgICAgICAgIHBhdGg6ICdtb2R1bGVzL2Vjci9pbWFnZXMvYmFzaWxpc2stYXN0ZXJpc2svaGVyYWxkcnknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2VzJyxcbiAgICAgICAgICAgICAgICBwdWJsaXNoZXI6ICdiYXNpbGlzay1hc3RlcmlzaycsXG4gICAgICAgICAgICAgICAgcGFjazogJ01hbWEgSHVuZ3J5JyxcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICdkYXRhJyxcbiAgICAgICAgICAgICAgICBwYXRoOiAnbW9kdWxlcy9lY3IvaW1hZ2VzL2Jhc2lsaXNrLWFzdGVyaXNrL21hbWEtaHVuZ3J5JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2ltYWdlcycsXG4gICAgICAgICAgICAgICAgcHVibGlzaGVyOiAnYmFzaWxpc2stYXN0ZXJpc2snLFxuICAgICAgICAgICAgICAgIHBhY2s6ICdQYXJ0eSBQb29wZXJzJyxcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICdkYXRhJyxcbiAgICAgICAgICAgICAgICBwYXRoOiAnbW9kdWxlcy9lY3IvaW1hZ2VzL2Jhc2lsaXNrLWFzdGVyaXNrL3BhcnR5LXBvb3BlcnMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2VzJyxcbiAgICAgICAgICAgICAgICBwdWJsaXNoZXI6ICdiYXNpbGlzay1hc3RlcmlzaycsXG4gICAgICAgICAgICAgICAgcGFjazogJ1NhaWxvcnMgb24gdGhlIFN0YXJsZXNzIFNlYScsXG4gICAgICAgICAgICAgICAgc291cmNlOiAnZGF0YScsXG4gICAgICAgICAgICAgICAgcGF0aDogJ21vZHVsZXMvZWNyL2ltYWdlcy9iYXNpbGlzay1hc3Rlcmlzay9zYWlsb3JzLW9uLXRoZS1zdGFybGVzcy1zZWEnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2VzJyxcbiAgICAgICAgICAgICAgICBwdWJsaXNoZXI6ICdiYXNpbGlzay1hc3RlcmlzaycsXG4gICAgICAgICAgICAgICAgcGFjazogJ1V0aWxpdHknLFxuICAgICAgICAgICAgICAgIHNvdXJjZTogJ2RhdGEnLFxuICAgICAgICAgICAgICAgIHBhdGg6ICdtb2R1bGVzL2Vjci9pbWFnZXMvYmFzaWxpc2stYXN0ZXJpc2svdXRpbGl0eScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdpbWFnZXMnLFxuICAgICAgICAgICAgICAgIHB1Ymxpc2hlcjogJ2Jhc2lsaXNrLWFzdGVyaXNrJyxcbiAgICAgICAgICAgICAgICBwYWNrOiAnV2hlcmUgdGhlIFdoaXRlIFRoaW5ncyBBcmUnLFxuICAgICAgICAgICAgICAgIHNvdXJjZTogJ2RhdGEnLFxuICAgICAgICAgICAgICAgIHBhdGg6ICdtb2R1bGVzL2Vjci9pbWFnZXMvYmFzaWxpc2stYXN0ZXJpc2svd2hlcmUtdGhlLXdoaXRlLXRoaW5ncy1hcmUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBnYW1lLm1vdWxpbmV0dGUuc291cmNlcy5wdXNoKC4uLnNvdXJjZXMpO1xuXG4gICAgICAgIGxvZ2dlcignU291cmNlcyB1cGRhdGVkJyk7XG4gICAgfVxuXG4gICAgZy5FQ1IgPSB7XG4gICAgICAgIHJvbGxOUENUb2tlbkhpdFBvaW50cyxcbiAgICAgICAgbGlnaHRTb3VyY2VzLFxuICAgICAgICB2aXNpb25UeXBlcyxcbiAgICB9O1xufSk7XG5cbkhvb2tzLm9uKCdjcmVhdGVUb2tlbicsIHJvbGxOUENUb2tlbkhpdFBvaW50cyk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG5cbiAgICAgICAgaWYgKG1vZHVsZS5ob3Quc3RhdHVzKCkgPT09ICdhcHBseScpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdGVtcGxhdGUgaW4gX3RlbXBsYXRlQ2FjaGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChcbiAgICAgICAgICAgICAgICAgICAgICAgIF90ZW1wbGF0ZUNhY2hlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgX3RlbXBsYXRlQ2FjaGVbdGVtcGxhdGVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgVGVtcGxhdGVQcmVsb2FkZXIucHJlbG9hZEhhbmRsZWJhcnNUZW1wbGF0ZXMoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGFwcGxpY2F0aW9uIGluIHVpLndpbmRvd3MpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpLndpbmRvd3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1aS53aW5kb3dzW2FwcGxpY2F0aW9uXS5yZW5kZXIodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==