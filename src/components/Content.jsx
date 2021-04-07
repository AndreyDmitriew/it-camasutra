import './Content.module.css';

const Profile = () => {
    return (
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
    )
}

export default Profile;