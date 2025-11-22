import { useState } from "react";
import "./TimesheetsChart.scss";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function Timesheets() {
    const initialData = [
    { day: "Monday", projectA: 4, projectB: 3, projectC: 1 },
    { day: "Tuesday", projectA: 3, projectB: 4, projectC: 0 },
    { day: "Wednesday", projectA: 4, projectB: 3, projectC: 1 },
    { day: "Thursday", projectA: 2, projectB: 3, projectC: 1 },
    { day: "Friday", projectA: 4, projectB: 3, projectC: 1 },
  ];

  const [entries, setEntries] = useState(initialData);

  const handleChange = (index:any, project:any, value:any) => {
    const updated:any = [...entries];
    updated[index][project] = Number(value);
    setEntries(updated);
  };

  const getTotal = (entry:any) => entry.projectA + entry.projectB + entry.projectC;
  const weeklyTotal = entries.reduce((sum, entry) => sum + getTotal(entry), 0);

  const chartData = {
    labels: entries.map((e) => e.day),
    datasets: [
      { label: "Project A", data: entries.map((e) => e.projectA), backgroundColor: "#0E90E0" },
      { label: "Project B", data: entries.map((e) => e.projectB), backgroundColor: "#0FB89A" },
      { label: "Project C", data: entries.map((e) => e.projectC), backgroundColor: "#DB3C7F" },
    ],
  };
  return (
      <div className="timesheet-chart-content">
       <h1 style={{paddingBottom:"0.3rem", marginBottom:"0", fontWeight:600}}>Weekly Total Time Table </h1>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Project A</th>
              <th>Project B</th>
              <th>Project C</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              <tr key={index} className={getTotal(entry) > 8 ? "overtime" : ""}>
                <td>{entry.day}</td>
                <td>
                  <input
                    type="number"
                    value={entry.projectA}
                    onChange={(e) => handleChange(index, "projectA", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={entry.projectB}
                    onChange={(e) => handleChange(index, "projectB", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={entry.projectC}
                    onChange={(e) => handleChange(index, "projectC", e.target.value)}
                  />
                </td>
                <td>{getTotal(entry)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={4}>Weekly Total</td>
              <td>{weeklyTotal}</td>
            </tr>
          </tfoot>
        </table>
       <h1 style={{paddingBottom:"0.3rem", marginBottom:"0", fontWeight:600}}>Weekly Total Time Analysis</h1>
        <div className="chart-container">
          <Bar data={chartData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
                 <h1 style={{paddingBottom:"0.3rem", marginBottom:"0", fontWeight:600}}>Weekly Total Time (in hours): {weeklyTotal}</h1>
        </div>
      </div>
  )
}