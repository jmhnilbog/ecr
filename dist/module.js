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
/* harmony export */   "lightSource": () => (/* binding */ lightSource)
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

// import Game from '@league-of-foundry-developers/foundry-vtt-types';
// declare module '@league-of-foundry-developers/foundry-vtt-types' {
//     export namespace Game {
//         export let ECR: Ecr;
//     }
// }
// declare global {
//     namespace Game {
//         export let ECR: Ecr;
//     }
// }
// type IsEmpty<T extends Record<PropertyKey, any>> = keyof T extends never
//     ? true
//     : false;
// function isGame(game: {} | Game): game is Game {
//     return Object.keys(game).length !== 0;
// }
Hooks.once('init', async () => {
    (0,_logger__WEBPACK_IMPORTED_MODULE_2__.logger)('Init hook called.');
});
Hooks.once('ready', async () => {
    (0,_logger__WEBPACK_IMPORTED_MODULE_2__.logger)('Ready hook called.');
    if (!(game instanceof Game)) {
        return;
    }
    // tell moulinette where the assets may be found
    // @ts-ignore
    if (game.moulinette) {
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
    game.ECR = {
        rollNPCTokenHitPoints: _misc__WEBPACK_IMPORTED_MODULE_1__.rollNPCTokenHitPoints,
        lighting: _vision_lightSources__WEBPACK_IMPORTED_MODULE_3__,
        visionTypes: _vision_visionTypes__WEBPACK_IMPORTED_MODULE_4__,
    };
});
Hooks.on('createToken', _misc__WEBPACK_IMPORTED_MODULE_1__.rollNPCTokenHitPoints);
if (true) {
    if (false) {}
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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azovLy8uL3NyYy9zdHlsZXMvZWNyLW1hcmtkb3duLnNjc3M/Y2Q3YSIsIndlYnBhY2s6Ly8vLi4vc3RhdGljL3RlbXBsYXRlcy90ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3NyYy9sb2dnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21pc2MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21pc2Mvcm9sbE5QQ1Rva2VuSGl0UG9pbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGUvaGVscGVyL1RlbXBsYXRlUHJlbG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92aXNpb24vbGlnaHRTb3VyY2VzLnRzIiwid2VicGFjazovLy8uL3NyYy92aXNpb24vdmlzaW9uVHlwZXMudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBkZWZhdWx0IFwiXCI7IiwiZXhwb3J0IGNvbnN0IGxvZ2dlciA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IFtmaXJzdCwgLi4ucmVzdF0gPSBhcmdzO1xuICAgIGlmICh0eXBlb2YgZmlyc3QgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGA9PUVDUjogJHtmaXJzdH1gLCAuLi5yZXN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnPT1FQ1InLCAuLi5hcmdzKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2dnZXI7XG4iLCJleHBvcnQgeyByb2xsTlBDVG9rZW5IaXRQb2ludHMgfSBmcm9tICcuL3JvbGxOUENUb2tlbkhpdFBvaW50cyc7XG4iLCJpbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuLi9sb2dnZXInO1xuXG5leHBvcnQgY29uc3Qgcm9sbE5QQ1Rva2VuSGl0UG9pbnRzID0gYXN5bmMgKHRva2VuRG9jOiBUb2tlbkRvY3VtZW50KSA9PiB7XG4gICAgbG9nZ2VyKCdyb2xsTlBDVG9rZW5IaXRQb2ludHMnLCB0b2tlbkRvYyk7XG4gICAgY29uc3QgYWN0b3IgPSB0b2tlbkRvYy5hY3RvcjtcblxuICAgIGlmICghYWN0b3IpIHtcbiAgICAgICAgbG9nZ2VyKCdJZ25vcmluZyBhY3Rvci1sZXNzIHRva2VuLicpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGFjdG9yLnR5cGUgIT09ICdOUEMnKSB7XG4gICAgICAgIGxvZ2dlcihgSWdub3JpbmcgYWN0b3IgdHlwZSBcIiR7YWN0b3IudHlwZX1cIiB0b2tlbi5gKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSBhY3Rvci5kYXRhLmRhdGEgYXMgRENDTlBDQWN0b3JEYXRhO1xuXG4gICAgY29uc3QgY3VycmVudEhwID0gZGF0YS5hdHRyaWJ1dGVzLmhwO1xuXG4gICAgY29uc3Qgc2hvdWxkUm9sbCA9IHRva2VuRG9jLmlzTGlua2VkXG4gICAgICAgID8gY3VycmVudEhwLm1heCAhPT0gbnVsbCAmJiBjdXJyZW50SHAubWF4ICE9PSAwXG4gICAgICAgIDogY3VycmVudEhwLm1heCA9PT0gbnVsbCB8fFxuICAgICAgICAgIGN1cnJlbnRIcC5tYXggPT09IDAgfHxcbiAgICAgICAgICBjdXJyZW50SHAudmFsdWUgPT09IGN1cnJlbnRIcC5tYXg7XG5cbiAgICBpZiAoIXNob3VsZFJvbGwpIHtcbiAgICAgICAgbG9nZ2VyKFxuICAgICAgICAgICAgYElnbm9yaW5nIHRva2VuLiAoaXNMaW5rZWQ6ICR7dG9rZW5Eb2MuaXNMaW5rZWR9LCBocDogJHtjdXJyZW50SHB9KS5gXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBoaXREaWNlID0gZGF0YS5hdHRyaWJ1dGVzLmhpdERpY2UudmFsdWU7XG4gICAgY29uc3QgbWF4SFBSb2xsID0gbmV3IFJvbGwoaGl0RGljZSk7XG4gICAgY29uc3QgbWF4SFBSb2xsUmVzdWx0ID0gYXdhaXQgbWF4SFBSb2xsLmV2YWx1YXRlKHtcbiAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgfSk7XG4gICAgbGV0IG1heEhQID0gbWF4SFBSb2xsUmVzdWx0LnRvdGFsIHx8IDA7XG5cbiAgICBpZiAobWF4SFAgPCAxKSB7XG4gICAgICAgIGxvZ2dlcihcbiAgICAgICAgICAgIGBXYXJuaW5nLCBtYXhIUCByb2xsIHdhcyBsZXNzIHRoYW4gMCAoJHttYXhIUFJvbGxSZXN1bHQudG90YWx9KTsgdXNpbmcgMS5gXG4gICAgICAgICk7XG4gICAgICAgIG1heEhQID0gMTtcbiAgICB9XG5cbiAgICBkYXRhLmF0dHJpYnV0ZXMuaHAudmFsdWUgPSBtYXhIUDtcbiAgICBkYXRhLmF0dHJpYnV0ZXMuaHAubWF4ID0gbWF4SFA7XG4gICAgdG9rZW5Eb2MudXBkYXRlKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByb2xsTlBDVG9rZW5IaXRQb2ludHM7XG4iLCJpbXBvcnQgJy4uLy4uLy4uLy4uL3N0YXRpYy90ZW1wbGF0ZXMvdGVtcGxhdGUuaHRtbCc7XG5cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVByZWxvYWRlciB7XG4gICAgLyoqXG4gICAgICogUHJlbG9hZCBhIHNldCBvZiB0ZW1wbGF0ZXMgdG8gY29tcGlsZSBhbmQgY2FjaGUgdGhlbSBmb3IgZmFzdCBhY2Nlc3MgZHVyaW5nIHJlbmRlcmluZ1xuICAgICAqL1xuICAgIHN0YXRpYyBhc3luYyBwcmVsb2FkSGFuZGxlYmFyc1RlbXBsYXRlcygpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGVQYXRocyA9IFsnX19BTExfVEVNUExBVEVTX18nXTtcbiAgICAgICAgcmV0dXJuIGxvYWRUZW1wbGF0ZXModGVtcGxhdGVQYXRocyk7XG4gICAgfVxufVxuIiwiLy8gSG93IGRpZmZlcmVudCBsaWdodHMgZmxpY2tlciwgb3IgZG9uJ3QuXG5leHBvcnQgY29uc3QgbGlnaHRBbmltYXRpb24gPSB7XG4gICAgbm9uZToge1xuICAgICAgICB0eXBlOiAnJyxcbiAgICB9LFxuICAgICdvcGVuIGZsYW1lJzoge1xuICAgICAgICB0eXBlOiAndG9yY2gnLFxuICAgICAgICBzcGVlZDogMixcbiAgICAgICAgaW50ZW5zaXR5OiAyLFxuICAgIH0sXG4gICAgJ2VuY2xvc2VkIGZsYW1lJzoge1xuICAgICAgICB0eXBlOiAndG9yY2gnLFxuICAgICAgICBzcGVlZDogNCxcbiAgICAgICAgaW50ZW5zaXR5OiAxLFxuICAgIH0sXG59IGFzIGNvbnN0O1xuXG4vLyBUaGUgY29sb3JzIG9mIHZhcmlvdXMgbGlnaHRpbmcgdHlwZXMuXG5leHBvcnQgY29uc3QgbGlnaHRDb2xvcnMgPSB7XG4gICAgdG9yY2hsaWdodDogJyM5YzZkMGMnLFxufTtcblxuLy8gaW4gbWludXRlc1xuZXhwb3J0IGNvbnN0IGxpZ2h0RHVyYXRpb24gPSB7XG4gICAgY2FuZGxlOiAzNjAsXG4gICAgdG9yY2g6IDYwLFxuICAgICdvaWwgbGFtcCc6IDE4MCxcbiAgICAnYnVsbHNleWUgbGFudGVybic6IDEyMCxcbn07XG5cbmV4cG9ydCBjb25zdCBsaWdodFNvdXJjZSA9IHtcbiAgICBub25lOiB7XG4gICAgICAgIGRpbTogMCxcbiAgICAgICAgYnJpZ2h0OiAwLFxuICAgICAgICBsaWdodEFuaW1hdGlvbjogbGlnaHRBbmltYXRpb24ubm9uZSxcbiAgICB9LFxuICAgIGNhbmRsZToge1xuICAgICAgICBkaW06IDIwLFxuICAgICAgICBicmlnaHQ6IDUsXG4gICAgICAgIGNvbG9yOiBsaWdodENvbG9ycy50b3JjaGxpZ2h0LFxuICAgICAgICBhbHBoYTogMC4xNSxcbiAgICAgICAgYW5nbGU6IDM2MCxcbiAgICAgICAgbGlnaHRBbmltYXRpb246IGxpZ2h0QW5pbWF0aW9uWydvcGVuIGZsYW1lJ10sXG4gICAgfSxcbiAgICB0b3JjaDoge1xuICAgICAgICBkaW06IDM1LFxuICAgICAgICBicmlnaHQ6IDI1LFxuICAgICAgICBjb2xvcjogbGlnaHRDb2xvcnMudG9yY2hsaWdodCxcbiAgICAgICAgYWxwaGE6IDAuMTUsXG4gICAgICAgIGFuZ2xlOiAzNjAsXG4gICAgICAgIGxpZ2h0QW5pbWF0aW9uOiBsaWdodEFuaW1hdGlvblsnb3BlbiBmbGFtZSddLFxuICAgIH0sXG4gICAgJ29pbCBsYW1wJzoge1xuICAgICAgICBkaW06IDQ1LFxuICAgICAgICBicmlnaHQ6IDE1LFxuICAgICAgICBjb2xvcjogbGlnaHRDb2xvcnMudG9yY2hsaWdodCxcbiAgICAgICAgYWxwaGE6IDAuMTUsXG4gICAgICAgIGFuZ2xlOiAzNjAsXG4gICAgICAgIGxpZ2h0QW5pbWF0aW9uOiBsaWdodEFuaW1hdGlvblsnZW5jbG9zZWQgZmxhbWUnXSxcbiAgICB9LFxuICAgICdidWxsc2V5ZSBsYW50ZXJuJzoge1xuICAgICAgICBkaW06IDEyMCxcbiAgICAgICAgYnJpZ2h0OiA2MCxcbiAgICAgICAgY29sb3I6IGxpZ2h0Q29sb3JzLnRvcmNobGlnaHQsXG4gICAgICAgIGFscGhhOiAwLjE1LFxuICAgICAgICBhbmdsZTogNTIuNSxcbiAgICAgICAgbGlnaHRBbmltYXRpb246IGxpZ2h0QW5pbWF0aW9uWydlbmNsb3NlZCBmbGFtZSddLFxuICAgIH0sXG59IGFzIGNvbnN0O1xuIiwiZXhwb3J0IGNvbnN0IHZpc2lvblR5cGVzID0ge1xuICAgIGh1bWFuOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBgTm9ybWFsIGh1bWFuIHNpZ2h0IHdpdGhvdXQgYSBsaWdodCBzb3VyY2UuYCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgdmlzaW9uOiB0cnVlLFxuICAgICAgICAgICAgZGltU2lnaHQ6IDEuNSxcbiAgICAgICAgICAgIGJyaWdodFNpZ2h0OiAwLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgJ3VuZGVyLXNpZ2h0Jzoge1xuICAgICAgICBkZXNjcmlwdGlvbjogYEEgc3RyYW5nZSBtYW5uZXIgb2Ygc2lnaHQgd2l0aG91dCBsaWdodC5gLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB2aXNpb246IHRydWUsXG4gICAgICAgICAgICBkaW1TaWdodDogNjAsXG4gICAgICAgICAgICBicmlnaHRTaWdodDogNDUsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB1bnNpZ2h0ZWQ6IHtcbiAgICAgICAgZGVzY3JpcHRpb246IGBBIGxhY2sgb2YgdmlzaW9uLmAsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHZpc2lvbjogZmFsc2UsXG4gICAgICAgICAgICBkaW1TaWdodDogMCxcbiAgICAgICAgICAgIGJyaWdodFNpZ2h0OiAwLFxuICAgICAgICB9LFxuICAgIH0sXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgZGVmYXVsdCB2aXNpb25UeXBlcztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5hbWVzcGFjZSAqL1xuXG5jb25zb2xlLmxvZygnTE9BRElORyBFQ1IgSU5ERVgnKTtcblxuaW1wb3J0IHsgVGVtcGxhdGVQcmVsb2FkZXIgfSBmcm9tICcuL21vZHVsZS9oZWxwZXIvVGVtcGxhdGVQcmVsb2FkZXInO1xuaW1wb3J0IHsgcm9sbE5QQ1Rva2VuSGl0UG9pbnRzIH0gZnJvbSAnLi9taXNjJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4vbG9nZ2VyJztcblxuaW1wb3J0ICogYXMgbGlnaHRpbmcgZnJvbSAnLi92aXNpb24vbGlnaHRTb3VyY2VzJztcbmltcG9ydCAqIGFzIHZpc2lvblR5cGVzIGZyb20gJy4vdmlzaW9uL3Zpc2lvblR5cGVzJztcblxuLy8gaW1wb3J0ICcuL01FTUUnO1xuaW1wb3J0ICcuL3N0eWxlcy9lY3ItbWFya2Rvd24uc2Nzcyc7XG5cbi8vIGltcG9ydCBHYW1lIGZyb20gJ0BsZWFndWUtb2YtZm91bmRyeS1kZXZlbG9wZXJzL2ZvdW5kcnktdnR0LXR5cGVzJztcbi8vIGRlY2xhcmUgbW9kdWxlICdAbGVhZ3VlLW9mLWZvdW5kcnktZGV2ZWxvcGVycy9mb3VuZHJ5LXZ0dC10eXBlcycge1xuLy8gICAgIGV4cG9ydCBuYW1lc3BhY2UgR2FtZSB7XG4vLyAgICAgICAgIGV4cG9ydCBsZXQgRUNSOiBFY3I7XG4vLyAgICAgfVxuLy8gfVxuXG4vLyBkZWNsYXJlIGdsb2JhbCB7XG4vLyAgICAgbmFtZXNwYWNlIEdhbWUge1xuLy8gICAgICAgICBleHBvcnQgbGV0IEVDUjogRWNyO1xuLy8gICAgIH1cbi8vIH1cblxuLy8gdHlwZSBJc0VtcHR5PFQgZXh0ZW5kcyBSZWNvcmQ8UHJvcGVydHlLZXksIGFueT4+ID0ga2V5b2YgVCBleHRlbmRzIG5ldmVyXG4vLyAgICAgPyB0cnVlXG4vLyAgICAgOiBmYWxzZTtcblxuLy8gZnVuY3Rpb24gaXNHYW1lKGdhbWU6IHt9IHwgR2FtZSk6IGdhbWUgaXMgR2FtZSB7XG4vLyAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGdhbWUpLmxlbmd0aCAhPT0gMDtcbi8vIH1cblxuSG9va3Mub25jZSgnaW5pdCcsIGFzeW5jICgpID0+IHtcbiAgICBsb2dnZXIoJ0luaXQgaG9vayBjYWxsZWQuJyk7XG59KTtcblxuSG9va3Mub25jZSgncmVhZHknLCBhc3luYyAoKSA9PiB7XG4gICAgbG9nZ2VyKCdSZWFkeSBob29rIGNhbGxlZC4nKTtcblxuICAgIGlmICghKGdhbWUgaW5zdGFuY2VvZiBHYW1lKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIHRlbGwgbW91bGluZXR0ZSB3aGVyZSB0aGUgYXNzZXRzIG1heSBiZSBmb3VuZFxuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGlmIChnYW1lLm1vdWxpbmV0dGUpIHtcbiAgICAgICAgY29uc3Qgc291cmNlcyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2VzJyxcbiAgICAgICAgICAgICAgICBwdWJsaXNoZXI6ICdWYXJpb3VzJyxcbiAgICAgICAgICAgICAgICBwYWNrOiAnVmFyaW91cycsXG4gICAgICAgICAgICAgICAgc291cmNlOiAnZGF0YScsXG4gICAgICAgICAgICAgICAgcGF0aDogJ21vZHVsZXMvZWNyL2ltYWdlcy91bmtub3duJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2ltYWdlcycsXG4gICAgICAgICAgICAgICAgcHVibGlzaGVyOiAnYmFzaWxpc2stYXN0ZXJpc2snLFxuICAgICAgICAgICAgICAgIHBhY2s6ICcwLWxldmVsJyxcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICdkYXRhJyxcbiAgICAgICAgICAgICAgICBwYXRoOiAnbW9kdWxlcy9lY3IvaW1hZ2VzL2Jhc2lsaXNrLWFzdGVyaXNrLzAtbGV2ZWwnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2VzJyxcbiAgICAgICAgICAgICAgICBwdWJsaXNoZXI6ICdiYXNpbGlzay1hc3RlcmlzaycsXG4gICAgICAgICAgICAgICAgcGFjazogJ0EgVHJpcCB0byBEb2xtJyxcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICdkYXRhJyxcbiAgICAgICAgICAgICAgICBwYXRoOiAnbW9kdWxlcy9lY3IvaW1hZ2VzL2Jhc2lsaXNrLWFzdGVyaXNrL2EtdHJpcC10by1kb2xtJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2ltYWdlcycsXG4gICAgICAgICAgICAgICAgcHVibGlzaGVyOiAnYmFzaWxpc2stYXN0ZXJpc2snLFxuICAgICAgICAgICAgICAgIHBhY2s6ICdEZW1vbmljIFJ1bmVzJyxcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICdkYXRhJyxcbiAgICAgICAgICAgICAgICBwYXRoOiAnbW9kdWxlcy9lY3IvaW1hZ2VzL2Jhc2lsaXNrLWFzdGVyaXNrL2RlbW9uaWMtcnVuZXMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2VzJyxcbiAgICAgICAgICAgICAgICBwdWJsaXNoZXI6ICdiYXNpbGlzay1hc3RlcmlzaycsXG4gICAgICAgICAgICAgICAgcGFjazogJ0VsemVtb24gYW5kIHRoZSBCbG9vZC1Ecmlua2luZyBCb3gnLFxuICAgICAgICAgICAgICAgIHNvdXJjZTogJ2RhdGEnLFxuICAgICAgICAgICAgICAgIHBhdGg6ICdtb2R1bGVzL2Vjci9pbWFnZXMvYmFzaWxpc2stYXN0ZXJpc2svZWx6ZW1vbi1hbmQtdGhlLWJsb29kLWRyaW5raW5nLWJveCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdpbWFnZXMnLFxuICAgICAgICAgICAgICAgIHB1Ymxpc2hlcjogJ2Jhc2lsaXNrLWFzdGVyaXNrJyxcbiAgICAgICAgICAgICAgICBwYWNrOiAnSGVyYWxkcnknLFxuICAgICAgICAgICAgICAgIHNvdXJjZTogJ2RhdGEnLFxuICAgICAgICAgICAgICAgIHBhdGg6ICdtb2R1bGVzL2Vjci9pbWFnZXMvYmFzaWxpc2stYXN0ZXJpc2svaGVyYWxkcnknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2VzJyxcbiAgICAgICAgICAgICAgICBwdWJsaXNoZXI6ICdiYXNpbGlzay1hc3RlcmlzaycsXG4gICAgICAgICAgICAgICAgcGFjazogJ01hbWEgSHVuZ3J5JyxcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICdkYXRhJyxcbiAgICAgICAgICAgICAgICBwYXRoOiAnbW9kdWxlcy9lY3IvaW1hZ2VzL2Jhc2lsaXNrLWFzdGVyaXNrL21hbWEtaHVuZ3J5JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2ltYWdlcycsXG4gICAgICAgICAgICAgICAgcHVibGlzaGVyOiAnYmFzaWxpc2stYXN0ZXJpc2snLFxuICAgICAgICAgICAgICAgIHBhY2s6ICdQYXJ0eSBQb29wZXJzJyxcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICdkYXRhJyxcbiAgICAgICAgICAgICAgICBwYXRoOiAnbW9kdWxlcy9lY3IvaW1hZ2VzL2Jhc2lsaXNrLWFzdGVyaXNrL3BhcnR5LXBvb3BlcnMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2VzJyxcbiAgICAgICAgICAgICAgICBwdWJsaXNoZXI6ICdiYXNpbGlzay1hc3RlcmlzaycsXG4gICAgICAgICAgICAgICAgcGFjazogJ1NhaWxvcnMgb24gdGhlIFN0YXJsZXNzIFNlYScsXG4gICAgICAgICAgICAgICAgc291cmNlOiAnZGF0YScsXG4gICAgICAgICAgICAgICAgcGF0aDogJ21vZHVsZXMvZWNyL2ltYWdlcy9iYXNpbGlzay1hc3Rlcmlzay9zYWlsb3JzLW9uLXRoZS1zdGFybGVzcy1zZWEnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2VzJyxcbiAgICAgICAgICAgICAgICBwdWJsaXNoZXI6ICdiYXNpbGlzay1hc3RlcmlzaycsXG4gICAgICAgICAgICAgICAgcGFjazogJ1V0aWxpdHknLFxuICAgICAgICAgICAgICAgIHNvdXJjZTogJ2RhdGEnLFxuICAgICAgICAgICAgICAgIHBhdGg6ICdtb2R1bGVzL2Vjci9pbWFnZXMvYmFzaWxpc2stYXN0ZXJpc2svdXRpbGl0eScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdpbWFnZXMnLFxuICAgICAgICAgICAgICAgIHB1Ymxpc2hlcjogJ2Jhc2lsaXNrLWFzdGVyaXNrJyxcbiAgICAgICAgICAgICAgICBwYWNrOiAnV2hlcmUgdGhlIFdoaXRlIFRoaW5ncyBBcmUnLFxuICAgICAgICAgICAgICAgIHNvdXJjZTogJ2RhdGEnLFxuICAgICAgICAgICAgICAgIHBhdGg6ICdtb2R1bGVzL2Vjci9pbWFnZXMvYmFzaWxpc2stYXN0ZXJpc2svd2hlcmUtdGhlLXdoaXRlLXRoaW5ncy1hcmUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBnYW1lLm1vdWxpbmV0dGUuc291cmNlcy5wdXNoKC4uLnNvdXJjZXMpO1xuXG4gICAgICAgIGxvZ2dlcignU291cmNlcyB1cGRhdGVkJyk7XG4gICAgfVxuXG4gICAgZ2FtZS5FQ1IgPSB7XG4gICAgICAgIHJvbGxOUENUb2tlbkhpdFBvaW50cyxcbiAgICAgICAgbGlnaHRpbmcsXG4gICAgICAgIHZpc2lvblR5cGVzLFxuICAgIH07XG59KTtcblxuSG9va3Mub24oJ2NyZWF0ZVRva2VuJywgcm9sbE5QQ1Rva2VuSGl0UG9pbnRzKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcblxuICAgICAgICBpZiAobW9kdWxlLmhvdC5zdGF0dXMoKSA9PT0gJ2FwcGx5Jykge1xuICAgICAgICAgICAgZm9yIChjb25zdCB0ZW1wbGF0ZSBpbiBfdGVtcGxhdGVDYWNoZSkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgX3RlbXBsYXRlQ2FjaGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBfdGVtcGxhdGVDYWNoZVt0ZW1wbGF0ZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBUZW1wbGF0ZVByZWxvYWRlci5wcmVsb2FkSGFuZGxlYmFyc1RlbXBsYXRlcygpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYXBwbGljYXRpb24gaW4gdWkud2luZG93cykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdWkud2luZG93cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBsaWNhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVpLndpbmRvd3NbYXBwbGljYXRpb25dLnJlbmRlcih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9