import React from 'react';
import MenuItem from './MenuItem';
import { setMenuItems } from './actions';
import { useDispatch, useSelector } from 'react-redux';


const Menu = ({ list }) => {
  const dispatch = useDispatch();
  const menuItems = useSelector((state) => state.menuItems);
  
  const updateMenuItems = () => {
    const newMenuItems = [];
    dispatch(setMenuItems(newMenuItems));
  };
  return ( <div>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>{item.label}</li>
        ))}
      </ul>
      <button onClick={updateMenuItems}>Update Menu Items</button>
    </div>
  );
}

export default Menu;