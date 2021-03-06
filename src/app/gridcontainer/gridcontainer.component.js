"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var GridcontainerComponent = (function () {
    function GridcontainerComponent(route, router) {
        this.route = route;
        this.router = router;
        this.bgimage = 'url';
        this.title = 'Get';
    }
    GridcontainerComponent.prototype.ngOnInit = function () {
        console.log('inside grid container');
    };
    ;
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], GridcontainerComponent.prototype, "bgimage", void 0);
    GridcontainerComponent = __decorate([
        core_1.Component({
            selector: 'grid-container',
            templateUrl: './src/app/gridcontainer/gridcontainer.component.html',
            styleUrls: ['./src/app/app.component.css', './src/app/gridcontainer/gridcontainer.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], GridcontainerComponent);
    return GridcontainerComponent;
}());
exports.GridcontainerComponent = GridcontainerComponent;
;
//# sourceMappingURL=gridcontainer.component.js.map