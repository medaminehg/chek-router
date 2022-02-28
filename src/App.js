import React,{useState} from 'react'
import './App.css';
import Header from './componed/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reate from './componed/Reate';
import MovisListe from './componed/MovisListe';
import {FaStar} from "react-icons/fa"
import Addfilm from './componed/Addfilm';
import NewMovie from './NewMovie';
import { Route, Routes } from 'react-router-dom'
import Descreption from './componed/Descreption';
import ScrollTop from "./componed/ScrollTop"
function App() {
  const[movis, setmovis]=useState([{
    name: "interstellar",
    img :"https://media.s-bol.com/g1GJQW2zJNr/550x779.jpg",
   rat: 5,
    prod :"Top cast ; Matthew McConaughey · Cooper ; Anne Hathaway · Brand ; Jessica Chastain",
    ann : "https://www.youtube.com/watch?v=VaOijhK3CRU"
  
  },{
    name: "inception",
    img :"https://m.media-amazon.com/images/M/MV5BMTM0MjUzNjkwMl5BMl5BanBnXkFtZTcwNjY0OTk1Mw@@._V1_.jpg",
    rat: 4, 
    prod: "Top cast ; Leonardo DiCaprio · Cobb ; Joseph Gordon-Levitt · Arthur ; Elliot Page · Ariadne ; Ken Watanabe",
    ann:"https://www.youtube.com/watch?v=CPTIgILtna8"
  },{
    name: "catch me if you can",
    img :"https://m.media-amazon.com/images/I/81V+b69u3xL._AC_SL1500_.jpg",
    rat: 5,
    prod : "Top cast ; Leonardo DiCaprio · Frank Abagnale ; Tom Hanks · Carl Hanratty ; Christopher Walken · Frank Abagnale",
    ann : "https://www.youtube.com/watch?v=s-7pyIxz8Qg"
  },{
    name: "the dictator",
    img :"https://images.static-bluray.com/products/20/9149_1_large.jpg",
    rat: 3,
    prod: "Top cast ; Sacha Baron Cohen · Aladeen ; Anna Faris · Zoey ; John C. Reilly · Clayton ; Ben Kingsley · Tamir ; Sayed Badreya",
    ann : "https://www.youtube.com/watch?v=cazCtxtoscM"
  },{
    name: "The Curious Case of Benjamin Button",
    img :"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/dd8ff745eadb648fb562f9e4572b2d94cfce917845e911711ebc78552f1031d1._RI_V_TTW_.jpg",
    rat: 3,
    prod: "Top cast ; Brad Pitt · Benjamin Buttonas Benjamin Button ; Cate Blanchett · Daisyas Daisy ; Tilda Swinton ·",
    ann:"https://www.youtube.com/watch?v=iH6FdW39Hag"
  },{
    name: "fury",
    img :"https://kinepolis.be/fr/sites/kinepolis.be.fr/files/styles/kinepolis_filter_movie_poster/public/posters/fury_BEFR_def.jpg",
    rat: 3,
    prod :"Cast. Brad Pitt: Wardaddy, Executive Producer",
    ann: "https://www.youtube.com/watch?v=DNHuK1rteF4&ab_channel=MovieclipsTrailers"
  }])
  const [filmReate, setfilmReate]=useState(0)
  const [Movisname, setMovisname]=useState("")
  const [NewmoHed, setNewmoHed]=useState({
    name:"Red Notice",
    img : "https://wallpaperaccess.com/full/7741536.jpg",
    rat : 2 ,
    ann:"https://www.youtube.com/embed/DNHuK1rteF4"
  })
  const [connecter, setconnecter]=useState("login")
 function conect(v){
  setconnecter(v)
 }
  const add=(x) =>{
    setfilmReate(x)
  }
  function addch(ch) {
    setMovisname(ch)
  }
  function addmovie(obj) {
    setmovis([...movis,obj])
  }
  function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    
    return function (a,b) {
        /* next line works with strings and numbers, 
         * and you may want to customize it to your needs
         */
        var result = (a[property] > b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

  return (
    <div className='App'>
      
      
      <Header add={add} addch={addch} conect={conect} />
      <Routes >
      <Route path='/' element={<div>    
      <ScrollTop/>
        

        <NewMovie Newm={NewmoHed}/>
      <MovisListe movis={movis.filter(el => filmReate <= el.rat).filter(v =>v.name.includes(Movisname.trim()))}/>
      
      {(connecter==="logout")?<Addfilm addmovie={addmovie}/>:null}
      
      </div> } />
      <Route path='/serch' element={<div>
        
        <ScrollTop/>

      <h1 className='serch'>Top Rating</h1>
      <MovisListe movis={movis.sort(dynamicSort("rat")).filter(el => filmReate <= el.rat).filter(v =>v.name.includes(Movisname.trim()))}/>
     
      </div>} />
      <Route path='/serchm' element={<div>
        

     <MovisListe movis={movis.sort(dynamicSort("rat")).filter(el => filmReate <= el.rat).filter(v =>v.name.includes(Movisname.trim()))}/>
    
     </div>} />
      <Route path='/users/profile/:name' element={<div>
        
        <ScrollTop/>

        <Descreption  movis={movis}/>
      </div>} />
      

      </Routes>
      
    </div>
  )
}

export default App
