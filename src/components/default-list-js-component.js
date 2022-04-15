// In this module format (plain js), if we wanted to apply style, we would do so using the page style
// (the style would be associated to the index.html, referring the classes and elements used here)

function myListComponent(props){
    return (
        React.createElement(
            'ul',
            {className: "list-component"},
            props.items.map((item, index)=>{
                return React.createElement(
                    "li",
                    {key: index, className: "list-item"},
                    item
                )
            })
        )
    )
}

export default myListComponent