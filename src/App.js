import './App.css';
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes';

function App() {
  return (
    <RouterProvider router={routes}>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </RouterProvider>
  );
}

export default App;
