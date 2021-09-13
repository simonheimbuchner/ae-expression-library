/*
After Effects Expressions Library
Author: Simon Heimbuchner, 2021

Description:
Use this expression library either to copy and paste code or as an actual embedded after effects code library.
To include the library in your code, simply save as .txt, 
drag it into your project and reference it in each property using the following code:

    eval(footage("expressionLibrary.txt").sourceText); // get expression library

After that, you can use these functions in that property.
*/


function autoPos(L, sPosX, sPosY) {
    // description: effectively parents layer to whatever corner of input layer
    // property target: transform>position
    // usage:  autoPos(layer = L, x = "middle", y = "middle");
    let p = L.toComp([0,0,0]),
        r = L.sourceRectAtTime(time);
    switch(sPosX) {
            case "left":
                x = p[0]+r.left;
                break;
            case "middle":
                x = p[0]+r.left+(r.width/2);
                break;
            case "right":
                x = p[0]+r.left+r.width;
                break;
    }	
    switch(sPosY) {
            case "top":
                y = p[1]+r.top;
                break;
            case "middle":
                y = p[1]+r.top+(r.height/2);
                break;
            case "bottom":
                y = p[1]+r.top+r.height;
                break;
    }	
    return [x,y];
}

    
function autoPosRect(sPosX, sPosY) {
    // description: moves anchor point of a rectangle to one of its corners
    // property target: shape layer>rectangle>position
    // usage: autoPosRect(x = "middle", y = "top");
    let s = thisProperty.propertyGroup().size;
    switch(sPosX) {
            case "left":
                x = s[0]/2;
                break;
            case "middle":
                x = s[0]/2-s[0]/2;
                break;
            case "right":
                x = s[0]/2*-1;
                break;
    }	
    switch(sPosY) {
            case "top":
                y = s[1]/2;
                break;
            case "middle":
                y = s[1]/2-s[1]/2;
                break;
            case "bottom":
                y = s[1]/2*-1;
                break;
    }	
    return [x, y]
}