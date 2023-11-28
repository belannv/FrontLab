// reducers.js
const initialState = {  
  menuItems: [],
  clock: {
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOGO_PATH':
      return { ...state, imagePath: action.payload };
    case 'SET_MENU_ITEMS':
      return { ...state, menuItems: action.payload };
case 'UPDATE_CLOCK':
      return { ...state, clock: action.payload };	  
    default:
      return state;
  }
};

export default rootReducer;