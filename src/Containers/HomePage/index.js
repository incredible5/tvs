import React, { useState } from "react";
import Graph from "../../Components/Graph";
import LogoutButton from "../../Components/LogoutButton";

import "./style.scss";

function Homepage(props) {
  const [showChart, setShowChart] = useState(false);
  const [dataCopy, setDataCopy] = useState([]);
  const [data, setData] = useState([]);

  let tableData = localStorage.getItem("data");
  if (tableData && data.length === 0) {
    tableData = JSON.parse(tableData);
    tableData = tableData.reduce((acc, curr, idx) => {
      acc.push({
        id: idx,
        data: curr,
      });
      return acc;
    }, []);
    setData(tableData);
    setDataCopy(tableData);
  }

  const filterData = (searchStr) => {
    let modifiedData = dataCopy.filter((item) =>
      item.data.find(
        (d) => d.toLowerCase().indexOf(searchStr.toLowerCase()) >= 0
      )
    );
    setData(modifiedData);
  };

  const renderDataTable = (rowData, idx) => {
    return (
      <tr key={idx}>
        {rowData.data.map((item, index) => {
          return (
            <td
              key={index}
              onClick={() => {
                window.location.href = "/details/" + rowData.id;
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
      <div className={"search-sec"}>
        <input
          placeholder="Search any column value. Eg: Specialist"
          onChange={(e) => filterData(e.target.value)}
        />
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
      {showChart && <Graph onClose={setShowChart} data={dataCopy} />}
    </div>
  );
}

export default Homepage;
