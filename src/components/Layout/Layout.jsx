import Column from "../Column";
import "./layout.css";

function Layout({ user }) {
  return (
    <div>
      {!user ? (
        <p>You need to be logged to use the app</p>
      ) : (
        <main className="layout">
          <Column title={"TO DO"} />
          <Column title={"IN PROGRESS"} />
          <Column title={"DONE"} />
        </main>
      )}
    </div>
  );
}

export default Layout;
