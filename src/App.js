import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Blog from './Blog.js';
import SideBar from './Sidebar';
import Footer from './Footer';

class App extends React.Component{
  render(){ 
    return(
      <div>
        <Header></Header>
        <div id="body">
          <Blog/>
          <SideBar/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;