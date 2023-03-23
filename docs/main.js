"use strict";
(self["webpackChunkwedApp"] = self["webpackChunkwedApp"] || []).push([["main"],{

/***/ 721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _itemlist_itemlist_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./itemlist/itemlist.component */ 3388);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 9288);




const _c0 = ["container"];
class AppComponent {
  constructor(title) {
    title.setTitle('Karolina e Lucas');
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  viewQuery: function AppComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    }
  },
  decls: 8,
  vars: 0,
  consts: [[1, "container"], ["container", ""], [1, "container", "nopad"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1)(2, "table")(3, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "tr")(6, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "app-itemlist");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_itemlist_itemlist_component__WEBPACK_IMPORTED_MODULE_0__.ItemlistComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent],
  styles: [".nopad[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.darker[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksb0NBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5ub3BhZCB7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG4uZGFya2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 23:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 721);
/* harmony import */ var _itemlist_itemlist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itemlist/itemlist.component */ 3388);
/* harmony import */ var _itemlist_item_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./itemlist/item/item.component */ 8442);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ 9288);
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularx-qrcode */ 9180);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, angularx_qrcode__WEBPACK_IMPORTED_MODULE_6__.QRCodeModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _itemlist_itemlist_component__WEBPACK_IMPORTED_MODULE_1__.ItemlistComponent, _itemlist_item_item_component__WEBPACK_IMPORTED_MODULE_2__.ItemComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, angularx_qrcode__WEBPACK_IMPORTED_MODULE_6__.QRCodeModule]
  });
})();

/***/ }),

/***/ 9288:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

const _c0 = ["banner"];
class HeaderComponent {
  ngOnInit() {
    const image = this.banner.nativeElement;
    const maxWidth = Math.min(window.innerWidth - 100, 800);
    image.style.maxWidth = `${maxWidth}px`;
  }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)();
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  viewQuery: function HeaderComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.banner = _t.first);
    }
  },
  decls: 7,
  vars: 0,
  consts: [[1, "jumbotron", "container"], ["src", "assets/banner2.png", 1, "mx-auto", "d-block", "banner"], ["banner", ""], [1, "text"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Oi! Seja bem-vindo a nossa lista de presentes ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Sua presen\u00E7a j\u00E1 \u00E9 nosso presente, mas caso queira nos presentear ainda mais, pensamos em tudo com muito carinho para que voc\u00EA se sinta \u00E0 vontade de escolher o que preferir. J\u00E1 temos um lar cheio de amor e carinho, por isso fizemos a lista pensando em experi\u00EAncias para a nossa Lua de Mel ser ainda mais especial. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  styles: [".text[_ngcontent-%COMP%] {\n  font-weight: normal !important;\n  margin: 20px 0px;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  text-align: justify;\n}\n\n.jumbotron[_ngcontent-%COMP%] {\n  padding: 20px;\n  width: 100vw;\n}\n\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 20px 0px 50px 0px;\n}\n\n.banner[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQge1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDIwcHggMHB4O1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5qdW1ib3Ryb24ge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgd2lkdGg6IDEwMHZ3O1xufVxuXG5oMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMjBweCAwcHggNTBweCAwcHg7XG59XG5cbi5iYW5uZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 8442:
/*!*************************************************!*\
  !*** ./src/app/itemlist/item/item.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemComponent": () => (/* binding */ ItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var qrcode_pix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qrcode-pix */ 7623);
/* harmony import */ var qrcode_pix__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qrcode_pix__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/clipboard */ 6079);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularx-qrcode */ 9180);






