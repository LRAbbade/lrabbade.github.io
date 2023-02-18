import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { Item } from './item.model';
import { QrCodePix } from 'qrcode-pix';
import { Clipboard } from '@angular/cdk/clipboard';

export interface SelectedItem {
    item: Item;
    ref: ElementRef;
}

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent {
    @Input() item: Item;
    @Output() click = new EventEmitter<SelectedItem>();
    @ViewChild('itemContainer', { static: true }) itemContainer: ElementRef;

    isRowHidden = true;
    pixKey = '';
    showIcon = false;
    copyPixText = 'Pix Copia e Cola';

    constructor(
        private elementRef: ElementRef,
        private clipboard: Clipboard
    ) {}

    gift() {
        this.click.emit({ item: this.item, ref: this.elementRef });
        this.isRowHidden = false;
        this.pixKey = this.generateLink();
        console.log(this.pixKey);
    }

    generateLink(): string {
        const qrCodePix = QrCodePix({
            version: '01',
            key: '12551679630',
            name: 'Lucas Riera Abbade',
            city: 'SAO PAULO',
            message: this.item.name,
            value: this.item.price,
        });
        return qrCodePix.payload();
    }

    copyPix() {
        this.clipboard.copy(this.pixKey);
        this.showIcon = true;
        this.copyPixText = 'Copiado!';
        setTimeout(() => {
            this.showIcon = false;
        }, 2000);
    }
}
