import React from "react";

const TeamMemberCard = (props) => {
  const { name, role, department } = props;
  return (
    <>
      <div className="card m-3 shadow-lg" style={{ width: "18rem" }}>
        <img src="/default.jpg" className="card-img-top" alt="profile" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {" "}
            <b> Role :</b> {role}
          </li>
          <li className="list-group-item">
            <b>Department : </b> {department}
          </li>
        </ul>
      </div>
    </>
  );
};

export default TeamMemberCard;
