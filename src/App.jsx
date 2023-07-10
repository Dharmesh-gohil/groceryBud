import { useState } from "react";
import { nanoid } from "nanoid";
import Form from "./Form";
import Items from "./Items";
import { ToastContainer ,toast} from "react-toastify";

const setLocalStorage = (items) => { 
  localStorage.setItem("list",JSON.stringify(items))
}
const getLocalStorage = () => { 
  let list = localStorage.getItem("list")
  if (list) {
    list = JSON.parse(localStorage.getItem("list"))
  }
  else { 
    list=[]
  }
  return list
}
/*
const defaultList=JSON.parse(localStorage.getItem("list")||  "[]")
either you pass default list to useState or call getlocalstorage function both are same
*/
const App = () => {
  const [items, setItems] = useState(getLocalStorage())
  
  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      id: nanoid(),
      completed:false,
    }
    const newItems=[...items,newItem]
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success("item added  successfully")
   }

  const removeItem = (itemId) => { 
    const newItems = items.filter((item) => item.id !== itemId)
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success("item removed successfully ")
  }

  //here we just edit value of checked or unchecked in local storage so when we refresh
  //we get changed we made in checkbox is reflect after refresh not fresh means false value
  //we have used checked or setIsChecked using useState but it is locally value so when we refresh  
  //it s value erase so edit this value in localstorage we doing editItem so checked or 
  //unchecked value changed in local storage so we always get updated value
  const editItem = (itemId) => { 
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed }
        return newItem
       }
      return item
    })    
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success("item edited successfully")
  }
  
  return <section className="section-center">
    <ToastContainer position="top-center"/>
    <Form addItem={addItem} />
    <Items items={items} removeItem={removeItem} editItem={ editItem} />
  </section>;
};

export default App;
