import * as Task from './editFigure'
import * as Figure from './dragFigure'
let i =0;

export function createRectangle() {
    const workSpace = document.getElementById('WorkSpace');

    if(workSpace !== null)
        i = workSpace.childElementCount;

    let elementById = document.getElementById(i.toString());

    if(elementById){
        ++i;
    }

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'RectangleFigure');
    svg.setAttribute('id', i.toString());

    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('width','200');
    rect.setAttribute('height', '100');
    svg?.appendChild(rect);
    workSpace?.appendChild(svg);

    let data = [];
    const element = window.getComputedStyle(svg);
    data.push({"class": "RectangleFigure", "left": element.left, "top": element.top, "fill": element.fill})
    localStorage.setItem(i.toString(),JSON.stringify(data));

    svg.addEventListener('click', (event: any) => {Task.editFigure(event)});
    svg.addEventListener('mousedown', (event: any) => {Figure.dragFigure(event)});
}



export function createTriangle() {
    const workSpace = document.getElementById('WorkSpace');

    if(workSpace !== null)
        i = workSpace.childElementCount;

    let elementById = document.getElementById(i.toString());

    if(elementById){
        ++i;
    }

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'TriangleFigure');
    svg.setAttribute('id', i.toString());

    const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    polygon.setAttribute('points', '0,100 100,0 200,100');
    svg?.appendChild(polygon);
    workSpace?.appendChild(svg);

    let data = [];
    const element = window.getComputedStyle(svg);
    data.push({"class": "TriangleFigure", "left": element.left, "top": element.top, "fill": element.fill})
    localStorage.setItem(i.toString(),JSON.stringify(data));

    svg.addEventListener('click', (event: any) => {Task.editFigure(event)});
    svg.addEventListener('mousedown', (event: any) => {Figure.dragFigure(event)});
}