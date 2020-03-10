import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddExpense from './components/AddExpense';
import EditExpense from './components/EditExpense';
import Contact from './components/Contact';
import NotFound from './components/NotFoundPage';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/create' component={AddExpense} />
          <Route path='/edit:id' component={EditExpense} />
          <Route path='/contact' component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
