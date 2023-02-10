import { useState, useRef, useEffect } from 'react'
import { Notification } from '../../components/Notification';
import './style.css';

function Main() {
  const [userList, setUserList] = useState([])
  const [notifying, setNotifying] = useState(false)
  const inputRef = useRef(null)

  function handleAddUser() {
    inputRef.current.value && userList.push(inputRef.current.value)
    inputRef.current.value = ''
    setUserList([...userList])
  }

  useEffect(() => {
    if (userList.length > 0) {
      setNotifying(true)
    }
  }, [userList])

  return (
    <div className="container">
      <div className="input-container">
        <input
          type="text"
          placeholder="Nome"
          ref={inputRef}
        />
        <br />
        <button
          onClick={handleAddUser}
        >Adicionar</button>
      </div>
      <hr />
      <div className="list-container">
        <h1>Usuários</h1>
        <ul className="user-container">
          {
            userList.map(user => <li>{user}</li>)
          }
        </ul>
      </div>
      {notifying && <Notification setNotifying={setNotifying} />}
    </div>
  );
}

export default Main;
