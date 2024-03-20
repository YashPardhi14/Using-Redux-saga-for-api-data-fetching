import { TaskInformation } from '../models/TaskInformation';
import { Card } from 'antd';
import { SyncOutlined, CheckOutlined } from '@ant-design/icons';

function TaskCard(props: TaskInformation) {
  return (
    <>
      <Card
        title={props.title}
        bordered={true}
        hoverable={true}
        style={{ width: 300 }}
      >
        <h2> User ID: </h2> {props.userId}
        <h2> Completed </h2>{' '}
        {props.completed ? <CheckOutlined /> : <SyncOutlined spin />}
      </Card>
    </>
  );
}

export default TaskCard;
