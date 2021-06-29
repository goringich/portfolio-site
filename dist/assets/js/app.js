/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/mobileNav.js":
/*!************************************!*\
  !*** ./src/assets/js/mobileNav.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const burger = document.getElementById(\"sidebar__toggle\")\r\nconst sidebar = document.getElementById(\"sidebar\")\r\nconst page = document.getElementById(\"page\")\r\nconst body = document.body\r\n\r\nburger.addEventListener(\"click\", event => {\r\n    if (body.classList.contains(\"show-sidebar\")){\r\n        closeSidebar()\r\n    }else{\r\n        showSidebar()\r\n    }   \r\n})\r\n\r\nfunction showSidebar(){\r\n    let mask = document.createElement(\"div\")\r\n    mask.classList.add(\"page__mask\")\r\n    mask.addEventListener(\"click\", closeSidebar)\r\n    page.appendChild(mask)\r\n\r\n    body.classList.add(\"show-sidebar\")\r\n}\r\n\r\nfunction closeSidebar(){\r\n    body.classList.remove(\"show-sidebar\")\r\n    document.querySelector(\".page__mask\").remove()\r\n}\r\n\r\nshowSidebar()\n\n//# sourceURL=webpack:///./src/assets/js/mobileNav.js?");

/***/ }),

/***/ "./src/assets/js/modal.js":
/*!********************************!*\
  !*** ./src/assets/js/modal.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const modalBtn = document.querySelectorAll(\"[data-modal]\")\r\nconst body = document.body\r\nconst modalClose = document.querySelectorAll(\".modal__close\")\r\nconst modal = document.querySelectorAll(\".modal\")\r\n\r\nmodalBtn.forEach(item => {\r\n    item.addEventListener(\"click\", event => {\r\n        let $this = event.currentTarget;\r\n        let modalId = $this.getAttribute(\"data-modal\")\r\n        let modal = document.getElementById(modalId)\r\n        let modalContent = modal.querySelector(\".modal__content\")\r\n\r\n        modalContent.addEventListener(\"click\", event => {\r\n            event.stopPropagation()\r\n        })\r\n        \r\n        body.classList.add(\"no-scroll\");\r\n        modal.classList.add(\"show\");\r\n\r\n        setTimeout(() => {\r\n            modalContent.style.transform = \"none\";\r\n            modalContent.style.opacity = \"1\";\r\n        }, 1)\r\n    })\r\n})\r\n\r\nmodalClose.forEach(item => {\r\n    item.addEventListener(\"click\", event => {\r\n        let currentModal = event.currentTarget.closest(\".modal\");\r\n\r\n        closeModal(currentModal)\r\n    })\r\n})\r\n\r\nmodal.forEach(item => {\r\n    item.addEventListener(\"click\", event => {\r\n        let currentModal = event.currentTarget;\r\n\r\n        closeModal(currentModal)\r\n    })\r\n})\r\n\r\nfunction closeModal(currentModal){\r\n    let modalContent = currentModal.querySelector(\".modal__content\")\r\n    modalContent.removeAttribute(\"style\");\r\n\r\n    setTimeout(() => {\r\n        body.classList.remove(\"no-scroll\")\r\n        currentModal.classList.remove(\"show\")\r\n    }, 200)\r\n}\n\n//# sourceURL=webpack:///./src/assets/js/modal.js?");

/***/ }),

