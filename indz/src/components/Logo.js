import React from 'react';
import { useDispatch} from 'react-redux';
import { connect } from 'react-redux';
import { setLogoPath } from './actions';


const Logo = ({ imagePath }) => {
 
  const dispatch = useDispatch();
 
  
   const handleLogoClick = () => {
    dispatch(setLogoPath('/new/logo/path.png'));
  };

  return ( <div className="logo">
      <a href="/"><img src={imagePath} alt="Logo" onClick={handleLogoClick} /> </a>
    </div>);    
  
}
export default  Logo ;