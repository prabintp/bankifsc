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
// import { Book } from './book';
var BookFilterPipe = (function () {
    function BookFilterPipe() {
    }
    BookFilterPipe.prototype.transform = function (items, filter) {
        var _this = this;
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(function (item) { return _this.applyFilter(item, filter); });
    };
    /**
     * Perform the filtering.
     *
     * @param {Book} book The book to compare to the filter.
     * @param {Book} filter The filter to apply.
     * @return {boolean} True if book satisfies filters, false if not.
     */
    BookFilterPipe.prototype.applyFilter = function (book, filter) {
        for (var field in filter) {
            if (filter[field]) {
                if (typeof filter[field] === 'string') {
                    if (book[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
                        return false;
                    }
                }
                else if (typeof filter[field] === 'number') {
                    if (book[field] !== filter[field]) {
                        return false;
                    }
                }
            }
        }
        return true;
    };
    BookFilterPipe = __decorate([
        core_1.Pipe({
            name: 'bookfilter',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], BookFilterPipe);
    return BookFilterPipe;
}());
exports.BookFilterPipe = BookFilterPipe;
//# sourceMappingURL=filter.pipe.js.map