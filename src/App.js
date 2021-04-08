import Switch from 'react-bootstrap/esm/Switch';
import './App.scss';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/PortfoliosPage';
import ContactPage from './pages/ContactPage';
import { Route} from 'react-router-dom';


function App() {
    return(
        <div className= "App">
            <div className="sidebar">
                <NavBar />
            </div>
            <div className="main-content">
                <div className="content">
                    <Switch>
                        <Route path="/" exact>
                            <HomePage />
                        </Route>
                        <Route path="/about" exact>
                            <AboutPage />
                        </Route>
                        <Route path="/projects" exact>
                            <ProjectsPage />
                        </Route>
                        <Route path="/contact" exact>
                            <ContactPage />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default App;