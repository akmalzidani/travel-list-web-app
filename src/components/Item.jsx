/* eslint-disable react/prop-types */
export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li style={item.packed ? { textDecoration: "line-through" } : {}}>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
