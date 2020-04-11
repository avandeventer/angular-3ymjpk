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
import { Location } from '../location';
import { Player } from '../player';
import { AngularFirestore } from 'angularfire2/firestore';
var EncounterComponent = /** @class */ (function () {
    function EncounterComponent(db) {
        this.db = db;
        this.playerResolve = new EventEmitter();
        this.choiceSelected = false;
    }
    EncounterComponent.prototype.ngOnInit = function () {
        this.storiesCollection = this.db.collection('stories');
        this.stories = this.storiesCollection.valueChanges();
        // this.stories.subscribe()
        this.stories.subscribe({
            next: function (msg) {
                console.log(msg);
                // this.selectedStory = this.deserializeDatabaseStory(msg[0]);
                this.storiesCollection = msg;
                console.log(this.storiesCollection);
            },
            error: function () { console.log("An error occurred."); }
        });
        if (this.storiesCollection.valueChanges()) {
            this.selectedStory = this.storiesCollection[0];
        }
    };
    EncounterComponent.prototype.deserializeDatabaseStory = function (databaseStory) {
        var angularStory;
        angularStory.locationName = databaseStory.locationName;
        angularStory.storyDescription = databaseStory.storyDescription;
        angularStory.storyTitle = databaseStory.storyTitle;
        angularStory.storyOptions = databaseStory.storyOptions;
        angularStory.played = databaseStory.played;
        angularStory.authorPlayerId = databaseStory.authorPlayerId;
        return angularStory;
    };
    EncounterComponent.prototype.locationResolve = function (location) {
        console.log("Encounter!" + location.id);
        // this.selectedStory = this.stories.filter(locationStory => {
        //   return (locationStory.id === locationId)
        // });
        // this.selectedStory { locationId: number } = locationStories[0];
        // this.selectedStory = stories[Math.floor(Math.random() * this.stories.length)];  
    };
    EncounterComponent.prototype.isGreaterThanZero = function (stat) {
        return stat > 0;
    };
    EncounterComponent.prototype.choiceSelect = function (optionSelected) {
        this.choiceSelected = true;
        this.selectedChoice = optionSelected;
        this.activePlayer.charisma = this.activePlayer.charisma + optionSelected.charisma;
        this.activePlayer.intellect = this.activePlayer.intellect + optionSelected.intellect;
        this.activePlayer.dexterity = this.activePlayer.dexterity + optionSelected.dexterity;
        this.activePlayer.strength = this.activePlayer.strength + optionSelected.strength;
        this.activePlayer.wealth = this.activePlayer.wealth + optionSelected.wealth;
        this.playerResolve.emit(this.activePlayer);
    };
    __decorate([
        Input(),
        __metadata("design:type", Location)
    ], EncounterComponent.prototype, "selectedLocation", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Player)
    ], EncounterComponent.prototype, "activePlayer", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], EncounterComponent.prototype, "playerResolve", void 0);
    EncounterComponent = __decorate([
        Component({
            selector: 'encounter',
            templateUrl: './encounter.component.html',
            styleUrls: ['./encounter.component.scss']
        }),
        __metadata("design:paramtypes", [AngularFirestore])
    ], EncounterComponent);
    return EncounterComponent;
}());
export { EncounterComponent };
//# sourceMappingURL=encounter.component.js.map