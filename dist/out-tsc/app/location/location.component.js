var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { STORIES } from '../stories';
import { Location } from '../location';
import { LOCATIONS } from '../locations';
var LocationComponent = /** @class */ (function () {
    function LocationComponent() {
        this.locationChosen = false;
        this.MAP_LOCATION = { id: 0, name: 'Places in Between' };
        this.selectedLocation = this.MAP_LOCATION;
        this.locations = LOCATIONS;
        this.stories = STORIES;
    }
    LocationComponent.prototype.ngOnInit = function () {
    };
    LocationComponent.prototype.locationChange = function (location) {
        this.locationChosen = true;
        this.selectedLocation = location;
        // console.log("HEY LOOK " + this.selectedLocation.name);
    };
    LocationComponent.prototype.returnToMap = function () {
        this.locationChosen = false;
        this.selectedLocation = this.MAP_LOCATION;
        // console.log("HEY LISTEN"+ this.selectedLocation.name);
    };
    __decorate([
        Input(),
        __metadata("design:type", Location)
    ], LocationComponent.prototype, "location", void 0);
    LocationComponent = __decorate([
        Component({
            selector: 'location',
            templateUrl: './location.component.html',
            styleUrls: ['./location.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], LocationComponent);
    return LocationComponent;
}());
export { LocationComponent };
//# sourceMappingURL=location.component.js.map