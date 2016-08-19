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
var tutorial_1 = require('./tutorial');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Angular 2';
        this.tutorials = [
            new tutorial_1.Tutorial(1, 'Tutorial One'),
            new tutorial_1.Tutorial(2, 'Tutorial Two'),
            new tutorial_1.Tutorial(3, 'Tutorial Three'),
            new tutorial_1.Tutorial(4, 'Tutorial Four')
        ];
        this.currentTutorial = this.tutorials[0];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <h2>Data Binding: {{currentTutorial.name}}</h2>\n    <p>Tutorials:</p>\n    <ul>\n        <li *ngFor=\"let tutorial of tutorials\">\n        {{tutorial.name}}\n        </li>\n    </ul>\n    <p *ngIf=\"tutorials.length > 3\">There are many Tutorials!</p>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map