import type { ListFormat } from "../types/ListFormat";

function List(props: ListFormat) {
    return (
        <div className="col-sm-4 mb-2">
            <h2>{props.title}</h2>
            <ul className="list-group">
                {props.items.map((item, index) => (
                    <li className="list-group-item" key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default List