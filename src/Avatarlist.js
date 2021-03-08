import React from 'react';
import './Avatar.css';

const Avatarlist = (props) =>
            {
            	return 	<div className="avatarstyle ma4 bg-light-blue dib grow pa3 tc ">
							<img src={`https://joeschmoe.io/api/v1/${props.name}`} alt='manan' />
							<h1  className="tc">{props.name}</h1>
							<p className="tc">{props.work}</p>
						</div>
            };		

export default Avatarlist;