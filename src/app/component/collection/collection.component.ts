import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/interface/categories';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  constructor() { }
  categories: Categories[] ;
  ngOnInit() {
    this.categories = [
      {
        urlImg: 'https://static-eu.insales.ru/images/products/1/2464/184273312/large_20042228b2.jpg',
        name: 'Бытовая техника'
      },
      {
        urlImg: 'https://static-eu.insales.ru/images/products/1/3767/184290999/large_холодильник.png',
        name: 'Товары для дома'
      },
      {
        urlImg: 'https://static-eu.insales.ru/images/products/1/5230/179082350/large_61104.jpg',
        name: 'Электропитание'
      },
      {
        urlImg: 'https://static-eu.insales.ru/images/products/1/7393/184278241/large_телевизор.png',
        name: 'Телевизоры'
      },
      {
        urlImg: 'https://static-eu.insales.ru/images/products/1/5477/179082597/large_кр1.jpg',
        name: 'Спутниковое и кабельное ТВ'
      },
      {
        urlImg: 'https://static-eu.insales.ru/images/products/1/4189/184275037/large_робот_пылесос.png',
        name: 'ТВ-Антенны'
      },
      {
        urlImg: 'https://static-eu.insales.ru/images/products/1/5955/184293187/large_стиралка.png',
        name: 'Стиральные машины'
      },
    ];
  }

}
