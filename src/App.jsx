import Formulaire from "./formulaire";
import ListArticle from "./componemts/listArticle"
import Addarticle from "./componemts/article";
import Editarticle from "./componemts/editarticle";
import {  Route, BrowserRouter as Router, Routes } from
'react-router-dom';
import Menu from "./componemts/menu";
import ListCards from './components/clientSide/ListCards'; 


function App() {
  return (
    <Router>
      <Menu/>
      <Routes>
        <Route path="/"element={<ListArticle/>}/>
        <Route path="/liste"element={<ListArticle/>}/>
        <Route path="/AD"element={<Addarticle/>}/>
        <Route path="/edit/:id"element={<Editarticle/>}/>
        <Route path='/' element={<ListCards/>}/>


      </Routes>
      
     
    </Router>
  );
}

export default App;


