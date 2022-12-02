
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import { router } from './routes/Root';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
