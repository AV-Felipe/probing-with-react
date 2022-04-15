'use strict';

// pure js for creating a react element
// first argument is the element type,
// second an object with all its properties (the props),
// third it's children (whe could have another react element in this place, inserting another html tag nested)
const myElement = React.createElement("h1", { id: "recipe-0" }, "Felipe: um cara legal");

// any argument beyond the third place is a new children
// when 
const myComplexElement = React.createElement(
    "div",
    {id: "main-div", className: "coll-thing"},
    React.createElement(
        "ul",
        {id: "my-list"},
        React.createElement('li',{className: "list-item"},"item1"),
        React.createElement('li',{className: "list-item"},"item2"),
    ),
    React.createElement(
        "footer",
        {id: "my-footer"},
        React.createElement('p',{className: "foot-note"},"não confie em ninguém")
    )

)

// when creating a complex element by iterating in an array, we must assign a key property to each element
//else React will complain
const myArrayBasedComplexElement = React.createElement(
    "div",
    {id: "main-div", className: "coll-thing"},
    React.createElement(
        "ul",
        {id: "my-list"},
        [
            React.createElement('li',{key:1, className: "list-item"},"item1"),
            React.createElement('li',{key:2, className: "list-item"},"item2"),
        ]

    ),
    React.createElement(
        "footer",
        {id: "my-footer"},
        React.createElement('p',{className: "foot-note"},"não confie em ninguém")
    )

)


// Programmatically populating an element
const listOfContent = [
    "item1", "item2", "item3", "item4"
]

const myCodePopulatedComplexElement = React.createElement(
    "div",
    {id: "main-div", className: "coll-thing"},
    React.createElement(
        "ul",
        {id: "my-list"},
        listOfContent.map((item, index) => React.createElement('li',{key: index, className:"list-item"}, item))

    ),
    React.createElement(
        "footer",
        {id: "my-footer"},
        React.createElement('p',{className: "foot-note"},"não confie em ninguém")
    )

)

ReactDOM.render(myCodePopulatedComplexElement, document.getElementById("root"));