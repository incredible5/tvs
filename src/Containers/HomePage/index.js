import React, { useState } from "react";
import Graph from "../../Components/Graph";
import LogoutButton from "../../Components/LogoutButton";

import "./style.scss";

function Homepage(props) {
  const [showChart, setShowChart] = useState(false);

  let data = localStorage.getItem("data") || [];
  if (data) {
    data = JSON.parse(data);
  }

  const renderDataTable = (rowData, idx) => {
    return (
      <tr key={idx}>
        {rowData.map((item, index) => {
          return (
            <td
              key={index}
              onClick={() => {
                window.location.href = "/details/" + idx;
              }}
            >
              {item}
            </td>
          );
        })}
      </tr>
    );
  };

  return (
    <div className={"homepage-container"}>
      <div className={"logout"}>
        <LogoutButton />
      </div>
      <div className={"chart-prev-btn"} onClick={() => setShowChart(true)}>
        Show top 10 employees salary data
      </div>
      <table className={"data-table"}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Desgination</th>
            <th>Address</th>
            <th>Pin Code</th>
            <th>Date Of Joining</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>{data.map(renderDataTable)}</tbody>
      </table>
      {showChart && <Graph onClose={setShowChart} data={data} />}
    </div>
  );
}

export default Homepage;
