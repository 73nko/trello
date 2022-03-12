import "./column.css";

const ColumnTitle = ({ title }) => {
  return (
    <header>
      <h3>{title}</h3>
    </header>
  );
};

//Como podemos diferenciar las tareas de cada columna? en este momento tenemos 3 tareas iguales para las 3 columnas

const TasksColumn = () => {
  return (
    <ul>
      {/* Ponemos titulo a cada task?? solo he hecho esta primera para plantearlo */}
      <li className="tasks">
        <h5 className="taskTitle">Working on header design</h5>Header design
      </li>
      <li className="tasks">Column dinamic moves</li>
      <li className="tasks">Improve soft skills</li>
      <li className="tasks">Improve soft skills</li>
      <li className="tasks">Improve soft skills</li>
      <li className="tasks">Improve soft skills</li>
    </ul>
  );
};

const Column = ({ title }) => {
  return (
    <section className="column">
      <ColumnTitle title={title} />
      <TasksColumn />
    </section>
  );
};
export default Column;
