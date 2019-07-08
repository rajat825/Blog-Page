import React from 'react';

class SideBar extends React.Component{
    constructor(){
        super();
        this.state = {
            sideBarData: [{
                icon:`https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Dark-512.png`,
                link:`http://google.com`,
                text:`Click here!`
                },
                {
                  icon:`https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Dark-512.png`,
                  link:`http://google.com`,
                  text:`Click here!`
                },
                {
                  icon:`https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Dark-512.png`,
                  link:`http://google.com`,
                  text:`Click here!`
                },
                {
                  icon:`https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Dark-512.png`,
                  link:`http://google.com`,
                  text:`Click here!`
                },
                {
                  icon:`https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Dark-512.png`,
                  link:`http://google.com`,
                  text:`Click here!`
                },
                {
                  icon:`https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Dark-512.png`,
                  link:`http://google.com`,
                  text:`Click here!`
                },
                {
                  icon:`https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Dark-512.png`,
                  link:`http://google.com`,
                  text:`Click here!`
                }]
            }
    }
    
    render(){
        return(
            <div id="sidebar" class="body-div">
            {this.state.sideBarData.map(data=>{ 
              return (<div class="sideRow">
                        <img class="sidebarIcon side-row-data" src={data.icon} alt="Not Found"/>
                        <a class="sidebarText side-row-data" href={data.link}>{data.text}</a>
                    </div>);
          })}
          </div>
        );
    }

}

export default SideBar;