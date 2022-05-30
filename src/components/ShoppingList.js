import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";


function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce")
  const [submittedData, setSubmittedData] = useState([]);

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  function handleItemName(e) {
    setItemName(e.target.value)
  }
  function handleItemCategory(e) {
    setItemCategory(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault();
    const NewItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory
    };
    const dataArray = [...submittedData, NewItem]
    debugger
    setSubmittedData(dataArray);
    setItemName("")
    setItemCategory("Produce")
    debugger

  }
// const listOfName = submitedData.map((data)=>{
//   return (
//     <input key={data.id} name={data.name}/>
//   )
// })
// const listOfCategory = submitedData.map(data=>{
//   return (

//   )
// })


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (search !== "") {
      return item.name.match(search)
    } else {
      if (selectedCategory === "All") {
        return true;
      } else {
        return item.category === selectedCategory && item.name === search;
      }
    }
  });
 
  return (
    <div className="ShoppingList">
      <ItemForm 
      onItemFormSubmit={handleSubmit}
      itemName={itemName}
      itemCategory={itemCategory}
      handleItemName={handleItemName}
      handleItemCategory={handleItemCategory}
      listOfName={listOfName}
       />
      <Filter onCategoryChange={handleCategoryChange} search={search} onSearchChange={handleSearch} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
