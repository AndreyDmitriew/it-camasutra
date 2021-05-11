import React from 'react';
import styles from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';


class Users extends React.Component {

    componentDidMount() {
     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(response => {
             console.log(response, 'response')
             this.props.setUsers(response.data.items);
         });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        let changePageNum = (pageNumber) => {
            this.props.pageNumChange(pageNumber)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
                .then(response => {
                    console.log(response, 'response')
                    this.props.setUsers(response.data.items);
                });

        }


        return <div>

                <div>
                    {
                        pages.map((p) => {
                            return  <span onClick={(e) => changePageNum(p)} className={this.currentPage && styles.pageNum}>{p}</span>
                        })
                    }
                </div>

            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                </div>)
            }
        </div>

    }
}

export default Users;

































// let Users = (props) => {
//
//     let getUsers = () =>
//     {
//         if (props.users.length === 0) {
//             axios.get("https://social-network.samuraijs.com/api/1.0/users")
//                 .then(response => {
//                     console.log(response, 'response')
//                     props.setUsers(response.data.items);
//                 });
//         }
//     }
//
//     return <div>
//         <button onClick={getUsers}>Get Users</button>
//         {
//             props.users.map(u => <div key={u.id}>
//                 <span>
//                     <div>
//                         <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
//                     </div>
//                     <div>
//                         {u.followed
//                             ? <button onClick={() => {
//                                 props.unfollow(u.id)
//                             }}>Unfollow</button>
//                             : <button onClick={() => {
//                                 props.follow(u.id)
//                             }}>Follow</button>}
//
//                     </div>
//                 </span>
//                 <span>
//                     <span>
//                         <div>{u.name}</div>
//                         <div>{u.status}</div>
//                     </span>
//                     <span>
//                         <div>{"u.location.country"}</div>
//                         <div>{"u.location.city"}</div>
//                     </span>
//                 </span>
//             </div>)
//         }
//     </div>
// }
//
// export default Users;