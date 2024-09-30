/* eslint-disable react/prop-types */
import { useState } from "react";

const optionsList = [];
for (let i = 1; i <= 20; i++) {
  optionsList.push(i);
}

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();

    if (!description) {
      return;
    }

    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What you need for your 😍 trip?</h3>
      <select value={quantity} onInput={(e) => setQuantity(+e.target.value)}>
        {optionsList.map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onInput={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
