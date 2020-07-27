import * as Task from "./editFigure";
import * as Figure from "./dragFigure";

export function loadElements() {
    if(localStorage.length !== 0){
        let len = localStorage.length;
        for(let i = 0; i < len; ++i){
            let data = localStorage.getItem(i.toString());
            if(data === null){
                ++len;
            }else{
                let info = JSON.parse(data);
                let classElem = info[0].class;
                let fillElem = info[0].fill;
                let topElem = info[0].top;
                let leftElem = info[0].left;
                const workSpace = document.getElementById('WorkSpace');

                if(classElem === "RectangleFigure"){
                    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                    svg.setAttribute('class', classElem);
                    svg.setAttribute('id', i.toString());

                    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                    rect.setAttribute('width','200');
                    rect.setAttribute('height', '100');

                    svg?.appendChild(rect);
                    workSpace?.appendChild(svg);

                    svg.setAttribute('style','fill:'+ fillElem +'; top:'+ topElem +'; left:'+ leftElem +';' );

                    svg.addEventListener('click', (event: any) => {Task.editFigure(event)});
                    svg.addEventListener('mousedown', (event: any) => {Figure.dragFigure(event)});
                }else{
                    if(classElem === "TriangleFigure"){
                        let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                        svg.setAttribute('class', classElem);
                        svg.setAttribute('id', i.toString());

                        const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
                        polygon.setAttribute('points', '0,100 100,0 200,100');
                        svg?.appendChild(polygon);
                        workSpace?.appendChild(svg);

                        svg.setAttribute('style','fill:'+ fillElem +'; top:'+ topElem +'; left:'+ leftElem +';' );

                        svg.addEventListener('click', (event: any) => {Task.editFigure(event)});
                        svg.addEventListener('mousedown', (event: any) => {Figure.dragFigure(event)});
                    }
                }
            }
        }
    }
}