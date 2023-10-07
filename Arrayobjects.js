import React, { Component } from "react";
class Arrayobjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentsinfo: [
        {
          sid: "500",
          sname: "ram",
          sadd: "vizag"
        },
        { sid: "501", sname: "abhinav",sadd:"ongole" },
        { sid: "502", sname: "harsha",sadd:"guntur" },
        { sid: "503", sname: "gopi",sadd: "us" }
      ]
    };
  }
  render() {
    const { studentsinfo } = this.state;
    return (
      <div>
        <table border="1">
          <tr>
            <th>sid</th>
            <th>sname</th>
            <th>sadd</th>
          </tr>
          {studentsinfo.length > 0 &&
            studentsinfo.map((student) => {
              return (
                <tr key={student.sid}>
                  <td>{student.sid}</td>
                  <td>{student.sname}</td>
                  <td>{student.sadd}</td>
                </tr>
              );
            })}
        </table>
      </div>
    );
  }
}
export default Arrayobjects;

