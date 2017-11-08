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
var component_data_service_1 = require('../common/services/component.data.service');
var HeaderComponent = (function () {
    function HeaderComponent(route, router, componentDataService) {
        this.route = route;
        this.router = router;
        this.componentDataService = componentDataService;
        this.dataJSON = 'app/feeds/header.json';
        this.title = 'Get ';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jsonDatas = '';
        this.componentDataService.getComponentJSON(this.dataJSON)
            .subscribe(function (val) { _this.jsonDatas = val; });
        console.log(this.jsonDatas.id + 'inside header');
    };
    ;
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: './src/app/header/header.component.html',
            styleUrls: ['./src/app/app.component.css', './src/app/header/header.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [
                component_data_service_1.ComponentDataService,
            ]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, component_data_service_1.ComponentDataService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
;
//# sourceMappingURL=header.component.js.map