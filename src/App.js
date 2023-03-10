import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';

import './index.css';

// Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>

      <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />

    </div>
  );
}

export default App;