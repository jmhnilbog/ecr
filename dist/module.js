/*! fullhash:7f39830a8c3ce0c08d9f, chunkhash:98d29994cb43fad3ceee, name:main, filebase:module.js, query:, file:module.js */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxFQUFFLFFBQVE7Z0JBQ2QsU0FBUyxFQUFFLG1CQUFtQjtnQkFDOUIsSUFBSSxFQUFFLDZCQUE2QjtnQkFDbkMsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsSUFBSSxFQUFFLGtFQUFrRTthQUMzRTtZQUNEO2dCQUNJLElBQUksRUFBRSxRQUFRO2dCQUNkLFNBQVMsRUFBRSxtQkFBbUI7Z0JBQzlCLElBQUksRUFBRSxTQUFTO2dCQUNmLE1BQU0sRUFBRSxNQUFNO2dCQUNkLElBQUksRUFBRSw4Q0FBOEM7YUFDdkQ7WUFDRDtnQkFDSSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxTQUFTLEVBQUUsbUJBQW1CO2dCQUM5QixJQUFJLEVBQUUsNEJBQTRCO2dCQUNsQyxNQUFNLEVBQUUsTUFBTTtnQkFDZCxJQUFJLEVBQUUsaUVBQWlFO2FBQzFFO1NBQ0osQ0FBQztRQUNGLGFBQWE7UUFDYixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQztRQUV6QywrQ0FBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7S0FDN0I7SUFFRCxDQUFDLENBQUMsR0FBRyxHQUFHO1FBQ0oscUJBQXFCO1FBQ3JCLFlBQVk7UUFDWixXQUFXO0tBQ2QsQ0FBQztBQUNOLENBQUMsQ0FBQyxDQUFDO0FBRUgsS0FBSyxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsd0RBQXFCLENBQUMsQ0FBQztBQUUvQyxJQUFJLElBQXNDLEVBQUU7SUFDeEMsSUFBSSxLQUFVLEVBQUUsRUE0QmY7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZWNyLW1hcmtkb3duLnNjc3M/Y2Q3YSIsIndlYnBhY2s6Ly8vLi4vc3RhdGljL3RlbXBsYXRlcy90ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3NyYy9sb2dnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21pc2MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21pc2Mvcm9sbE5QQ1Rva2VuSGl0UG9pbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGUvaGVscGVyL1RlbXBsYXRlUHJlbG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92aXNpb24vbGlnaHRTb3VyY2VzLnRzIiwid2VicGFjazovLy8uL3NyYy92aXNpb24vdmlzaW9uVHlwZXMudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBkZWZhdWx0IFwiXCI7IiwiZXhwb3J0IGNvbnN0IGxvZ2dlciA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IFtmaXJzdCwgLi4ucmVzdF0gPSBhcmdzO1xuICAgIGlmICh0eXBlb2YgZmlyc3QgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGA9PUVDUjogJHtmaXJzdH1gLCAuLi5yZXN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnPT1FQ1InLCAuLi5hcmdzKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2dnZXI7XG4iLCJleHBvcnQgeyByb2xsTlBDVG9rZW5IaXRQb2ludHMgfSBmcm9tICcuL3JvbGxOUENUb2tlbkhpdFBvaW50cyc7XG4iLCJpbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuLi9sb2dnZXInO1xuXG5leHBvcnQgY29uc3Qgcm9sbE5QQ1Rva2VuSGl0UG9pbnRzID0gYXN5bmMgKHRva2VuRG9jOiBUb2tlbkRvY3VtZW50KSA9PiB7XG4gICAgbG9nZ2VyKCdyb2xsTlBDVG9rZW5IaXRQb2ludHMnLCB0b2tlbkRvYyk7XG4gICAgY29uc3QgYWN0b3IgPSB0b2tlbkRvYy5hY3RvcjtcblxuICAgIGlmICghYWN0b3IpIHtcbiAgICAgICAgbG9nZ2VyKCdJZ25vcmluZyBhY3Rvci1sZXNzIHRva2VuLicpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGFjdG9yLnR5cGUgIT09ICdOUEMnKSB7XG4gICAgICAgIGxvZ2dlcihgSWdub3JpbmcgYWN0b3IgdHlwZSBcIiR7YWN0b3IudHlwZX1cIiB0b2tlbi5gKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSBhY3Rvci5kYXRhLmRhdGEgYXMgRENDTlBDQWN0b3JEYXRhO1xuXG4gICAgY29uc3QgY3VycmVudEhwID0gZGF0YS5hdHRyaWJ1dGVzLmhwO1xuXG4gICAgY29uc3Qgc2hvdWxkUm9sbCA9IHRva2VuRG9jLmlzTGlua2VkXG4gICAgICAgID8gY3VycmVudEhwLm1heCAhPT0gbnVsbCAmJiBjdXJyZW50SHAubWF4ICE9PSAwXG4gICAgICAgIDogY3VycmVudEhwLm1heCA9PT0gbnVsbCB8fFxuICAgICAgICAgIGN1cnJlbnRIcC5tYXggPT09IDAgfHxcbiAgICAgICAgICBjdXJyZW50SHAudmFsdWUgPT09IGN1cnJlbnRIcC5tYXg7XG5cbiAgICBpZiAoIXNob3VsZFJvbGwpIHtcbiAgICAgICAgbG9nZ2VyKFxuICAgICAgICAgICAgYElnbm9yaW5nIHRva2VuLiAoaXNMaW5rZWQ6ICR7dG9rZW5Eb2MuaXNMaW5rZWR9LCBocDogJHtjdXJyZW50SHB9KS5gXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBoaXREaWNlID0gZGF0YS5hdHRyaWJ1dGVzLmhpdERpY2UudmFsdWU7XG4gICAgY29uc3QgbWF4SFBSb2xsID0gbmV3IFJvbGwoaGl0RGljZSk7XG4gICAgY29uc3QgbWF4SFBSb2xsUmVzdWx0ID0gYXdhaXQgbWF4SFBSb2xsLmV2YWx1YXRlKHtcbiAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgfSk7XG4gICAgbGV0IG1heEhQID0gbWF4SFBSb2xsUmVzdWx0LnRvdGFsIHx8IDA7XG5cbiAgICBpZiAobWF4SFAgPCAxKSB7XG4gICAgICAgIGxvZ2dlcihcbiAgICAgICAgICAgIGBXYXJuaW5nLCBtYXhIUCByb2xsIHdhcyBsZXNzIHRoYW4gMCAoJHttYXhIUFJvbGxSZXN1bHQudG90YWx9KTsgdXNpbmcgMS5gXG4gICAgICAgICk7XG4gICAgICAgIG1heEhQID0gMTtcbiAgICB9XG5cbiAgICBkYXRhLmF0dHJpYnV0ZXMuaHAudmFsdWUgPSBtYXhIUDtcbiAgICBkYXRhLmF0dHJpYnV0ZXMuaHAubWF4ID0gbWF4SFA7XG4gICAgdG9rZW5Eb2MudXBkYXRlKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByb2xsTlBDVG9rZW5IaXRQb2ludHM7XG4iLCJpbXBvcnQgJy4uLy4uLy4uLy4uL3N0YXRpYy90ZW1wbGF0ZXMvdGVtcGxhdGUuaHRtbCc7XG5cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVByZWxvYWRlciB7XG4gICAgLyoqXG4gICAgICogUHJlbG9hZCBhIHNldCBvZiB0ZW1wbGF0ZXMgdG8gY29tcGlsZSBhbmQgY2FjaGUgdGhlbSBmb3IgZmFzdCBhY2Nlc3MgZHVyaW5nIHJlbmRlcmluZ1xuICAgICAqL1xuICAgIHN0YXRpYyBhc3luYyBwcmVsb2FkSGFuZGxlYmFyc1RlbXBsYXRlcygpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGVQYXRocyA9IFsnX19BTExfVEVNUExBVEVTX18nXTtcbiAgICAgICAgcmV0dXJuIGxvYWRUZW1wbGF0ZXModGVtcGxhdGVQYXRocyk7XG4gICAgfVxufVxuIiwiLy8gSG93IGRpZmZlcmVudCBsaWdodHMgZmxpY2tlciwgb3IgZG9uJ3QuXG5leHBvcnQgY29uc3QgbGlnaHRBbmltYXRpb24gPSB7XG4gICAgbm9uZToge1xuICAgICAgICB0eXBlOiAnJyxcbiAgICB9LFxuICAgICdvcGVuIGZsYW1lJzoge1xuICAgICAgICB0eXBlOiAndG9yY2gnLFxuICAgICAgICBzcGVlZDogMixcbiAgICAgICAgaW50ZW5zaXR5OiAyLFxuICAgIH0sXG4gICAgJ2VuY2xvc2VkIGZsYW1lJzoge1xuICAgICAgICB0eXBlOiAndG9yY2gnLFxuICAgICAgICBzcGVlZDogNCxcbiAgICAgICAgaW50ZW5zaXR5OiAxLFxuICAgIH0sXG59IGFzIGNvbnN0O1xuXG4vLyBUaGUgY29sb3JzIG9mIHZhcmlvdXMgbGlnaHRpbmcgdHlwZXMuXG5leHBvcnQgY29uc3QgbGlnaHRDb2xvcnMgPSB7XG4gICAgdG9yY2hsaWdodDogJyM5YzZkMGMnLFxufTtcblxuLy8gaW4gbWludXRlc1xuZXhwb3J0IGNvbnN0IGxpZ2h0RHVyYXRpb24gPSB7XG4gICAgY2FuZGxlOiAzNjAsXG4gICAgdG9yY2g6IDYwLFxuICAgICdvaWwgbGFtcCc6IDE4MCxcbiAgICAnYnVsbHNleWUgbGFudGVybic6IDEyMCxcbn07XG5cbmV4cG9ydCBjb25zdCBsaWdodFNvdXJjZSA9IHtcbiAgICBub25lOiB7XG4gICAgICAgIGRpbTogMCxcbiAgICAgICAgYnJpZ2h0OiAwLFxuICAgICAgICBsaWdodEFuaW1hdGlvbjogbGlnaHRBbmltYXRpb24ubm9uZSxcbiAgICB9LFxuICAgIGNhbmRsZToge1xuICAgICAgICBkaW06IDIwLFxuICAgICAgICBicmlnaHQ6IDUsXG4gICAgICAgIGNvbG9yOiBsaWdodENvbG9ycy50b3JjaGxpZ2h0LFxuICAgICAgICBhbHBoYTogMC4xNSxcbiAgICAgICAgYW5nbGU6IDM2MCxcbiAgICAgICAgbGlnaHRBbmltYXRpb246IGxpZ2h0QW5pbWF0aW9uWydvcGVuIGZsYW1lJ10sXG4gICAgfSxcbiAgICB0b3JjaDoge1xuICAgICAgICBkaW06IDM1LFxuICAgICAgICBicmlnaHQ6IDI1LFxuICAgICAgICBjb2xvcjogbGlnaHRDb2xvcnMudG9yY2hsaWdodCxcbiAgICAgICAgYWxwaGE6IDAuMTUsXG4gICAgICAgIGFuZ2xlOiAzNjAsXG4gICAgICAgIGxpZ2h0QW5pbWF0aW9uOiBsaWdodEFuaW1hdGlvblsnb3BlbiBmbGFtZSddLFxuICAgIH0sXG4gICAgJ29pbCBsYW1wJzoge1xuICAgICAgICBkaW06IDQ1LFxuICAgICAgICBicmlnaHQ6IDE1LFxuICAgICAgICBjb2xvcjogbGlnaHRDb2xvcnMudG9yY2hsaWdodCxcbiAgICAgICAgYWxwaGE6IDAuMTUsXG4gICAgICAgIGFuZ2xlOiAzNjAsXG4gICAgICAgIGxpZ2h0QW5pbWF0aW9uOiBsaWdodEFuaW1hdGlvblsnZW5jbG9zZWQgZmxhbWUnXSxcbiAgICB9LFxuICAgICdidWxsc2V5ZSBsYW50ZXJuJzoge1xuICAgICAgICBkaW06IDEyMCxcbiAgICAgICAgYnJpZ2h0OiA2MCxcbiAgICAgICAgY29sb3I6IGxpZ2h0Q29sb3JzLnRvcmNobGlnaHQsXG4gICAgICAgIGFscGhhOiAwLjE1LFxuICAgICAgICBhbmdsZTogNTIuNSxcbiAgICAgICAgbGlnaHRBbmltYXRpb246IGxpZ2h0QW5pbWF0aW9uWydlbmNsb3NlZCBmbGFtZSddLFxuICAgIH0sXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbGlnaHRBbmltYXRpb24sXG4gICAgbGlnaHRDb2xvcnMsXG4gICAgbGlnaHREdXJhdGlvbixcbiAgICBsaWdodFNvdXJjZSxcbn07XG4iLCJleHBvcnQgY29uc3QgdmlzaW9uVHlwZXMgPSB7XG4gICAgaHVtYW46IHtcbiAgICAgICAgZGVzY3JpcHRpb246IGBOb3JtYWwgaHVtYW4gc2lnaHQgd2l0aG91dCBhIGxpZ2h0IHNvdXJjZS5gLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB2aXNpb246IHRydWUsXG4gICAgICAgICAgICBkaW1TaWdodDogMS41LFxuICAgICAgICAgICAgYnJpZ2h0U2lnaHQ6IDAsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICAndW5kZXItc2lnaHQnOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBgQSBzdHJhbmdlIG1hbm5lciBvZiBzaWdodCB3aXRob3V0IGxpZ2h0LmAsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHZpc2lvbjogdHJ1ZSxcbiAgICAgICAgICAgIGRpbVNpZ2h0OiA2MCxcbiAgICAgICAgICAgIGJyaWdodFNpZ2h0OiA0NSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHVuc2lnaHRlZDoge1xuICAgICAgICBkZXNjcmlwdGlvbjogYEEgbGFjayBvZiB2aXNpb24uYCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgdmlzaW9uOiBmYWxzZSxcbiAgICAgICAgICAgIGRpbVNpZ2h0OiAwLFxuICAgICAgICAgICAgYnJpZ2h0U2lnaHQ6IDAsXG4gICAgICAgIH0sXG4gICAgfSxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBkZWZhdWx0IHZpc2lvblR5cGVzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbmFtZXNwYWNlICovXG5cbmNvbnNvbGUubG9nKCdMT0FESU5HIEVDUiBJTkRFWCcpO1xuXG5pbXBvcnQgeyBUZW1wbGF0ZVByZWxvYWRlciB9IGZyb20gJy4vbW9kdWxlL2hlbHBlci9UZW1wbGF0ZVByZWxvYWRlcic7XG5pbXBvcnQgeyByb2xsTlBDVG9rZW5IaXRQb2ludHMgfSBmcm9tICcuL21pc2MnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXInO1xuXG5pbXBvcnQgbGlnaHRTb3VyY2VzIGZyb20gJy4vdmlzaW9uL2xpZ2h0U291cmNlcyc7XG5pbXBvcnQgdmlzaW9uVHlwZXMgZnJvbSAnLi92aXNpb24vdmlzaW9uVHlwZXMnO1xuXG4vLyBpbXBvcnQgJy4vTUVNRSc7XG5pbXBvcnQgJy4vc3R5bGVzL2Vjci1tYXJrZG93bi5zY3NzJztcblxuSG9va3Mub25jZSgnaW5pdCcsIGFzeW5jICgpID0+IHtcbiAgICBsb2dnZXIoJ0luaXQgaG9vayBjYWxsZWQuJyk7XG59KTtcblxuSG9va3Mub25jZSgncmVhZHknLCBhc3luYyAoKSA9PiB7XG4gICAgbG9nZ2VyKCdSZWFkeSBob29rIGNhbGxlZC4nKTtcblxuICAgIGNvbnN0IGc6IEdhbWUgPSBnYW1lIGFzIEdhbWU7XG5cbiAgICBpZiAoIWcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnYW1lIGdsb2JhbCBub3QgYXZhaWxhYmxlIScpO1xuICAgIH1cbiAgICAvLyB0ZWxsIG1vdWxpbmV0dGUgd2hlcmUgdGhlIGFzc2V0cyBtYXkgYmUgZm91bmRcblxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBpZiAoZy5tb3VsaW5ldHRlKSB7XG4gICAgICAgIGNvbnN0IHNvdXJjZXMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2ltYWdlcycsXG4gICAgICAgICAgICAgICAgcHVibGlzaGVyOiAnVmFyaW91cycsXG4gICAgICAgICAgICAgICAgcGFjazogJ1ZhcmlvdXMnLFxuICAgICAgICAgICAgICAgIHNvdXJjZTogJ2RhdGEnLFxuICAgICAgICAgICAgICAgIHBhdGg6ICdtb2R1bGVzL2Vjci9pbWFnZXMvdW5rbm93bicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdpbWFnZXMnLFxuICAgICAgICAgICAgICAgIHB1Ymxpc2hlcjogJ2Jhc2lsaXNrLWFzdGVyaXNrJyxcbiAgICAgICAgICAgICAgICBwYWNrOiAnMC1sZXZlbCcsXG4gICAgICAgICAgICAgICAgc291cmNlOiAnZGF0YScsXG4gICAgICAgICAgICAgICAgcGF0aDogJ21vZHVsZXMvZWNyL2ltYWdlcy9iYXNpbGlzay1hc3Rlcmlzay8wLWxldmVsJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2ltYWdlcycsXG4gICAgICAgICAgICAgICAgcHVibGlzaGVyOiAnYmFzaWxpc2stYXN0ZXJpc2snLFxuICAgICAgICAgICAgICAgIHBhY2s6ICdBIFRyaXAgdG8gRG9sbScsXG4gICAgICAgICAgICAgICAgc291cmNlOiAnZGF0YScsXG4gICAgICAgICAgICAgICAgcGF0aDogJ21vZHVsZXMvZWNyL2ltYWdlcy9iYXNpbGlzay1hc3Rlcmlzay9hLXRyaXAtdG8tZG9sbScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdpbWFnZXMnLFxuICAgICAgICAgICAgICAgIHB1Ymxpc2hlcjogJ2Jhc2lsaXNrLWFzdGVyaXNrJyxcbiAgICAgICAgICAgICAgICBwYWNrOiAnRGVtb25pYyBSdW5lcycsXG4gICAgICAgICAgICAgICAgc291cmNlOiAnZGF0YScsXG4gICAgICAgICAgICAgICAgcGF0aDogJ21vZHVsZXMvZWNyL2ltYWdlcy9iYXNpbGlzay1hc3Rlcmlzay9kZW1vbmljLXJ1bmVzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2ltYWdlcycsXG4gICAgICAgICAgICAgICAgcHVibGlzaGVyOiAnYmFzaWxpc2stYXN0ZXJpc2snLFxuICAgICAgICAgICAgICAgIHBhY2s6ICdFbHplbW9uIGFuZCB0aGUgQmxvb2QtRHJpbmtpbmcgQm94JyxcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICdkYXRhJyxcbiAgICAgICAgICAgICAgICBwYXRoOiAnbW9kdWxlcy9lY3IvaW1hZ2VzL2Jhc2lsaXNrLWFzdGVyaXNrL2VsemVtb24tYW5kLXRoZS1ibG9vZC1kcmlua2luZy1ib3gnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2VzJyxcbiAgICAgICAgICAgICAgICBwdWJsaXNoZXI6ICdiYXNpbGlzay1hc3RlcmlzaycsXG4gICAgICAgICAgICAgICAgcGFjazogJ0hlcmFsZHJ5JyxcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICdkYXRhJyxcbiAgICAgICAgICAgICAgICBwYXRoOiAnbW9kdWxlcy9lY3IvaW1hZ2VzL2Jhc2lsaXNrLWFzdGVyaXNrL2hlcmFsZHJ5JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2ltYWdlcycsXG4gICAgICAgICAgICAgICAgcHVibGlzaGVyOiAnYmFzaWxpc2stYXN0ZXJpc2snLFxuICAgICAgICAgICAgICAgIHBhY2s6ICdNYW1hIEh1bmdyeScsXG4gICAgICAgICAgICAgICAgc291cmNlOiAnZGF0YScsXG4gICAgICAgICAgICAgICAgcGF0aDogJ21vZHVsZXMvZWNyL2ltYWdlcy9iYXNpbGlzay1hc3Rlcmlzay9tYW1hLWh1bmdyeScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdpbWFnZXMnLFxuICAgICAgICAgICAgICAgIHB1Ymxpc2hlcjogJ2Jhc2lsaXNrLWFzdGVyaXNrJyxcbiAgICAgICAgICAgICAgICBwYWNrOiAnUGFydHkgUG9vcGVycycsXG4gICAgICAgICAgICAgICAgc291cmNlOiAnZGF0YScsXG4gICAgICAgICAgICAgICAgcGF0aDogJ21vZHVsZXMvZWNyL2ltYWdlcy9iYXNpbGlzay1hc3Rlcmlzay9wYXJ0eS1wb29wZXJzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2ltYWdlcycsXG4gICAgICAgICAgICAgICAgcHVibGlzaGVyOiAnYmFzaWxpc2stYXN0ZXJpc2snLFxuICAgICAgICAgICAgICAgIHBhY2s6ICdTYWlsb3JzIG9uIHRoZSBTdGFybGVzcyBTZWEnLFxuICAgICAgICAgICAgICAgIHNvdXJjZTogJ2RhdGEnLFxuICAgICAgICAgICAgICAgIHBhdGg6ICdtb2R1bGVzL2Vjci9pbWFnZXMvYmFzaWxpc2stYXN0ZXJpc2svc2FpbG9ycy1vbi10aGUtc3Rhcmxlc3Mtc2VhJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2ltYWdlcycsXG4gICAgICAgICAgICAgICAgcHVibGlzaGVyOiAnYmFzaWxpc2stYXN0ZXJpc2snLFxuICAgICAgICAgICAgICAgIHBhY2s6ICdVdGlsaXR5JyxcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICdkYXRhJyxcbiAgICAgICAgICAgICAgICBwYXRoOiAnbW9kdWxlcy9lY3IvaW1hZ2VzL2Jhc2lsaXNrLWFzdGVyaXNrL3V0aWxpdHknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2VzJyxcbiAgICAgICAgICAgICAgICBwdWJsaXNoZXI6ICdiYXNpbGlzay1hc3RlcmlzaycsXG4gICAgICAgICAgICAgICAgcGFjazogJ1doZXJlIHRoZSBXaGl0ZSBUaGluZ3MgQXJlJyxcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICdkYXRhJyxcbiAgICAgICAgICAgICAgICBwYXRoOiAnbW9kdWxlcy9lY3IvaW1hZ2VzL2Jhc2lsaXNrLWFzdGVyaXNrL3doZXJlLXRoZS13aGl0ZS10aGluZ3MtYXJlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgZ2FtZS5tb3VsaW5ldHRlLnNvdXJjZXMucHVzaCguLi5zb3VyY2VzKTtcblxuICAgICAgICBsb2dnZXIoJ1NvdXJjZXMgdXBkYXRlZCcpO1xuICAgIH1cblxuICAgIGcuRUNSID0ge1xuICAgICAgICByb2xsTlBDVG9rZW5IaXRQb2ludHMsXG4gICAgICAgIGxpZ2h0U291cmNlcyxcbiAgICAgICAgdmlzaW9uVHlwZXMsXG4gICAgfTtcbn0pO1xuXG5Ib29rcy5vbignY3JlYXRlVG9rZW4nLCByb2xsTlBDVG9rZW5IaXRQb2ludHMpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuXG4gICAgICAgIGlmIChtb2R1bGUuaG90LnN0YXR1cygpID09PSAnYXBwbHknKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRlbXBsYXRlIGluIF90ZW1wbGF0ZUNhY2hlKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGVtcGxhdGVDYWNoZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIF90ZW1wbGF0ZUNhY2hlW3RlbXBsYXRlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFRlbXBsYXRlUHJlbG9hZGVyLnByZWxvYWRIYW5kbGViYXJzVGVtcGxhdGVzKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBhcHBsaWNhdGlvbiBpbiB1aS53aW5kb3dzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1aS53aW5kb3dzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdWkud2luZG93c1thcHBsaWNhdGlvbl0ucmVuZGVyKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=