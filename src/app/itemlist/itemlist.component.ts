import { Component } from '@angular/core';
import { Item } from './item/item.model';

@Component({
    selector: 'app-itemlist',
    templateUrl: './itemlist.component.html',
    styleUrls: ['./itemlist.component.scss']
})
export class ItemlistComponent {
    items: Item[] = [
        new Item('Test', 'test description', 'http://shorturl.at/ehiZ5', 10.50),
        new Item('Test 2', 'test description 2', 'http://shorturl.at/jm027', 12.00),
        new Item('Test 3', 'test description 3', 'http://shorturl.at/azEOZ', 20.20),
    ];
}
