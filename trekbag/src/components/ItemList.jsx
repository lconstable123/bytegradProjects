export default function ItemList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.name} item={item} />
      ))}
    </ul>
  );
}

function Item({ item }) {
  return (
    <li className="item">
      <label>
        <input id={item.name} type="checkbox" checked={item.packed} />
        {item.name}
      </label>
      <button className="btn--remove">❌</button>
    </li>
  );
}
