import React, { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'
import Styled from 'styled-components'

import { fetchAllUsers } from '../store/slices/users'
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';

const List = () => {

  const [clickedItem, setClickedItem] = useState(-2);
  const [posts, setPosts] = useState([]);

  const ImgUsers = Styled.img`
    max-width:50%;
  `;

  const TitlePost = Styled.p`
    font-size:12px;
  `;

  const TextPost = Styled.p`
    font-size:8px;
  `;

  const { list: users } = useSelector(state => state.users);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [])

  return (
    <div className={styles.container}>
        <div className="row row-cols-1 row-cols-md-3 g-4 text-center">
            {
                users.map((user, index) => (
                    <div key={index} className={styles.card_containter + ' col'}>
                        <div className="card h-100 align-items-center  w-100">
                            <ImgUsers src={user.avatar} className="card-img-top rounded-circle" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{`${user.first_name} ${user.first_name}`}</h5>
                                    <p className="card-text">Email: {user.email}.</p>
                                </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}


export default List