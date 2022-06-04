import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";



function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

 
  function handleSearch(e) {
    setSearch(e.target.value)
  }



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
