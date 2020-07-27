export function dragFigure(event: any) {

    const rectangle = document.getElementsByClassName('RectangleFigure') as HTMLCollectionOf<HTMLElement>;
    removeActive(rectangle);
    const triangle = document.getElementsByClassName('TriangleFigure') as HTMLCollectionOf<HTMLElement>;
    removeActive(triangle);
    const colorpicker = document.getElementsByTagName('input') as HTMLCollectionOf<HTMLElement>;
    colorpicker[0].removeAttribute('disabled');

    let element = event.target;
    element = element.parentElement;

    if((element.className['baseVal'] === "RectangleFigure") || (element.className['baseVal'] === "TriangleFigure")){
        element.style.border = '2px dashed #5596ed';
        moveAt(event);
        element.style.position = 'absolute';
        element.style.zIndex = 1000;
        document.onmousemove = function(event) {
            moveAt(event);
        }
        element.ondragstart = function() {
            return false;
        };
        element.onmouseup = function() {
            document.onmousemove = null;
            element.onmouseup = null;
        }
    }
    function moveAt(event : any) {
        if(event.pageX < 450){
            element.style.left = 450 - 100 + 'px';
            element.style.top = event.pageY - 50 + 'px' ;
        }else {
            if(event.pageY < 50){
                element.style.left = event.pageX - 100 + 'px';
                element.style.top = 50 - 50 + 'px' ;
            }else{
                element.style.left = event.pageX - 100 + 'px';
                element.style.top = event.pageY - 50 + 'px' ;
            }
        }
        let id = element.getAttribute('id');
        let json = localStorage.getItem(id);
        if(json != null){
            let data = JSON.parse(json);
            let classElem = data[0].class;
            let fillElem = data[0].fill;
            let info =[];
            info.push({"class": classElem , "left": element.style.left , "top": element.style.top, "fill": fillElem});
            localStorage.setItem(id, JSON.stringify(info));
        }
    }

    function removeActive(figure: HTMLCollectionOf<HTMLElement>){
        for(let i = 0; i < figure.length ; ++i){
            figure[i].style.border = '0px dashed #5596ed';
        }
    }
}
