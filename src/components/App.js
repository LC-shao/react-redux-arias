import React, { PropTypes } from 'react';
import Footer from './Footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList isFetching="222" />
    <Footer />
  </div>
);

App.propTypes = {
  params: PropTypes.shape({
    filter: PropTypes.string
  }),
};

export default App;
