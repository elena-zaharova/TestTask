
export function editFigure(event: any) {

    const rectangle = document.getElementsByClassName('RectangleFigure') as HTMLCollectionOf<HTMLElement>;
    removeActive(rectangle);
    const triangle = document.getElementsByClassName('TriangleFigure') as HTMLCollectionOf<HTMLElement>;
    removeActive(triangle);

    let element = event.target;
    element = element.parentElement;
    let id: number = element.id;
    element.style.border = '2px dashed #5596ed';

    const json = localStorage.getItem(id.toString());
    let data= [];
    if(json != null)
        data = JSON.parse(json);
    let classElem = data[0].class;
    let topElem = data[0].top;
    let leftElem = data[0].left;


    let color = window.getComputedStyle(element);
    let rgbString = color.fill;
    let hexString = rgbToHex(rgbString);
    const colorpicker = document.getElementsByTagName('input') as HTMLCollectionOf<HTMLElement>;
    colorpicker[0].removeAttribute('disabled');
    colorpicker[0].setAttribute('value', hexString);

    colorpicker[0].onchange = function (event: any) {
        element.style.fill = event.target.value;
        colorpicker[0].setAttribute('value', event.target.value);
        let info = [];
        info.push({"class": classElem , "left": leftElem , "top": topElem, "fill": element.style.fill});
        localStorage.setItem(id.toString(),JSON.stringify(info));
    }

    document.body.onkeydown = function(e : KeyboardEvent){
        if(e.key === 'Delete'){
            element.remove();
            localStorage.removeItem(id.toString());
        }
    };

    function removeActive(figure: HTMLCollectionOf<HTMLElement>){
        for(let i = 0; i < figure.length ; ++i){
            figure[i].style.border = '0px dashed #5596ed';
        }
    }

}

function rgbToHex(rgbString: string){
    let rgb = rgbString.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    let hexString = '';
    if(rgb !== null){
        delete(rgb[0]);
        for(let i = 1; i < 4; ++i){
            rgb[i] = parseInt(rgb[i]).toString(16);
            if (rgb[i].length === 1)
                rgb[i] = '0' + rgb[i];

        }
        hexString ='#'+rgb.join('').toUpperCase();
    }
    return hexString;
}