const _c0 = ["itemContainer"];
const _c1 = function (a0) {
  return {
    "show-icon": a0
  };
};
function ItemComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "qrcode", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div")(3, "div", 10)(4, "table")(5, "tr")(6, "td")(7, "div", 11)(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Muito obrigado pelo presente! Utilize o QR Code acima para fazer um PIX ou pressione o bot\u00E3o abaixo para utilizar o PIX copia e cola. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tr")(11, "td")(12, "div", 11)(13, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItemComponent_div_14_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.copyPix());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("qrdata", ctx_r0.pixKey)("width", 256)("errorCorrectionLevel", "M");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.copyPixText);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c1, ctx_r0.showIcon));
  }
}
class ItemComponent {
  constructor(elementRef, clipboard) {
    this.elementRef = elementRef;
    this.clipboard = clipboard;
    this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.isRowHidden = true;
    this.pixKey = '';
    this.showIcon = false;
    this.copyPixText = 'Pix Copia e Cola';
  }
  gift() {
    this.click.emit({
      item: this.item,
      ref: this.elementRef
    });
    this.isRowHidden = false;
    this.pixKey = this.generateLink();
    console.log(this.pixKey);
  }
  generateLink() {
    const qrCodePix = (0,qrcode_pix__WEBPACK_IMPORTED_MODULE_0__.QrCodePix)({
      version: '01',
      key: '12551679630',
      name: 'Lucas Riera Abbade',
      city: 'SAO PAULO',
      message: this.item.name,
      value: this.item.price
    });
    return qrCodePix.payload();
  }
  copyPix() {
    this.clipboard.copy(this.pixKey);
    this.showIcon = true;
    this.copyPixText = 'Copiado!';
    setTimeout(() => {
      this.showIcon = false;
    }, 2000);
  }
}
ItemComponent.ɵfac = function ItemComponent_Factory(t) {
  return new (t || ItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__.Clipboard));
};
ItemComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ItemComponent,
  selectors: [["app-item"]],
  viewQuery: function ItemComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.itemContainer = _t.first);
    }
  },
  inputs: {
    item: "item"
  },
  outputs: {
    click: "click"
  },
  decls: 15,
  vars: 5,
  consts: [[1, "item-container"], [1, "image-container"], [3, "src"], [1, "description-container"], [1, "payment-details"], [1, "price"], [1, "btn", "btn-secondary", 3, "click"], ["class", "pay-row", 4, "ngIf"], [1, "pay-row"], [3, "qrdata", "width", "errorCorrectionLevel"], [1, "d-flex", "align-items-center", "pix-div"], [1, "description-container", "payment-details"], [1, "btn", "btn-secondary", "pix-copy-btn", 3, "click"], [1, "clipboard-icon", 3, "ngClass"], [1, "fas", "fa-clipboard-check"]],
  template: function ItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4)(9, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span")(12, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItemComponent_Template_button_click_12_listener() {
        return ctx.gift();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Presentear");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ItemComponent_div_14_Template, 17, 7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.item.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.item.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.item.description);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.item.priceStr);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isRowHidden);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, angularx_qrcode__WEBPACK_IMPORTED_MODULE_4__.QRCodeComponent],
  styles: [".item-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 10px;\n  box-shadow: 2px 2px 10px #ccc;\n  width: 350px;\n}\n\n.image-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  height: auto;\n}\n\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.description-container[_ngcontent-%COMP%] {\n  display: block;\n  flex: 1 1 auto;\n  top: 0;\n  left: 0;\n  width: 100%;\n  text-align: justify;\n  padding: 15px 15px 0px 15px;\n}\n\np[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n\n.price[_ngcontent-%COMP%]::before {\n  content: \"R$ \";\n}\n\n.price[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #333;\n  font-weight: bold;\n}\n\n  .qrcode {\n  display: flex;\n  justify-content: center;\n}\n\n.pix-div[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n  height: 30vh;\n}\n\n\n.clipboard-icon[_ngcontent-%COMP%] {\n  display: none;\n  margin-left: 10px;\n}\n\n\n.clipboard-icon.show-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  animation: _ngcontent-%COMP%_fade-out 2s;\n}\n\n\n@keyframes _ngcontent-%COMP%_fade-out {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n.payment-details[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n  display: flex;\n  justify-content: center;\n}\n\n.payment-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 15px 20px;\n}\n\n.pix-copy-btn[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaXRlbWxpc3QvaXRlbS9pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQSx1Q0FBQTtBQUNBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUEsK0RBQUE7QUFDQTtFQUNJLHFCQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQSxpQ0FBQTtBQUNBO0VBQ0k7SUFBTyxVQUFBO0VBRVQ7RUFERTtJQUFLLFVBQUE7RUFJUDtBQUNGO0FBRkE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUlKOztBQURBO0VBQ0ksaUJBQUE7QUFJSjs7QUFEQTtFQUNJLG1CQUFBO0FBSUoiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4ICNjY2M7XG4gICAgd2lkdGg6IDM1MHB4O1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uZGVzY3JpcHRpb24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIHBhZGRpbmc6IDE1cHggMTVweCAwcHggMTVweDtcbn1cblxucCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ucHJpY2U6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJSJCBcIjtcbn1cblxuLnByaWNlIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbjo6bmctZGVlcCAucXJjb2RlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucGl4LWRpdiB7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMzB2aDtcbn1cblxuLyogSGlkZSB0aGUgY2xpcGJvYXJkIGljb24gYnkgZGVmYXVsdCAqL1xuLmNsaXBib2FyZC1pY29uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4vKiBTaG93IHRoZSBjbGlwYm9hcmQgaWNvbiB3aGVuIHRoZSBzaG93SWNvbiBwcm9wZXJ0eSBpcyB0cnVlICovXG4uY2xpcGJvYXJkLWljb24uc2hvdy1pY29uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYW5pbWF0aW9uOiBmYWRlLW91dCAycztcbn1cblxuLyogRGVmaW5lIHRoZSBmYWRlLWluIGFuaW1hdGlvbiAqL1xuQGtleWZyYW1lcyBmYWRlLW91dCB7XG4gICAgZnJvbSB7IG9wYWNpdHk6IDE7IH1cbiAgICB0byB7IG9wYWNpdHk6IDA7IH1cbn1cblxuLnBheW1lbnQtZGV0YWlscyB7XG4gICAgcGFkZGluZzogMHB4IDE1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnBheW1lbnQtZGV0YWlscyBzcGFuIHtcbiAgICBtYXJnaW46IDE1cHggMjBweDtcbn1cblxuLnBpeC1jb3B5LWJ0biB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 5136:
/*!*********************************************!*\
  !*** ./src/app/itemlist/item/item.model.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Item": () => (/* binding */ Item)
/* harmony export */ });
class Item {
  constructor(name, description, image, price) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.price = price;
    this.priceStr = price.toFixed(2);
  }
}

