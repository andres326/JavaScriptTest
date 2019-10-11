/*
** Created by: Pablo Cubillos
** This class allows to create the model of the consulted data
*/
export class DataModel {
  constructor(title, total) {
    this.title = title;
    this.total = total;
    this.items = [];
  }

  getTitle(){return this.title}
  getTotal(){return this.total}
  getItems(){return this.items}

  setItem(item){this.items.push(item);}
}
