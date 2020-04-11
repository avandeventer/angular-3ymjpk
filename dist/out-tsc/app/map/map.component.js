var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LOCATIONS } from '../locations';
import { Player } from '../player';
var MapComponent = /** @class */ (function () {
    function MapComponent() {
        this.playerResolve = new EventEmitter();
        this.locationChosen = false;
        this.MAP_LOCATION = { id: 0, name: 'Places in Between' };
        this.selectedLocation = this.MAP_LOCATION;
        this.locations = LOCATIONS;
    }
    MapComponent.prototype.ngOnInit = function () { };
    MapComponent.prototype.locationChange = function (location) {
        this.locationChosen = true;
        this.selectedLocation = location;
    };
    MapComponent.prototype.returnToMap = function () {
        this.locationChosen = false;
        this.selectedLocation = this.MAP_LOCATION;
    };
    MapComponent.prototype.switchPlayer = function (resolvedPlayer) {
        this.activePlayer = resolvedPlayer;
        this.playerResolve.emit(resolvedPlayer);
    };
    __decorate([
        Input(),
        __metadata("design:type", Player)
    ], MapComponent.prototype, "activePlayer", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "playerResolve", void 0);
    MapComponent = __decorate([
        Component({
            selector: 'map',
            templateUrl: './map.component.html',
            styleUrls: ['./map.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());
export { MapComponent };
//# sourceMappingURL=map.component.js.map