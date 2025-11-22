import React from 'react';
import dayjs from 'dayjs';
import { Calendar } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './CurrentMonth.scss';

const customWeekLabels = [
  'HR',
  'Timeshe',
  'Payroll',
  'Onboard',
  'Reports',
  'Settings',
  'Logout',
];
export default function CurrentMonth() {
  const [current, setCurrent] = React.useState(dayjs());

  const prevMonth = () => setCurrent(current.clone().subtract(1, 'month'));
  const nextMonth = () => setCurrent(current.clone().add(1, 'month'));

  return (
    <div className="cal-wrapper">
      <div className="cal-header">
        <h3 style={{ fontWeight: "500" }}>
          {current.format("MMMM") === dayjs().format("MMMM") ? "Current Month" : current.format("MMMM")}
        </h3>

        <div className="nav-btns">
          <button className="circle-btn" onClick={prevMonth}>
            <LeftOutlined />
          </button>
          <button className="circle-btn" onClick={nextMonth}>
            <RightOutlined />
          </button>
        </div>
      </div>
      <div className="custom-cal-body">
        <div className="week-row">
          {customWeekLabels.map((d) => (
            <div key={d} className="week-label">
              {d}
            </div>
          ))}
        </div>
        <Calendar
          value={current}
          fullscreen={false}
          headerRender={() => null}
          onChange={(val) => setCurrent(val)}
          className="custom-cal"
        />
      </div>
    </div>
  );
}
