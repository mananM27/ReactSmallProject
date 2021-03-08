import React from 'react';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';

const Avatar = (props) =>
	        {

	        	const Avatarlistarray=
	        	[
		        	{
		        	    id:1,
		        		name:'Manan',
		        		work:'Webdevloper'
	             	},
             		{
             			id:2,
             			name:'Mandaliya',
             			work:'Webdevloper'
             		},
             		{
             			id:3,
             			name:'soni',
             			work:'Webdevloper'
             		}
	        	];

	        		const arrayavatarcard=Avatarlistarray.map((avatarcard,i)=>{
	        			return <Avatarlist  id={Avatarlistarray[i].id} name={Avatarlistarray[i].name} work={Avatarlistarray[i].work} />

	        		})

            	return 	<div className="mainpage">
							<h1 className="tc">Hello guys</h1>
							  {arrayavatarcard} 
							<button className="tc">Subscribe</button>
						</div>
            };		


export default Avatar;