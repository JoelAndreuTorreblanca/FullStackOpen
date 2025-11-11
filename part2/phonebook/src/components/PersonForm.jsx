export default function PersonForm(props) {
  return (
    <form>
    <div>
        name: <input value={props.newName} onChange={props.handleInputName} />
    </div>
    <div>
        number: <input value={props.newNumber} onChange={props.handleInputNumber} />
    </div>
    <div>
        <button type="submit" onClick={props.handleSubmit}>add</button>
    </div>
    </form>
  )
}