import { useState } from 'react';
import { Menu, Plus, Star, Share2, Paperclip, UserPlus, MoreHorizontal } from 'lucide-react';
import "./Settings.scss"

export default function Settings() {
  const [attendance, setAttendance] = useState('Attendance');
  const [unmarkedAs, setUnmarkedAs] = useState('Present');
  const [maxHours, setMaxHours] = useState('0.00');
  const [halfDayFraction, setHalfDayFraction] = useState('0.50');
  const [includeHolidays, setIncludeHolidays] = useState(true);
  const [markedHolidays, setMarkedHolidays] = useState(true);
  return (
    <div className="payroll-settings-page">
      <div className="main-content">
        {/* Page Header */}
        <div className="page-header">
          <div className="page-title">
            <Menu size={24} />
            <h1>Payroll Settings</h1>
          </div>
          <div className="page-actions">
            <button className="icon-btn"><MoreHorizontal size={20} /></button>
            <button className="save-button">Save</button>
          </div>
        </div>

        <div className="content-wrapper">
          {/* Sidebar */}
          <aside className="settings-sidebar">
            <div className="settings-sidebar-section">
              <h3 className="settings-sidebar-heading">Assigned To</h3>
              <button className="settings-sidebar-btn">
                <UserPlus size={18} />
                Add Assignee
              </button>
            </div>

            <div className="settings-sidebar-section">
              <h3 className="settings-sidebar-heading">Attachments</h3>
              <button className="settings-sidebar-btn">
                <Paperclip size={18} />
                Add File
              </button>
            </div>

            <div className="settings-sidebar-section">
              <button className="settings-sidebar-btn-text">
                <Star size={18} />
                Reviews
              </button>
            </div>

            <div className="settings-sidebar-section">
              <button className="settings-sidebar-btn-icon">
                <Plus size={20} />
              </button>
            </div>

            <div className="settings-sidebar-section">
              <h3 className="settings-sidebar-heading">Shared With</h3>
              <button className="settings-sidebar-btn">
                <Share2 size={18} />
                Invite
              </button>
            </div>
          </aside>

          {/* Main Form */}
          <main className="form-content">
            <div className="form-card">
              <h2 className="form-title">Working Days and Hours</h2>

              <div className="form-grid">
                {/* Left Column */}
                <div className="form-group">
                  <label className="form-label">Calculate Payroll Working Days Based On</label>
                  <select 
                    className="form-select"
                    value={attendance}
                    onChange={(e) => setAttendance(e.target.value)}
                  >
                    <option>Attendance</option>
                    <option>Schedule</option>
                    <option>Timesheet</option>
                  </select>
                </div>

                {/* Right Column */}
                <div className="form-group">
                  <label className="form-label">Max working hours against Timesheet</label>
                  <input 
                    type="text"
                    className="form-input"
                    value={maxHours}
                    onChange={(e) => setMaxHours(e.target.value)}
                  />
                </div>

                {/* Left Column */}
                <div className="form-group">
                  <label className="form-label">Consider Unmarked Attendance As</label>
                  <select 
                    className="form-select"
                    value={unmarkedAs}
                    onChange={(e) => setUnmarkedAs(e.target.value)}
                  >
                    <option>Present</option>
                    <option>Absent</option>
                    <option>Half Day</option>
                  </select>
                </div>

                {/* Right Column */}
                <div className="form-group">
                  <label className="form-label">Fraction of Daily Salary for Half Day</label>
                  <input 
                    type="text"
                    className="form-input"
                    value={halfDayFraction}
                    onChange={(e) => setHalfDayFraction(e.target.value)}
                  />
                  <p className="form-helper">The fraction of daily wages to be paid for half-day attendance</p>
                </div>
              </div>

              {/* Checkboxes */}
              <div className="checkbox-section">
                <label className="checkbox-label">
                  <input 
                    type="checkbox"
                    checked={includeHolidays}
                    onChange={(e) => setIncludeHolidays(e.target.checked)}
                  />
                  <span className="checkbox-text">Include holidays in Total no. of Working Days</span>
                </label>
                <p className="checkbox-helper">
                  If enabled, total no. of working days will include holidays, and this will reduce the value of Salary Per Day
                </p>
              </div>

              <div className="checkbox-section">
                <label className="checkbox-label">
                  <input 
                    type="checkbox"
                    checked={markedHolidays}
                    onChange={(e) => setMarkedHolidays(e.target.checked)}
                  />
                  <span className="checkbox-text">Consider Marked Attendance on Holidays</span>
                </label>
                <p className="checkbox-helper">
                  If enabled, deducts payment days for absent attendance on holidays. By default, holidays are considered as paid
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
 
    </div>
  );
}