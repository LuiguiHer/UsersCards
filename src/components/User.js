import React from 'react';
import users from './users.json';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const User = () => {

    const [user, setUser] = useState(users[getRandom()]);
    const changeUser = () =>{
        setUser(users[getRandom()])
    }

    const colors = [
        "#845EC2",
        "#D65DB1",
        "#FF6F91",
        "#FF9671",
        "#FFC75F",
        "#F9F871"
      ];

      const color = colors[Math.floor(Math.random() * 6)];
      document.body.style = `background: ${color}`;

      const [randomuser, setRandomuser] = useState({});

      useEffect(() => {
          axios.get('https://randomuser.me/api')
      .then(res =>{
          console.log(res.data.results);
          setRandomuser(res.data.results[0])
      })
      }, [user]);
      

      

    return (
        <div className="card" style={{ color: color }}>
            <h1>Hello {randomuser.name?.title} {randomuser.name?.first} {randomuser.name?.last} </h1>
            <img src={randomuser.picture?.large} alt="" />
            <h3> 
            <i className="fas fa-envelope"></i> {randomuser.email} <br />
            <i className="fas fa-mobile"></i> {randomuser.phone} <br /> 
            <i className="fas fa-globe"></i> {randomuser.location?.country}, {randomuser.location?.state}, {randomuser.location?.city}
            </h3>
            <button   onClick={changeUser} >change User <i className="fas fa-random" ></i></button>
            
        </div>
    );
};

const getRandom =() => Math.floor(Math.random()*users.length);

export default User;