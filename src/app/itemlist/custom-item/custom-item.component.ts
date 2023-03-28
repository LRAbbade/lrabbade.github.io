import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Item } from '../item/item.model';
import { QrCodePix } from 'qrcode-pix';
import { Clipboard } from '@angular/cdk/clipboard';
import { SelectedItem } from '../item/item.component';

@Component({
    selector: 'app-custom-item',
    templateUrl: './custom-item.component.html',
    styleUrls: ['./custom-item.component.scss']
})
export class CustomItemComponent {
    item = new Item('Personalize Seu Presente', '', 'https://www.icasei.com.br/images/thumb/1/1/public/0/0/0/k/karolinaelucas/imagens/fornecedores/iO59CmENaYAw3nyO.png', 0.0);
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
