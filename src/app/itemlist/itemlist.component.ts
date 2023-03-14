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
        new Item('Tour guiada por Tokyo', 'Esta excursão de meio dia é a escolha ideal para viajantes com pouco tempo que visitam Tóquio. Evite o incômodo de navegar com um guia particular para levá-lo pela cidade. Uma vantagem do passeio é que você não perderá tempo indo a pontos turísticos que não lhe interessam, pois o trajeto pode ser customizado. Um exemplo de itinerário pode incluir o Templo Senso-ji em Asakusa, Shibuya Crossing, Rua Takeshita em Harajuku, Palácio Imperial e Jardim Nacional Shinjuku Gyoen.', 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/09/5b/3a/05.jpg', 476.84),
        new Item('Ingressos para Universal Studios Japan', '#WEAREMARIO! Aqui vamos desfrutar do primeiro parque temático SUPER NINTENDO WORLD do mundo! Além das incríveis atrações de Harry Potter, Jurassic Park entre muitas outras do universo cinematográfico. ', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/33/49/48/super-nintendo-world.jpg?w=1200&h=-1&s=1', 660.00),
        new Item('Tour Culinária Noturna em Shibuya', 'Experimente a comida e a cultura japonesa durante este passeio a pé pelo distrito de Shibuya, em Tóquio. Fuja das hordas de turistas enquanto come como um japonês local, provando pratos favoritos como \'okonomiyaki\' (panquecas de ovo salgadas), espetos de carne Wagyu e muito mais nos restaurantes e pontos de encontro fora dos roteiros mais conhecidos da área.', 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/a1/ed/e6.jpg', 969.76),
        new Item('Ingressos para Tokyo Disneyland', 'Parque temático exótico e encantador, baseado nas histórias de Walt Disney foi o primeiro construído fora dos EUA, em 1983. É um destino obrigatório para os fãs do amado Mickey Mouse.', 'https://media2.tokyodisneyresort.jp/home/top/main/2023/02/mainR_01.jpg', 570.00),
        new Item('Kart na Rua em Tokyo', 'Extremamente emocionante e uma experiência obrigatória quando você visita Tóquio no Japão. Imagine-se em um kart personalizado feito especificamente para realizar a experiência de kart de super-herói da vida real!', 'https://classic.exame.com/wp-content/uploads/2016/09/size_960_16_9_20151020-25144-104f4tu.jpg?quality=70&strip=info&w=920', 330.00),
        new Item('Corrida Super GT3 em Suzuka + ingresso Suzuka Park MOTOPIA', 'Ingressos para corrida Super GT3 no autódromo de Suzuka e passeio no parque MOTOPIA', 'https://supergtworld.files.wordpress.com/2018/05/nismo_supergt_suzuka_17_38-1200x800-e1525729453572.jpg', 227.00),
        new Item('BlackPink in Concert Osaka', 'Show do BlackPink em Osaka', 'https://veja.abril.com.br/wp-content/uploads/2022/09/GettyImages-1143890227.jpg.jpg?quality=70&strip=info&w=1280&h=720&crop=1', 577.00),
        new Item('Ghibli Park', 'Ingresso para visitar o parque do estúdio Ghibli', 'https://images.lifestyleasia.com/wp-content/uploads/sites/6/2022/01/28103919/Cropped-1643291802photo_SXM2022012700004666.jpg-1600x900.png?tr=w-1600', 77.00),
        new Item('teamLab Planets Tokyo', 'Museu de arte digital imersivo', 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/ea/a3/07.jpg', 123.00),
        new Item('Jantar Kaiseki com Apresentação Geisha', 'Vista um quimono e saboreie um jantar kaiseki com vários pratos enquanto se diverte com uma apresentação de gueixa. Um anfitrião recebe você em um autêntico restaurante japonês em Tóquio durante esta experiência noturna de 3 horas. Acomode-se com um pequeno grupo enquanto são servidos pratos tradicionais e converse com as gueixas que são treinadas em dança, música e arte da comunicação.', 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/e4/fa/14.jpg', 1072.89),
        new Item('Castelo De Hiroshima', 'Visita a recriação moderna do castelo de Hiroshima, destruído pela bomba atômica em 1945.', 'https://www.japan-guide.com/g21/3042_21.jpg', 30.00),
        new Item('Bar Crawling em Shinjuku', 'Mergulhar na rica vida noturna de Tóquio pode ser intimidante para os visitantes do Japão. Este passeio a pé privado pelo colorido distrito de Shinjuku, repleto de néon, promete uma autêntica experiência japonesa sem a barreira do idioma ou a preocupação com a etiqueta. Seu guia o levará a uma seleção de bares no Golden Gai e a Omoide Yokocho, onde você conhecerá os habitantes locais e aprenderá tudo sobre a cultura de bebida de Tóquio.', 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/bf/10/07.jpg', 407.58),
        new Item('Tokyo Skytree', 'Visita na Tokyo Skytree, uma torre de transmissão e observação em Sumida, Tóquio. Em sua inauguração em 2011 era a torre mais alta do mundo, com 634 metros.', 'https://www.japan-guide.com/g18/3064_01a.jpg', 104.00),
    ];

    constructor() {}

    onItemClicked(itemRef: SelectedItem) {
        itemRef.ref?.nativeElement.scrollIntoView({ behavior: 'smooth' });
        console.log(itemRef.item);
    }
}
