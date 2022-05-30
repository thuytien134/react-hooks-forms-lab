import React from "react";
import { v4 as uuid } from "uuid";
import {useState} from "react"

function ItemForm(props) {
// const [itemName,setItemName] = useState("");
// const [itemCategory,setItemCategory] = useState("Produce")
// const [submitedData,setSubmitdata] = useState([])

// function handleItemName(e){
//   setItemName(e.target.value)
// }
// function handleItemCategory(e){
//   setItemCategory(e.target.value)
// }
// function handleSubmit(e){
// e.preventDefault();
// const NewItem={
//   id: uuid(),
//   name: itemName,
//   category: itemCategory};
//   const dataArray=[...submitedData,NewItem]
//   setSubmitdata(dataArray)
//   setItemName("")
//   setItemCategory("Produce")

// }

// const listOfName = submitedData.map((data)=>{
//   return (
//     <input/>
//   )
// })
debugger
  return (
    <form className="NewItem" onSubmit={props.onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={props.handleItemName} value={props.itemName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={props.handleItemCategory} value={props.itemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
