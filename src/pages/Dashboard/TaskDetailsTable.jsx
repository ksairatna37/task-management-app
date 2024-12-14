import React from "react";

export default function TaskDetailsTable() {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col" className="table-primary">Task Priority</th>
          <th scope="col" className="table-primary">Pending Task</th>
          <th scope="col" className="table-primary">Time Lapsed (hrs)</th>
          <th scope="col" className="table-primary">Time to Finish (hrs)</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr>
          <td>1</td>
          <td>3</td>
          <td>12</td>
          <td>8</td>
        </tr>
        
      </tbody>
    </table>
  );
}
    