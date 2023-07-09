import { useState } from "react"

const Form = ({ addItem}) => {
    const [newItemNames, setNewItemsNames] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!newItemNames) return
        addItem(newItemNames)
        setNewItemsNames("")
        // console.log(newItemNames)
     }
  return (
      <form  onSubmit={handleSubmit}>
          <h4>Grocery bud</h4>
          <div className="form-control">
              
          <input type="text"
              className="form-input"
              value={newItemNames}
              onChange={(e) => setNewItemsNames(e.target.value)} />   
          <button type="submit " className="btn">add-items</button>
          </div>
      </form>
  )
}
export default Form