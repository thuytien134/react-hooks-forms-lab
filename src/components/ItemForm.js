import React from "react";
import { v4 as uuid } from "uuid";
import {useState} from "react"

function ItemForm({items,onItemFormSubmit}) {
const [itemName,setItemName] = useState("");
const [itemCategory,setItemCategory] = useState("Produce")


function handleItemName(e){
  setItemName(e.target.value)
}
function handleItemCategory(e){
  setItemCategory(e.target.value)
}
function handleSubmit(e){
e.preventDefault();
const NewItem={
  id: uuid(),
  name: itemName,
  category: itemCategory};
 onItemFormSubmit(NewItem)
  setItemName("")
  setItemCategory("Produce")

}



  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleItemName}/>
      </label>

      <label>
        Category:
        <select name="category"  onChange={handleItemCategory}>
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
