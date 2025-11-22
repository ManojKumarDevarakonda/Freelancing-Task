import "./Timesheets.scss";

const TimeSheetChart = () => {
  const months = ["January", "February", "March", "April", "May", "June"];

  const rows = [
    { label: "Hours", bars: [] },
    {
      label: "Approved Hours",
      bars: [{ start: 1, span: 2, color: "#d9c4fa" }],
    },
    {
      label: "Approval Status",
      bars: [{ start: 3, span: 2, color: "#d9c4fa" }],
    },
    {
      label: "Placeholder",
      bars: [
        { start: 2, span: 1, color: "#d9c4fa" },
        { start: 4, span: 2, color: "#d9c4fa" },
      ],
    },
  ];

  return (
    <div className="timesheet-container">
      <div className="timesheet-wrapper">
        <div>
        </div>
        <div className="timesheet-sidebar">
          {rows.map((row, i) => (
            <div className="timesheet-sidebar-item" key={i}>
              {row.label}
            </div>
          ))}
        </div>
        <div className="timesheet-chart">
          <div className="month-header-bar">
            {window.location.pathname !== '/timesheets'?<h1 style={{ marginBottom:"0", fontWeight:600, position:"absolute", top:"8%", left:"5%"}}>Time Sheets</h1> :' '}
            {months.map((m, i) => (
              <div key={i} className="month-header">
                {m}
              </div>
            ))}
          </div>
          {rows.map((row, rowIdx) => (
            <div className="chart-row" key={rowIdx}>
              <div className="chart-grid">
                {months.map((_, i) => (
                  <div className="chart-grid-cell" key={i}></div>
                ))}
              </div>

              <div className="chart-bars">
                {row.bars.map((bar: any, barIdx: any) => (
                  <div
                    key={barIdx}
                    className="chart-bar"
                    style={{
                      background: bar.color,
                      left: `${(bar.start / 6) * 100}%`,
                      width: `${(bar.span / 6) * 100}%`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div >
  );
};

export default TimeSheetChart;