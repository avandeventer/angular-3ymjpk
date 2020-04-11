var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var PlayerManagerComponent = /** @class */ (function () {
    function PlayerManagerComponent() {
        this.numberOfPossiblePlayers = [1, 2, 3, 4, 5, 6, 7, 8];
        this.players = [];
        this.numberOfPlayersSelected = false;
        this.playersNamed = false;
        this.playersSelected = false;
        this.storyDeck = [];
    }
    PlayerManagerComponent.prototype.ngOnInit = function () {
    };
    PlayerManagerComponent.prototype.selectNumberOfPlayers = function (numberOfPlayers) {
        this.numberOfPlayers = numberOfPlayers;
        this.numberOfPlayersSelected = true;
        for (var i = 0; i < this.numberOfPlayers; i++) {
            var player = { id: i, name: '', strength: 0, intellect: 0, charisma: 0, dexterity: 0, wealth: 0, playerNamed: false };
            this.players.push(player);
        }
        this.activePlayer = this.players[0];
    };
    PlayerManagerComponent.prototype.namePlayer = function (playerId) {
        this.players[playerId].playerNamed = true;
        var playersNamed = 0;
        for (var _i = 0, _a = this.players; _i < _a.length; _i++) {
            var player = _a[_i];
            if (player.playerNamed) {
                playersNamed = playersNamed + 1;
            }
        }
        if (this.players.length == playersNamed) {
            this.playersNamed = true;
        }
    };
    PlayerManagerComponent.prototype.switchPlayer = function (resolvedPlayer) {
        this.players[resolvedPlayer.id] = resolvedPlayer;
        var nextPlayerId = resolvedPlayer.id + 1;
        if (nextPlayerId >= this.players.length) {
            nextPlayerId = 0;
        }
        this.activePlayer = this.players[nextPlayerId];
        console.log("player manager reached: ");
        console.log(this.players);
        console.log("active player: ");
        console.log(this.activePlayer);
    };
    PlayerManagerComponent = __decorate([
        Component({
            selector: 'player-manager',
            templateUrl: './player-manager.component.html',
            styleUrls: ['./player-manager.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], PlayerManagerComponent);
    return PlayerManagerComponent;
}());
export { PlayerManagerComponent };
//# sourceMappingURL=player-manager.component.js.map