import { Component } from '@angular/core';
import { SelectedItem } from './item/item.component';
import { Item } from './item/item.model';

@Component({
    selector: 'app-itemlist',
    templateUrl: './itemlist.component.html',
    styleUrls: ['./itemlist.component.scss']
})
export class ItemlistComponent {
    items: Item[] = [
        new Item('Ingressos para Universal Studios Japan', '#WEAREMARIO! Aqui vamos desfrutar do primeiro parque temático SUPER NINTENDO WORLD do mundo! Além das incríveis atrações de Harry Potter, Jurassic Park entre muitas outras do universo cinematográfico. ', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/33/49/48/super-nintendo-world.jpg?w=1200&h=-1&s=1', 660.00),
        new Item('Ingressos para Tokyo Disneyland', 'Parque temático exótico e encantador, baseado nas histórias de Walt Disney foi o primeiro construído fora dos EUA, em 1983. É um destino obrigatório para os fãs do amado Mickey Mouse. ', 'https://media2.tokyodisneyresort.jp/home/top/main/2023/02/mainR_01.jpg', 570.00),
        new Item('Kart na Rua em Tokyo', 'Extremamente emocionante e uma experiência obrigatória quando você visita Tóquio no Japão. Imagine-se em um kart personalizado feito especificamente para realizar a experiência de kart de super-herói da vida real!', 'https://classic.exame.com/wp-content/uploads/2016/09/size_960_16_9_20151020-25144-104f4tu.jpg?quality=70&strip=info&w=920', 330.00),
        new Item('Corrida Super GT3 em Suzuka + ingresso Suzuka Park MOTOPIA', 'Ingressos para corrida Super GT3 no autódromo de Suzuka e passeio no parque MOTOPIA', 'https://supergtworld.files.wordpress.com/2018/05/nismo_supergt_suzuka_17_38-1200x800-e1525729453572.jpg', 227.00),
        new Item('BlackPink in Concert Osaka', 'Show do BlackPink em Osaka', 'https://veja.abril.com.br/wp-content/uploads/2022/09/GettyImages-1143890227.jpg.jpg?quality=70&strip=info&w=1280&h=720&crop=1', 577.00),
        new Item('Ghibli Park', 'Ingresso para visitar o parque do estúdio Ghibli', 'https://images.lifestyleasia.com/wp-content/uploads/sites/6/2022/01/28103919/Cropped-1643291802photo_SXM2022012700004666.jpg-1600x900.png?tr=w-1600', 77.00),
        new Item('teamLab Planets Tokyo', 'Museu de arte digital imersivo', 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/ea/a3/07.jpg', 123.00),
        new Item('Castelo De Hiroshima', 'Visita a recriação moderna do castelo de Hiroshima, destruído pela bomba atômica em 1945', 'https://www.japan-guide.com/g21/3042_21.jpg', 30.00),
    ];

    constructor() {}

    onItemClicked(itemRef: SelectedItem) {
        itemRef.ref?.nativeElement.scrollIntoView({ behavior: 'smooth' });
        console.log(itemRef.item);
    }
}
