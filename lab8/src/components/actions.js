// actions.js
export const setLogoPath = (path) => ({
  type: 'SET_LOGO_PATH',
  payload: path,
});

export const setMenuItems = (items) => ({
  type: 'SET_MENU_ITEMS',
  payload: items,
});

export const updateClock = (newDate) => ({
  type: 'UPDATE_CLOCK',
  payload: newDate,
});