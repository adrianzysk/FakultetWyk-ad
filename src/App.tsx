import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Posts from './views/home/Posts';


//yarn add @types/react-router-dom  @types/react-router


const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Switch>
            <Route path="/" component={Posts} />
          </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;




