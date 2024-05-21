import "./App.css";
import Posts from "./components/Posts";
import Users from "./components/Users";

export default function App() {
  return (
    <>
      <div className="flex">
        <div>
          <Users />
        </div>
        <div>
          <Posts />
        </div>

      </div>

    </>
  );
}
