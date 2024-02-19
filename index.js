import {getMarkdown} from "https://jscroot.github.io/parser/croot.js";
import {setInner} from "https://cdn.jsdelivr.net/gh/jscroot/element@0.1.5/croot.js";



getMarkdown("README.md",responseFunction);

function responseFunction(result){
    setInner("container",result);
}