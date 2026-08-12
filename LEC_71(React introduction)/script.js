let element= document.createElement('h1');
element.innerHTML='Hii';

document.querySelector("#parent").appendChild(element);

console.log(React);

//we will use react(tagname, properties, content)
let h1= React.createElement('h1', null, "Hello from react");
let parent= document.querySelector("#parent");
let root= ReactDOM.createRoot(parent);
root.render(h1);

