import "./App.css";
import data from "./assets/data";
import TeamMemberCard from "./assets/components/TeamMemberCard";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <h1>Team Members Directory</h1>

      <div className="container d-flex justify-content-center flex-wrap">
        {data.map((member, index) => (
          <TeamMemberCard {...member} key={index} />
        ))}
      </div>
    </>
  );
}

export default App;
