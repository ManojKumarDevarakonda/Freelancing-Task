import { Card, Avatar } from 'antd';
import './TasksOverview.scss';

const TasksOverview = () => {
  const aliceTasks = [
    { name: 'Interview Prep', date: 'Today', status: 'Pending', priority: 'Urgent' },
    { name: 'Policy Review', date: 'Tomorrow', status: 'Ongoing', priority: 'Normal' },
    { name: 'Risky Tasks', date: 'Next Week', status: 'Ongoing', priority: 'Urgent' }
  ];

  const charlieTasks = [
    { name: 'Data Reporting', date: 'Today', status: 'Pending', priority: 'Urgent' },
    { name: 'Diana\'s Tasks', date: 'Next Week', status: 'Ongoing', priority: 'Normal' },
    { name: 'Design Review', date: 'Next Month', status: 'On Hold', priority: 'Low Priority' }
  ];

  const TaskGroup = ({ name, tasks, avatar }: any) => (
    <div style={{ marginBottom: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <Avatar src={`https://picsum.photos/seed/${avatar}/100`} size={18} style={{ backgroundColor: '#999' }}>A</Avatar>
        <span style={{ fontSize: '13px', fontWeight: '600' }}>{name}</span>
      </div>
      {tasks.map((task: any, index: any) => (
        <div
          key={index}
          style={{
            display: 'flex',
            // gridTemplateColumns: '20px 1fr 80px 80px 80px',
            alignItems: 'center',
            padding: '8px 0.3rem',
            fontSize: '12px',
            gap: '5px'
          }}
        >
          {/* <Circle size={16} fill="#fcfbfdff" color="#a78bfa" /> */}
          <div style={{ width: '13px', height: '13px', borderRadius: '50%', border: '3px solid #a78bfa' }}></div>
          <span style={{ width: '30%', fontWeight: '600' }}>{task.name}</span>
          <span style={{ color: 'rgba(15, 3, 3, 1)', width: "25%", fontWeight: '600' }}>{task.date}</span>
          <span style={{ color: 'rgba(15, 3, 3, 1)', width: "16%", border: '1px solid #f4f1f1', borderRadius: '10px', textAlign: 'center', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)' }}>{task.status}</span>
          <span style={{ color: 'rgba(15, 3, 3, 1)', width: "16%", border: '1px solid #f4f1f1', borderRadius: '10px', textAlign: 'center', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)' }}>{task.priority}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className='task-overview-section'>
      <Card title={<span style={{ fontSize: '14px', fontWeight: '600' }}>Tasks Overview</span>}>
        <TaskGroup name="Alice's Tasks" tasks={aliceTasks} avatar="A" />
        <TaskGroup name="Charlie's Tasks" tasks={charlieTasks} avatar="C" />
      </Card>
    </div>
  );
};

export default TasksOverview;
