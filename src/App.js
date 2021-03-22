import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img height={'100px'}  src={'https://www.vitbichi.by/upload/iblock/e1f/e1f73cdb0becb337d72b9263513ba1b7.jpg'}/>
      </header>
      <nav className="navBar">
        <div><a>Profile</a></div>
        <div><a>Messages</a></div>
        <div><a>News</a></div>
        <div><a>Music</a></div>
        <div><a>Settings</a></div>
      </nav>
      <div className="content">
        <div>
          <img height={'100px'} src={'https://ichef.bbci.co.uk/news/800/cpsprodpb/4AC5/production/_111914191_b5eff905-0549-4c4f-84e1-1bc01721ae50.jpg'}/>
          + description
        </div>
        <div>
          My posts
          <div>New post</div>
        </div>
        <div>
          <div>Post 1</div>
          <div>Post 2</div>
          <div>Post 3</div>
        </div>
      </div>
    </div>
  );
}

export default App;
