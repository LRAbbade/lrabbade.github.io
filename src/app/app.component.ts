import { Component, ElementRef, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    @ViewChild('container', { static: true }) container: ElementRef;

    constructor(title: Title) {
        title.setTitle('Karolina e Lucas');
    }
}
