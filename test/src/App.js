import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setColor, setCategoryName } from './actions/AppAction';
import './App.css';

import Card from './components/Card';
import CategoryEdit from './components/CategoryEdit';

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);
  const currCategory = useSelector(state => state.currCategory);

  const changeColor = (ev) => {
    dispatch(setColor(ev.target.value));
  }
  const changeName = (ev) => {
    dispatch(setCategoryName(ev.target.value));
  }

  return (
    <div className="App">
      <Card card={data} currCategory={currCategory} />
      <CategoryEdit changeName={changeName} changeColor={changeColor} categoryDetails={currCategory} />
    </div>
  )
}
export default App;