/***/ "./src/assets/js/post.js":
/*!*******************************!*\
  !*** ./src/assets/js/post.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let items = [\r\n    {\r\n        type: \"image\",\r\n        id: 0,\r\n        img: \"/assets/images/post/изображение_viber_2021-04-15_02-25-32.jpg\",\r\n        class: \"создание 3d моделей\",\r\n        title: \"Сколько стоит моя работа?\",\r\n        text: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.\",\r\n        data: \"22.12.2021\"\r\n    },\r\n    {\r\n        type: \"image\",\r\n        id: 1,\r\n        img: \"https://sun9-42.userapi.com/impg/uVsxTV9pxoWOupCJvQNrAltiRiQiPYdHkTz4Kg/1_z8nqjYXIU.jpg?size=1902x838&quality=96&sign=00ecbebc4d2cd5df93f8d28421042be1&type=album\",\r\n        class: \"продажа лам\",\r\n        title: \"С кем я работал?\",\r\n        text: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.\",\r\n        data: \"20.12.2021\"\r\n    },\r\n    {\r\n        type: \"video\",\r\n        id: 2,\r\n        video: \"https://www.youtube.com/embed/hpvxvVNEjtk\",\r\n        class: \"создание фильм/трейлеров\",\r\n        title: \"Как создавалалось это видео? Вот так оп оп\",\r\n        data: \"22.12.2021\"\r\n    },\r\n    {\r\n        type: \"image\",\r\n        id: 3,\r\n        img: \"/assets/images/stories/pink.jpg\",\r\n        class: \"создание 3d моделей\",\r\n        title: \"Как создавалась эта картина?\",\r\n        text: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.\",\r\n        data: \"20.12.2021\"\r\n    },\r\n    {\r\n        type: \"text\",\r\n        id: 4,\r\n        class: \"новость\",\r\n        text: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.\",\r\n        data: \"22.12.2021\"\r\n    }\r\n]\r\n\r\nconst toHTMLi = item1 => `\r\n    <article class=\"post\" id=\"${item1.id}\">\r\n        <div class=\"post__header post__header--preview\">\r\n            <a href=\"post.html\">\r\n                <img class=\"\" src=\"${item1.img}\" alt=\"/\">\r\n            </a>\r\n        </div>\r\n        <div class=\"post__content\">\r\n            <div class=\"post__subtitle\">\r\n                <a href=\"post.html\">${item1.title}</a>\r\n            </div>\r\n            <p class=\"post__text\">\r\n                ${item1.text}\r\n            </p>\r\n        </div>\r\n        <div class=\"post__footer\">\r\n            <ul class=\"post__data\">\r\n                <li class=\"post__data-item\">\r\n                    <time datetime=\"${item1.data}\">${item1.data}</time>\r\n                </li>\r\n                <li class=\"post__data-item\">\r\n                    <a href=\"post.html\">${item1.class}</a>\r\n                </li>\r\n            </ul>\r\n            <a href=\"post.html\" class=\"post__read\">читать</a>\r\n        </div>\r\n    </article>\r\n`\r\n\r\nconst toHTMLi2 = item4 => `\r\n    <article class=\"post\" id=\"${item4.id}\">\r\n        <div class=\"post__header post__header--preview\">\r\n            <a href=\"post.html\" class=\"preview\">\r\n                <img class=\"img\" src=\"${item4.img}\" alt=\"/\">\r\n            </a>\r\n        </div>\r\n        <div class=\"post__content\">\r\n            <div class=\"post__subtitle\">\r\n                <a href=\"post.html\">${item4.title}</a>\r\n            </div>\r\n            <p class=\"post__text\">\r\n                ${item4.text}\r\n            </p>\r\n        </div>\r\n        <div class=\"post__footer\">\r\n            <ul class=\"post__data\">\r\n                <li class=\"post__data-item\">\r\n                    <time datetime=\"${item4.data}\">${item4.data}</time>\r\n                </li>\r\n                <li class=\"post__data-item\">\r\n                    <a href=\"post.html\">${item4.class}</a>\r\n                </li>\r\n            </ul>\r\n            <a href=\"post.html\" class=\"post__read\">читать</a>\r\n        </div>\r\n    </article>\r\n`\r\n\r\nconst toHTMLt = item2 => `\r\n    <div class=\"post\" id=\"${item2.id}\">\r\n        <div class=\"post__content\">\r\n            <p class=\"post__text\">\r\n                ${item2.text}\r\n            </p>\r\n        </div>\r\n        <div class=\"post__footer\">\r\n            <ul class=\"post__data\">\r\n                <li class=\"post__data-item\">\r\n                    <time datetime=\"${item2.data}\">${item2.data}</time>\r\n                </li>\r\n                <li class=\"post__data-item\">\r\n                    <a href=\"post.html\">${item2.class}</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n`\r\n\r\nconst toHTMLv = item3 => `\r\n    <article class=\"post\" id=\"${item3.id}\">\r\n        <div class=\"post__header\">\r\n            <div class=\"embed\">\r\n                <iframe src=\"${item3.video}\" title=\"${item3.title}\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n            </div>\r\n        </div>\r\n        <div class=\"post__content\">\r\n            <div class=\"post__subtitle\">\r\n                <a href=\"\">${item3.title}</a>\r\n            </div>\r\n            <div class=\"post__text post__text--p0\"></div>\r\n        </div>\r\n        <div class=\"post__footer\">\r\n            <ul class=\"post__data\">\r\n                <li class=\"post__data-item\">\r\n                    <time datetime=\"${item3.data}\">${item3.data}</time>\r\n                </li>\r\n                <li class=\"post__data-item\">\r\n                    <a href=\"\">${item3.data}</a>\r\n                </li>\r\n            </ul>\r\n            <a href=\"\" class=\"post__read\">оставить комментарий</a>\r\n        </div>\r\n    </article>\r\n`\r\n\r\nitems.reverse()\r\n\r\nconst toHTML = {\r\n    'text' : toHTMLt,\r\n    'image': toHTMLi,\r\n    'imageN': toHTMLi2,\r\n    'video': toHTMLv\r\n};\r\n\r\nlet posts = document.querySelector(\".posts\")\r\n\r\nfunction render(){\r\n    posts.innerHTML = items.map(item => toHTML[item.type](item)).join('') + posts.innerHTML\r\n}\r\nrender()\r\n\r\nfunction create(){\r\n    id = items.length;\r\n    let text = document.getElementById(\"myTextarea\").value;\r\n    let image = document.getElementById('add-post-file').value;\r\n    // let image = document.querySelector('#add-post-file').files[0];\r\n    console.log(image, \"- image\")\r\n\r\n    if (image === \"\" || image === undefined){\r\n        items[id] = {\r\n            type: \"text\", id: id, text: text, class: \"новость\", data: \"28.06.2021\"\r\n        }\r\n    }\r\n    else if (image === undefined && text === \"\"){\r\n        console.log(\"none\")\r\n        items[id].style.display = \"none\"\r\n    }\r\n    else{\r\n        items[id] = {\r\n            type: \"imageN\", id: id, text: text, img: image, class: \"новость\", data: \"28.06.2021\"\r\n        }\r\n    }\r\n\r\n    posts.innerHTML = items.map(item => \r\n        toHTML[item.type](item)\r\n    ).join('')\r\n\r\n    document.getElementById(\"myTextarea\").value = \"\"\r\n    document.getElementById(\"add-post-file\").value = \"\"\r\n\r\n    console.log(items.length)\r\n}\r\n\r\nlet addPost = document.getElementById(\"postA\")\r\naddPost.addEventListener(\"click\", function (){\r\n    create()\r\n})\n\n//# sourceURL=webpack:///./src/assets/js/post.js?");

/***/ }),

