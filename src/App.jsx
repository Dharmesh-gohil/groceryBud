import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
// import { ToastContainer,Toast } from "react-toastify";


const App = () => {
  const [items, setItems] = useState([]);
  
  const addItem = (ItemName) => {
    console.log(ItemName)
    const newItem = {
      name: ItemName,
      completed: false,
      id:nanoid(),
    }
    setItems([...items, newItem]);
    console.log(items)
  }

  return <section className="section-center">
    <Form addItem={ addItem} />  
    {/* <ToastContainer/> */}
  </section>;
};

export default App;
