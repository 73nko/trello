import "./column.css";
const Column = ({ title }) => {
  return (
    <section className="column">
      <header>
        <h3>{title}</h3>
      </header>
      <ul>
        <li className="tasks">Header design</li>
        <li className="tasks">Column dinamic moves</li>
        <li className="tasks">Improve soft skills</li>
      </ul>
    </section>
  );
};
export default Column;

// crear como funciones header y ul
