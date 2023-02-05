import { Component } from '@angular/core';
import { Item } from './item/item.model';

@Component({
    selector: 'app-itemlist',
    templateUrl: './itemlist.component.html',
    styleUrls: ['./itemlist.component.scss']
})
export class ItemlistComponent {
    items: Item[] = [
        new Item('Test', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'http://shorturl.at/ehiZ5', 10.50),
        new Item('Test 2', 'test description 2', 'http://shorturl.at/jm027', 12.00),
        new Item('Test 3', 'test description 3', 'http://shorturl.at/azEOZ', 20.20),
    ];
}
