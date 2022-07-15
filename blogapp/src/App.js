import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//pages
import Home from './pages/Home'
import Article from './pages/Article'
import ArticleList from './pages/ArticleList'
import About from './pages/About'
import NotFound from './pages/NotFound'

//components
import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
    <NavBar />
      <div className="max-w-screen-md mx-auto pt-20">
      <Switch>
        <Route exact path ='/' component ={ Home } />
        <Route path ='/article/:name' component ={ Article } />
        <Route path ='/article-list' component ={ ArticleList } />
        <Route path ='/about' component ={ About } />
        <Route component={NotFound} />
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
