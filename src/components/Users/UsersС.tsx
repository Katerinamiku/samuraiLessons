import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css'
import axios from 'axios';
import userAvatar from '../../components/img/userAvatar.png'


export class UsersC extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
        });
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
//цифры переключения сттаниц - нужно их помещать в стейт так как мы их меняем
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }


        return (
            <div className={s.userWindow}>
                <div>
                    {pages.map(p => <span className={this.props.currentPage === p ? s.selectedPage : ''}
                                          onClick={(e) => {this.onPageChanged(p)
                                          }}>{p}</span>)}

                </div>
                {this.props.users.map(u => <div key={u.id}>
                    <div className={s.userInfo}>
                <span className={s.avatarWindow}>
                    <div><img className={s.avatar} src={u.photos.small != null ? u.photos.small : userAvatar}/></div>
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
                         <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
                    </div>
                </div>)}
            </div>
        );
    }

}
