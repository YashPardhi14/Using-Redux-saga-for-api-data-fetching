import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { RootState } from './redux/reducer/rootReducer';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import { fetchPostsRequest } from './redux/actions/postActions';
import TaskCard from './components/TaskCard';
import { TaskInformation } from './models/TaskInformation';
import { Flex } from 'antd';
function App() {
  const dispatch = useDispatch();
  const { pending, posts, error } = useSelector(
    (state: RootState) => state.posts
  );

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, []);
  return (
    <div>
      <h1>Task Details.... </h1>
      {pending ? (
        <div>
          <Spin />
        </div>
      ) : error ? (
        <div>
          Error{' '}
          <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
        </div>
      ) : (
        <Flex wrap="wrap" gap="small">
          {posts?.map((todo: TaskInformation) => (
            <div key={todo.id}>
              <TaskCard {...todo} />
            </div>
          ))}
        </Flex>
      )}
    </div>
  );
}

export default App;
