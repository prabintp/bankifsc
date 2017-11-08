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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var IfscServices = (function () {
    function IfscServices(_http) {
        this._http = _http;
        this.getBanksUrl = 'http://localhost:4000/api/listbanks'; // URL to web api
        this.baseUrl = 'https://api916312.herokuapp.com/api/'; // URL to web api
    }
    IfscServices.prototype.getBanksList = function () {
        /*return this.http.get(this.getBanksUrl)
                   .toPromise()
                   .then(response => response.json().data)
                   .catch(this.handleError);*/
        return this._http.get(this.baseUrl + 'listbanks')
            .map(function (response) { return response.json().data; });
    };
    IfscServices.prototype.getStatesByBank = function (bank) {
        /*return this.http.get(this.getBanksUrl)
                   .toPromise()
                   .then(response => response.json().data)
                   .catch(this.handleError);*/
        return this._http.get(this.baseUrl + 'state/' + bank)
            .map(function (response) { return response.json().data; });
    };
    IfscServices.prototype.getDistricts = function (bank, state) {
        /*return this.http.get(this.getBanksUrl)
                   .toPromise()
                   .then(response => response.json().data)
                   .catch(this.handleError);*/
        return this._http.get(this.baseUrl + 'districts/' + bank + '/' + state)
            .map(function (response) { return response.json().data; });
    };
    IfscServices.prototype.getBranches = function (bank, state, district) {
        /*return this.http.get(this.getBanksUrl)
                   .toPromise()
                   .then(response => response.json().data)
                   .catch(this.handleError);*/
        return this._http.get(this.baseUrl + 'branches/' + bank + '/' + state + '/' + district)
            .map(function (response) { return response.json().data; });
    };
    IfscServices.prototype.getDetails = function (bank, state, district, branch) {
        /*return this.http.get(this.getBanksUrl)
                   .toPromise()
                   .then(response => response.json().data)
                   .catch(this.handleError);*/
        return this._http.get(this.baseUrl + 'getbankdetails/' + bank + '/' + state + '/' + district + '/' + branch)
            .map(function (response) { return response.json(); });
    };
    IfscServices.prototype.getSearchResult = function (query, page) {
        /*return this.http.get(this.getBanksUrl)
                   .toPromise()
                   .then(response => response.json().data)
                   .catch(this.handleError);*/
        return this._http.get(this.baseUrl + 'search/' + query)
            .map(function (response) { return response.json(); });
    };
    IfscServices.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    IfscServices = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], IfscServices);
    return IfscServices;
}());
exports.IfscServices = IfscServices;
//# sourceMappingURL=ifsc.api.service.js.map