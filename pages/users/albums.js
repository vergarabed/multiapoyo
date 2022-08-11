import React, { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'
import Styled from 'styled-components'

import { fetchAllUsers } from '../store/slices/users'
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';

const Albums = () => {

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

  function clickCard(idx) {
    if (clickedItem === idx) {
        setClickedItem(-1);
    } else {
        getsPost(idx);
    }
  }

  function getsPost(idx) {
    axios.get('https://jsonplaceholder.typicode.com/users/'+idx+'/albums')
    .then(response => {
        setPosts([])
        if (response.data.length > 0) {
            setPosts(response.data)
            setClickedItem(idx);
        } else {
            setClickedItem(-1);
        }
    })
    .catch((error) => {
        setPosts([])
        console.log(error)
    })
  }

  return (
    <div className={styles.container}>
        <div className="row row-cols-1 row-cols-md-3 g-4 text-center">
            {
                users.map((user, index) => (
                    <div key={index} className={styles.card_containter + ' col'} onClick={() => { clickCard(user.id);}}>
                        <div className="card h-100 align-items-center  w-100">
                            <ImgUsers src={user.avatar} className="card-img-top rounded-circle" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{`${user.first_name} ${user.first_name}`}</h5>
                                    <p className="card-text">Email: {user.email}.</p>
                                </div>
                        </div>
                        <div className={index+1 === clickedItem ? styles.bg_card : styles.hidden_card}>
                            <div className="card h-100 align-items-center">
                                <div className="card-body">

                                    {posts.map((post, index2) => (
                                        <div key={index2} className="card-footer bg-transparent border-success">
                                            <TitlePost>{post.title}</TitlePost>
                                        </div>
                                    ))}
                                    {/* <h5 className="card-title">{posts}</h5> */}
                                    {/* <p className="card-text">Email: {user.email}.</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}


export default Albums