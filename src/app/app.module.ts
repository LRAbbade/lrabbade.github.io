import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { ItemComponent } from './itemlist/item/item.component';
import { HeaderComponent } from './header/header.component';
import { QRCodeModule } from 'angularx-qrcode';
import { CustomItemComponent } from './itemlist/custom-item/custom-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ItemlistComponent,
    ItemComponent,
    HeaderComponent,
    CustomItemComponent
  ],
  imports: [
    BrowserModule,
    QRCodeModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
