import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @ViewChild('banner', { static: true }) banner: ElementRef;

    ngOnInit() {
      const image = this.banner.nativeElement;
      const maxWidth = Math.min(window.innerWidth - 100, 800);
      image.style.maxWidth = `${maxWidth}px`;
    }
}
