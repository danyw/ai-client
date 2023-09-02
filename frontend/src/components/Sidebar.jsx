import './sidebar.css';

const Sidebar = () => {
  return <div className="sidebar">
    <button className="sidebar__button">+ New chat</button>
    <ul className="sidebar__chats-history">
        <li>Chat 1</li>
    </ul>
    <nav>
        <p>Settings</p>
    </nav>
  </div>;
};

export default Sidebar;