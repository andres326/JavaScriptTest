/*
** Created by: Pablo Cubillos
** This class allows to create the model of the items of each data consulted
*/
export class ItemModel {
  constructor(name, quantity, percent, color) {
    this.name = name;
    this.quantity = quantity;
    this.percent = percent;
    this.color = color;
  }

  getName(){return this.name}
  getQuantity(){return this.quantity}
  getPercent(){return this.percent}
  getColor(){return this.color}
}
