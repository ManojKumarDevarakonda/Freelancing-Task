import { Card, Avatar } from 'antd';
import { ArrowRight } from 'lucide-react';

const TeamDirectory = () => {
  const team = [
    { name: 'Alice J.', role: 'HR Director', avatar: 'AJ', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { name: 'Bob K.', role: 'Recruitment Lead', avatar: 'BK', img: "https://randomuser.me/api/portraits/men/45.jpg" },
    { name: 'Charlie L.', role: 'Data Analyst', avatar: 'CL', img: "https://randomuser.me/api/portraits/men/46.jpg" },
    { name: 'Diana M.', role: 'UX Designer', avatar: 'DM', img: "https://randomuser.me/api/portraits/women/47.jpg" }
  ];

  return (
    <Card
      title={
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '14px', fontWeight: '600' }}>Team Directory</span>
          <span style={{ fontSize: '12px', color: '#1890ff', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }} onClick={() => window.location.href = '/team-directory'}>
            View All <ArrowRight size={14} />
          </span>
        </div>
      }
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
        {team.map((member, index) => (
          <div key={index} style={{ textAlign: 'center', border: '1px solid #f4f1f1', borderRadius: '0.3rem', padding: '0.4rem', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <Avatar
              src={member.img}
              size={64}
              style={{ backgroundColor: '#999', marginBottom: '8px' }}
            >
              {member.avatar}
            </Avatar>
            <div style={{ fontSize: '13px', fontWeight: '600', marginBottom: '2px' }}>
              {member.name}
            </div>
            <div style={{ fontSize: '11px', color: '#666' }}>
              {member.role}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TeamDirectory;
