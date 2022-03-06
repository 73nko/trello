import "./header.scss";

function Layout({ user }) {
  return (
    <div>
      {!user ? (
        <p>You need to be logged to use the app</p>
      ) : (
        <div id="board">
          <div className="column">
            <div className="todo">
              <div>
                <h3>TO DO</h3>
              </div>
              <div>
                {/* Todas estas "tareas" entraran como parrafo desde html? cual seria la etiqueta mas eficiente? */}
                <div className="tareas">Header design</div>
                <div className="tareas">Column dinamic moves</div>
                <div className="tareas">Improve soft skills</div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="inprogress">
              <div>
                <h3>IN PROGRESS</h3>
              </div>
              <div>
                <div className="tareas">Doing project</div>
                <div className="tareas">Learning React</div>
                <div className="tareas">Learning HTML</div>
                <div className="tareas">Learning SASS</div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="done">
              <div>
                <h3>DONE</h3>
              </div>
              <div>
                <div className="tareas">Finishing DAW</div>
                <div className="tareas">Working hard</div>
                <div className="tareas">Web Development</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Layout;
