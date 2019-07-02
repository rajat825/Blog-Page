import React from 'react';
import logo from './logo.svg';

class Header extends React.Component{
    constructor()
    {
        super();
        this.state = {
            isHamOpen: false
        }
    }

    hamClicked = (event)=>{
        console.log("Ham Clicked");
        let hamMenu = document.getElementById("hamburger-menu");
        let ham = this.state.isHamOpen;
        if(ham==true){
            hamMenu.style.display = "none";
            console.log("Dropdown closed");
        }
        else{
            hamMenu.style.display = "block";
            console.log("Dropdown is open");
        }
        this.setState({isHamOpen:!ham});
    }

    render(){
        return (
        <div id="header">

          <div class="head" id="icon-div">
            <a href="/"><img id="icon" src="https://cdn0.iconfinder.com/data/icons/symbols-symbols-add-on-vol-1/48/v-49-512.png"/></a>
          </div>

          <div class="head" id="text-div">
            <p id="head-text">Blog Words</p>
          </div>

          <div class="head" id="hamburger-div" onClick={this.hamClicked}>
            <div class="hamburger-icon"></div>
            <div class="hamburger-icon"></div>
            <div class="hamburger-icon"></div>
            <div id="hamburger-menu">
              <div id="hamburger-container">
                <div class="hamburger-menu-items"><a class ="head-link" href="http://google.com">Search</a></div>
                <div class="hamburger-menu-items"><a class ="head-link" href="http://google.com">Login</a></div>
                <div class="hamburger-menu-items"><a class ="head-link" href="http://google.com">SignUp</a></div>
              </div>
            </div>
          </div>

          <div class="head" id="link-div">
            <a class ="head-link" href="http://google.com">Search</a>
            <a class ="head-link" href="http://google.com">Login</a>
            <a class ="head-link" href="http://google.com">SignUp</a>
          </div>

        </div>);
    }
}

export default Header;