/***/ "./src/assets/js/textArea.js":
/*!***********************************!*\
  !*** ./src/assets/js/textArea.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const textArea = document.querySelectorAll(\"[data-autoresize]\")\r\n\r\ntextArea.forEach(item => {\r\n    item.addEventListener(\"input\", event => {\r\n        let textAreaH = item.offsetHeight;\r\n        let $this = event.target;\r\n\r\n        $this.style.height = textAreaH + \"px\";\r\n        $this.style.height = $this.scrollHeight + \"px\";\r\n    })\r\n})\r\n\n\n//# sourceURL=webpack:///./src/assets/js/textArea.js?");

/***/ }),

/***/ 0:
/*!***********************************************************************************************************************!*\
  !*** multi ./src/assets/js/mobileNav.js ./src/assets/js/modal.js ./src/assets/js/post.js ./src/assets/js/textArea.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\projects\\personal-blog\\gulp4-project\\src\\assets\\js\\mobileNav.js */\"./src/assets/js/mobileNav.js\");\n__webpack_require__(/*! C:\\projects\\personal-blog\\gulp4-project\\src\\assets\\js\\modal.js */\"./src/assets/js/modal.js\");\n__webpack_require__(/*! C:\\projects\\personal-blog\\gulp4-project\\src\\assets\\js\\post.js */\"./src/assets/js/post.js\");\nmodule.exports = __webpack_require__(/*! C:\\projects\\personal-blog\\gulp4-project\\src\\assets\\js\\textArea.js */\"./src/assets/js/textArea.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/mobileNav.js_./src/assets/js/modal.js_./src/assets/js/post.js_./src/assets/js/textArea.js?");

/***/ })

/******/ });