/***/ }),

/***/ 3388:
/*!************************************************!*\
  !*** ./src/app/itemlist/itemlist.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemlistComponent": () => (/* binding */ ItemlistComponent)
/* harmony export */ });
/* harmony import */ var _item_item_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item/item.model */ 5136);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item/item.component */ 8442);




function ItemlistComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "app-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ItemlistComponent_div_1_Template_app_item_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.onItemClicked($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", item_r1);
  }
}
class ItemlistComponent {
  constructor() {
    this.items = [new _item_item_model__WEBPACK_IMPORTED_MODULE_0__.Item('Tour guiada por Tokyo', 'Esta excursão de meio dia é a escolha ideal para viajantes com pouco tempo que visitam Tóquio. Evite o incômodo de navegar com um guia particular para levá-lo pela cidade. Uma vantagem do passeio é que você não perderá tempo indo a pontos turísticos que não lhe interessam, pois o trajeto pode ser customizado. Um exemplo de itinerário pode incluir o Templo Senso-ji em Asakusa, Shibuya Crossing, Rua Takeshita em Harajuku, Palácio Imperial e Jardim Nacional Shinjuku Gyoen.', 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/09/5b/3a/05.jpg', 476.84), new _item_item_model__WEBPACK_IMPORTED_MODULE_0__.Item('Ingressos para Universal Studios Japan', '#WEAREMARIO! Aqui vamos desfrutar do primeiro parque temático SUPER NINTENDO WORLD do mundo! Além das incríveis atrações de Harry Potter, Jurassic Park entre muitas outras do universo cinematográfico. ', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/33/49/48/super-nintendo-world.jpg?w=1200&h=-1&s=1', 660.00), new _item_item_model__WEBPACK_IMPORTED_MODULE_0__.Item('Tour Culinária Noturna em Shibuya', 'Experimente a comida e a cultura japonesa durante este passeio a pé pelo distrito de Shibuya, em Tóquio. Fuja das hordas de turistas enquanto come como um japonês local, provando pratos favoritos como \'okonomiyaki\' (panquecas de ovo salgadas), espetos de carne Wagyu e muito mais nos restaurantes e pontos de encontro fora dos roteiros mais conhecidos da área.', 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/a1/ed/e6.jpg', 969.76), new _item_item_model__WEBPACK_IMPORTED_MODULE_0__.Item('Ingressos para Tokyo Disneyland', 'Parque temático exótico e encantador, baseado nas histórias de Walt Disney foi o primeiro construído fora dos EUA, em 1983. É um destino obrigatório para os fãs do amado Mickey Mouse.', 'https://media2.tokyodisneyresort.jp/home/top/main/2023/02/mainR_01.jpg', 570.00), new _item_item_model__WEBPACK_IMPORTED_MODULE_0__.Item('Kart na Rua em Tokyo', 'Extremamente emocionante e uma experiência obrigatória quando você visita Tóquio no Japão. Imagine-se em um kart personalizado feito especificamente para realizar a experiência de kart de super-herói da vida real!', 'https://classic.exame.com/wp-content/uploads/2016/09/size_960_16_9_20151020-25144-104f4tu.jpg?quality=70&strip=info&w=920', 330.00), new _item_item_model__WEBPACK_IMPORTED_MODULE_0__.Item('Corrida Super GT3 em Suzuka + ingresso Suzuka Park MOTOPIA', 'Ingressos para corrida Super GT3 no autódromo de Suzuka e passeio no parque MOTOPIA', 'https://supergtworld.files.wordpress.com/2018/05/nismo_supergt_suzuka_17_38-1200x800-e1525729453572.jpg', 227.00), new _item_item_model__WEBPACK_IMPORTED_MODULE_0__.Item('BlackPink in Concert Osaka', 'Show do BlackPink em Osaka', 'https://veja.abril.com.br/wp-content/uploads/2022/09/GettyImages-1143890227.jpg.jpg?quality=70&strip=info&w=1280&h=720&crop=1', 577.00), new _item_item_model__WEBPACK_IMPORTED_MODULE_0__.Item('Ghibli Park', 'Ingresso para visitar o parque do estúdio Ghibli', 'https://images.lifestyleasia.com/wp-content/uploads/sites/6/2022/01/28103919/Cropped-1643291802photo_SXM2022012700004666.jpg-1600x900.png?tr=w-1600', 77.00), new _item_item_model__WEBPACK_IMPORTED_MODULE_0__.Item('teamLab Planets Tokyo', 'Museu de arte digital imersivo', 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/ea/a3/07.jpg', 123.00), new _item_item_model__WEBPACK_IMPORTED_MODULE_0__.Item('Jantar Kaiseki com Apresentação Geisha', 'Vista um quimono e saboreie um jantar kaiseki com vários pratos enquanto se diverte com uma apresentação de gueixa. Um anfitrião recebe você em um autêntico restaurante japonês em Tóquio durante esta experiência noturna de 3 horas. Acomode-se com um pequeno grupo enquanto são servidos pratos tradicionais e converse com as gueixas que são treinadas em dança, música e arte da comunicação.', 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/e4/fa/14.jpg', 1072.89), new _item_item_model__WEBPACK_IMPORTED_MODULE_0__.Item('Castelo De Hiroshima', 'Visita a recriação moderna do castelo de Hiroshima, destruído pela bomba atômica em 1945.', 'https://www.japan-guide.com/g21/3042_21.jpg', 30.00), new _item_item_model__WEBPACK_IMPORTED_MODULE_0__.Item('Bar Crawling em Shinjuku', 'Mergulhar na rica vida noturna de Tóquio pode ser intimidante para os visitantes do Japão. Este passeio a pé privado pelo colorido distrito de Shinjuku, repleto de néon, promete uma autêntica experiência japonesa sem a barreira do idioma ou a preocupação com a etiqueta. Seu guia o levará a uma seleção de bares no Golden Gai e a Omoide Yokocho, onde você conhecerá os habitantes locais e aprenderá tudo sobre a cultura de bebida de Tóquio.', 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/bf/10/07.jpg', 407.58), new _item_item_model__WEBPACK_IMPORTED_MODULE_0__.Item('Tokyo Skytree', 'Visita na Tokyo Skytree, uma torre de transmissão e observação em Sumida, Tóquio. Em sua inauguração em 2011 era a torre mais alta do mundo, com 634 metros.', 'https://www.japan-guide.com/g18/3064_01a.jpg', 104.00)
    // new Item('nome', 'descricao', 'https://www.imagem.jpg', 10.00),
    ];
  }

  onItemClicked(itemRef) {
    itemRef.ref?.nativeElement.scrollIntoView({
      behavior: 'smooth'
    });
    console.log(itemRef.item);
  }
}
ItemlistComponent.ɵfac = function ItemlistComponent_Factory(t) {
  return new (t || ItemlistComponent)();
};
ItemlistComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ItemlistComponent,
  selectors: [["app-itemlist"]],
  decls: 2,
  vars: 1,
  consts: [[1, "item-container"], [4, "ngFor", "ngForOf"], [3, "item", "click"]],
  template: function ItemlistComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ItemlistComponent_div_1_Template, 2, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.items);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _item_item_component__WEBPACK_IMPORTED_MODULE_1__.ItemComponent],
  styles: [".item-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.item[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaXRlbWxpc3QvaXRlbWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaXRlbSB7XG4gICAgZmxleDogMCAwIGF1dG87XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4766:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 23);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4766);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map