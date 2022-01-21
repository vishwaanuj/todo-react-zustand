
import PropTypes from 'prop-types';
import Button from './Button';
import { useState } from 'react';
import AddTask from './AddTask';


const Header = (props) => {

    const [showInputField, setshowInputField] = useState(true);

    
    return (
        <div >
  <div className="container">
        <h1>
            {props.title}
        </h1>   
        <Button color={'transparent'} text={'Add'} onClick={()=>{ setshowInputField(!showInputField)}}/>
        </div>
        <div className={showInputField ? 'form-active':'form-hidden'} >
        {showInputField ? <AddTask  classForm={showInputField ? "form-active":"form-hidden"}/>:<></>}

        </div>
      
        </div>
      
    )
}


Header.defaultProps={
title:'task tracker'
}
 
Header.propTypes={
    title:PropTypes.string.isRequired
}
export default Header
