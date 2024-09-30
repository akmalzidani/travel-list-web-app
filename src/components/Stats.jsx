/* eslint-disable react/prop-types */
export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list🚀</em>
      </p>
    );
  }

  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPackedItems / numItems) * 100) || 0;

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "🎉 Good job! Ready for your trip!"
          : `💼 You have ${numItems} items on your list, and you already packed
        ${numPackedItems} (${percentage}%) of them`}
      </em>
    </footer>
  );
}
