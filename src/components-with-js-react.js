import myListComponent from "./components/default-list-js-component.js";

const mainComponent = myListComponent({items: ["item1","item2","item3"]})
    


ReactDOM.render(mainComponent, document.getElementById("root"));