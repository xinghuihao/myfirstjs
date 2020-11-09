function getstyle(node,csstyle){
    return node.currentStyle ? node.currentStyle[csstyle]:getComputedStyle(node)[csstyle]
}