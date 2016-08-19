import { Component } from '@angular/core';
import { Tutorial } from './tutorial';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <h2>Data Binding: {{currentTutorial.name}}</h2>
    <p>Tutorials:</p>
    <ul>
        <li *ngFor="let tutorial of tutorials">
        {{tutorial.name}}
        </li>
    </ul>
    <p *ngIf="tutorials.length > 3">There are many Tutorials!</p>
    `
})

export class AppComponent {
    title = 'Angular 2';
    tutorials = [
        new Tutorial(1, 'Tutorial One'),
        new Tutorial(2, 'Tutorial Two'),
        new Tutorial(3, 'Tutorial Three'),
        new Tutorial(4, 'Tutorial Four')
        ];
    currentTutorial = this.tutorials[0];
}