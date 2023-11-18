import "./Songs.css"



export default function Songs(){
    return(
    <div class="list-group">
        <button type="button" class="list-group-item list-group-item-action selected" aria-current="true">
            The current button
        </button>
        <button type="button" class="list-group-item list-group-item-action">A second button item</button>
        <button type="button" class="list-group-item list-group-item-action">A third button item</button>
        <button type="button" class="list-group-item list-group-item-action">A fourth button item</button>
        <button type="button" class="list-group-item list-group-item-action" disabled>A disabled button item</button>
    </div>
    )
}