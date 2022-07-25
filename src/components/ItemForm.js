import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ arrayItems, onItemFormSubmit }) {

  const [itemName, setItemName] = useState("Name")
  const [itemCategory, setItemCategory] = useState("Produce")

  function handleNameChange (event) {
    setItemName(event.target.value);
  }

  function handleCategoryChange (event) {
    setItemCategory(event.target.value);
  }

  function handleSubmit (event) {
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory
    }
    const dataArray = [...arrayItems, newItem];
    onItemFormSubmit(dataArray)
    setItemName("");
    setItemCategory("Produce");
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label htmlFor="Name">Name:</label>
            <input 
                type="text" 
                name="Name" 
                placeholder="Add Item" 
                onChange={handleNameChange}
                value={itemName} />
      <label>
        Category:
        <select name="category" onChange={handleCategoryChange} value={itemCategory}>
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
