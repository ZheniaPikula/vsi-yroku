class Options{
    constructor(height, width, bg, fontSize, textAlign){   
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
           
    }
    CreativeNewDiv(){
        let elem = document.createElement('div');
        document.body.appendChild(elem);
        let parametrs = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign} `;
        elem.style.cssText = parametrs;
    }  
}
const item = new Options(250, 1000, "blue", 25, "left"  );
item.CreativeNewDiv();


//чомусь нема напису, не ясно чому