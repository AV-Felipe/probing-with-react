// because we need to use type="text/babel" in the index.htm script source, we can't use es6 modules
// in this project the components must all be inside the main script

function MyListComponent({items}){
    return (
        <ul className="list-component">
            {items.map((item, index)=>{
                return (
                    <li key={index} className="list-item">
                        {item}
                    </li>
                )
            })}
        </ul>
    )
}

export default MyListComponent