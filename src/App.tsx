import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import './App.css';
import CauOne from './pages/CauOne';
import CauTwo from './pages/CauTwo';
import Menu from './pages/Menu';

function App() {
  return (
    <Router>
      <div className="App">
        <h4 className="text-[32px] text-[#64CAF4]">Nguyễn Việt Hoàng</h4>
        <ul className="flex px-5  gap-4 mt-4">
          <li className="hover:bg-[#ccc]">
            <a href="/">Câu 1</a>
          </li>
          <li className="hover:bg-[#ccc]">
            <a href="/cautwo">Câu 2</a>
          </li>
          <li className="hover:bg-[#ccc]">
            <a href="/menu">Menu</a>
          </li>
        </ul>
        <div className="mt-4 flex justify-center">
          {' '}
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page =
                route.component === 'CauOne'
                  ? CauOne
                  : route.component === 'CauTwo'
                    ? CauTwo
                    : Menu;
              return (
                <Route key={index} path={route.path} element={<Page />} /> //
              );
            })}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
