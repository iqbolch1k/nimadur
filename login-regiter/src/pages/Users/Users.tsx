import { useEffect, useState } from 'react';
import UserService from '../../api/service/Users';
import Navbar from '../../components/Navbar';
import './Users.css';
import UseFetch from '../../hooks/UseFetch';
// import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useThemeContext } from '../../context/BtnThemeContext';

interface UserType {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
}

function Users() {
  const { data, loading, error } = UseFetch(UserService.getAllUser);
  const [userData, setUserData] = useState<UserType[]>([]);
  const { theme } = useThemeContext()
  useEffect(() => {
    if (Array.isArray(data)) {
      setUserData(data);
    } else {
      setUserData([]);
    }
  }, [data]);
  console.log(loading, error);

  return (
    <div>
      <Navbar />
      <main className='main'>
        <div className={`table-title ${theme === 'light' ? 'light' : ''}`}>Users</div>
        <table className={`table ${theme === 'light' ? 'light' : ''}`}>
          <thead className={`thead-item ${theme === 'light' ? 'light' : ''}`}>
            <tr>
              <th>id</th>
              <th>first name</th>
              <th>last name</th>
              <th>email</th>
              <th>username</th>
            </tr>
          </thead>
          <tbody>
            {userData.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.last_name}</td>
                <td>{user.first_name}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default Users;
