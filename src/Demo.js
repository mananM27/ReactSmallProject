import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

// class Demo extends Component {
// 	render(){
// 		return <div className='mydemo'>
// 			    <h1>Demo of {this.props.name}</h1>
// 			    <p> THIS IS css component addition test</p>
// 			   </div>

// 			 }

 
// }
const Demo=(props)=>
	{
		return <div className='mydemo'>
			    <h1>Demo of {props.name}</h1>
			    <p> THIS IS css component addition test</p>
			   </div>

	}

export default Demo;