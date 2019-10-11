/*
** Created by: Pablo Cubillos
** This class creates the data structure and graphs each of the nodes, using the Chart.js library
*/

import Chart from 'chart.js';
import {data} from '../../data/data.json';
import {DataModel} from './dataModel';
import {ItemModel} from './item';

export class GraphPainter{

  constructor(){
    this.length = data.length;
    this.title = '';
    this.labels = [];
    this.data = [];
    this.colors = [];
    this.arrayDataObjects = [];
  }

  /*
  ** This method creates the data structure using the clases DataModel and ItemModel
  */
  createDataStructure(){
    for(let key in data){
      let model = new DataModel(data[key].title, data[key].total);
      let itemData = data[key].items;
      for (let i in itemData) {
        let item = new ItemModel(itemData[i].name, itemData[i].quantity, itemData[i].percent, itemData[i].color);
        model.setItem(item);
      }
      this.arrayDataObjects.push(model);
    }
  }

  /*
  ** This method creates the amount of graphs needed as they come in the data.
  */
  createGraph (){
    let selector = document.getElementById('container-graph');
    let html = '';
    let array = this.arrayDataObjects;
    for (let key in array) {
      this.createElementGraph(selector, `chart-${key}`);
      let title = array[key].title;
      let total = array[key].total;
      let items = array[key].items;
      for (let i in items) {
        this.labels.push(items[i].name);
        this.data.push(items[i].quantity);
        this.colors.push(items[i].color);
        this.createElementInfo(document.getElementById(`container-chart-${key}`), items[i].name, items[i].quantity, items[i].percent, items[i].color);
      }
      this.canvasGraph(this.labels, this.data, `chart-${key}`, this.colors);
      this.labels = [];
      this.data = [];
      this.colors = [];
    }

  }

  /*
  ** This method creates the html design of the DataModel class information
  */
  createElementInfo(selector, name, quantity, percent, color){
    let divElement = document.createElement('div');
    divElement.classList.add('text-info');
    divElement.innerHTML = `<h4 style='color:${color}'>${name}</h4><p><b>${percent}</b> ${quantity}</p>`;
    selector.appendChild(divElement);
  }

  /*
  ** This method creates the html design of the chart information
  */
  createElementGraph(selector, id){
    let divContainer = document.createElement('div');
    divContainer.classList.add("container");
    divContainer.setAttribute("id", `container-${id}`);
    let canvas = document.createElement('canvas');
    canvas.setAttribute("id", id);
    let divCard = document.createElement('div');
    divCard.classList.add("card");
    divCard.appendChild(canvas);
    divCard.appendChild(divContainer);
    selector.appendChild(divCard);
  }

  /*
  ** This method draws the graph according to the information that comes by parameters
  */
  canvasGraph(labels, data, idElement, colors){
    let ctx = document.getElementById(idElement);
    let myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors,
                borderColor: colors,
                borderWidth: 0.5
            }]
        },
        options: {
          cutoutPercentage: 93
        }
    });
  }
};
