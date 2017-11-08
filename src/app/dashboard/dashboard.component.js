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
var ifsc_service_1 = require('../common/services/ifsc.service');
var gridcontainer_component_1 = require('../gridcontainer/gridcontainer.component');
var search_form_component_1 = require('../search/search-form/search-form.component');
var FIRST_PAGE = 1;
var DashboardComponent = (function () {
    function DashboardComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
        this.title = 'Dashboard';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.banks = [];
        this.heroService.getHeroes()
            .subscribe(function (banks) { _this.banks = banks; });
        // console.log(heroes);
    };
    DashboardComponent.prototype.onSearchSubmit = function (qry) {
        this.query = qry;
        console.log(qry + 'login data');
        this.router.navigate(['search'], { queryParams: { qry: qry, page: FIRST_PAGE } });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'router-outlet',
            templateUrl: 'app/dashboard/dashboard.component.html',
            providers: [
                ifsc_service_1.HeroService,
            ],
            directives: [gridcontainer_component_1.GridcontainerComponent, search_form_component_1.SearchFormComponent],
        }), 
        __metadata('design:paramtypes', [ifsc_service_1.HeroService, router_1.Router])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map