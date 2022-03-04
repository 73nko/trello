import "./header.scss";

function Layout({ user }) {
  return (
    <div>
      {!user ? (
        <p>You need to be logged to use the app</p>
      ) : (
        <div id="board">
          <div className="column">
            <div className="toDo">
              <div>
                <h3>TO DO</h3>
              </div>
              <div>
                <p>Header design</p>
                <p>Column dinamic moves</p>
                <p>Improve soft skills</p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="inProgress">
              <div>
                <h3>IN PROGRESS</h3>
              </div>
              <div>
                <p>Doing project</p>
                <p>Learning React</p>
                <p>Learning HTML</p>
                <p>Learning SASS</p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="done">
              <div>
                <h3>DONE</h3>
              </div>
              <div>
                <p>Finishing DAW</p>
                <p>Working hard</p>
                <p>Web Development</p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Layout;
