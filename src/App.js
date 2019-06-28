import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      title:"Badshds djsk",
      image: "https://ih1.redbubble.net/image.520790511.0240/flat,550x550,075,f.u2.jpg",
      content:[`Bacon ipsum dolor amet burgdoggen salami brisket swine kevin
       shankle beef cow pork belly. Biltong pork loin porchetta turducken, 
       pig chicken tenderloin chuck. Pig venison doner, ham hock beef chuc
       k brisket strip steak boudin. Salami turducken bresaola cow brisket
       , pork belly fatback sirloin short loin flank.`,
       `Ham hock cow t-bone meatball filet mignon porchetta, pastrami short 
       loin hamburger. Bacon chuck salami drumstick ribeye bresaola pork l
       oin pancetta capicola boudin shankle pastrami spare ribs tri-tip bu
       rgdoggen. Porchetta tongue ground round landjaeger, ball tip ham po
       rk loin swine venison tenderloin prosciutto pastrami leberkas cow. 
       Spare ribs strip steak pork t-bone boudin brisket picanha corned be
       ef burgdoggen.`,
      `Salami turkey pork loin, boudin drumstick ribeye pancetta beef ribs j
      erky leberkas andouille pork belly bacon porchetta. Ham fatback ribey
      e flank jerky kevin bacon frankfurter tongue jowl. Corned beef pork t
      urkey tri-tip frankfurter cupim. Shoulder biltong filet mignon prosci
      utto doner picanha, short loin pig.`, 
      `Chuck cupim drumstick, shank pancetta fatback hamburger venison pican
      ha buffalo pork belly pork corned beef. Cupim fatback shank andouille
       beef ribs corned beef pork chop, shoulder brisket jerky. Tail tongue
      jerky short loin, pork belly sirloin shankle. Corned beef rump ham do
      ner beef.`,
      `Landjaeger leberkas shank doner, andouille jerky pork loin kevin shou
      lder tongue buffalo porchetta ham chicken jowl. Alcatra biltong shoul
      der tenderloin, landjaeger cupim tri-tip pastrami shankle beef ribs b
      eef pork. Ball tip cow tongue brisket pig pork pancetta bacon biltong
       rump pork loin sausage shank sirloin. T-bone ribeye ground round bac
       on filet mignon pig biltong sirloin tongue cupim brisket venison. Ta
       il jowl turducken shank, shoulder cow andouille ribeye pork loin don
       er swine shankle strip steak bresaola ham. Chicken tenderloin bresao
       la tri-tip turducken frankfurter ham hock cupim leberkas beef ribs. 
       Beef chuck corned beef andouille chicken ground round drumstick stri
       p steak prosciutto jerky spare ribs meatball cow pork belly kielbasa.
       shankle beef cow pork belly. Biltong pork loin porchetta turducken, 
       pig chicken tenderloin chuck. Pig venison doner, ham hock beef chuc
       k brisket strip steak boudin. Salami turducken bresaola cow brisket
       , pork belly fatback sirloin short loin flank.`,
       `Ham hock cow t-bone meatball filet mignon porchetta, pastrami short 
       loin hamburger. Bacon chuck salami drumstick ribeye bresaola pork l
       oin pancetta capicola boudin shankle pastrami spare ribs tri-tip bu
       rgdoggen. Porchetta tongue ground round landjaeger, ball tip ham po
       rk loin swine venison tenderloin prosciutto pastrami leberkas cow. 
       Spare ribs strip steak pork t-bone boudin brisket picanha corned be
       ef burgdoggen.`,
      `Salami turkey pork loin, boudin drumstick ribeye pancetta beef ribs j
      erky leberkas andouille pork belly bacon porchetta. Ham fatback ribey
      e flank jerky kevin bacon frankfurter tongue jowl. Corned beef pork t
      urkey tri-tip frankfurter cupim. Shoulder biltong filet mignon prosci
      utto doner picanha, short loin pig.`, 
      `Chuck cupim drumstick, shank pancetta fatback hamburger venison pican
      ha buffalo pork belly pork corned beef. Cupim fatback shank andouille
       beef ribs corned beef pork chop, shoulder brisket jerky. Tail tongue
      jerky short loin, pork belly sirloin shankle. Corned beef rump ham do
      ner beef.`,
      `Landjaeger leberkas shank doner, andouille jerky pork loin kevin shou
      lder tongue buffalo porchetta ham chicken jowl. Alcatra biltong shoul
      der tenderloin, landjaeger cupim tri-tip pastrami shankle beef ribs b
      eef pork. Ball tip cow tongue brisket pig pork pancetta bacon biltong
       rump pork loin sausage shank sirloin. T-bone ribeye ground round bac
       on filet mignon pig biltong sirloin tongue cupim brisket venison. Ta
       il jowl turducken shank, shoulder cow andouille ribeye pork loin don
       er swine shankle strip steak bresaola ham. Chicken tenderloin bresao
       la tri-tip turducken frankfurter ham hock cupim leberkas beef ribs. 
       Beef chuck corned beef andouille chicken ground round drumstick stri
       p steak prosciutto jerky spare ribs meatball cow pork belly kielbasa.`],
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
    };
  }
  render(){ 
    return(
      <div>
        <div id="header">
          <div class="head">
            <img id="icon" src="https://cdn0.iconfinder.com/data/icons/symbols-symbols-add-on-vol-1/48/v-49-512.png"/>
          </div>
          <div class="head">
            <p id="head-text">Blog Words</p>
          </div>
          <div class="head">
            
          </div>
        </div>

        <div id="body">
          <div id="blog" class="body-div">
            <h2>{this.state.title}</h2>  
            <div id="blogImg"><img id="bImg" src={this.state.image} alt="Not found"/></div>
            <p class="blogContent">{this.state.content.map(data=>{
              return<p>{data}</p>;
            })}</p>
          </div>
          <div id="sidebar" class="body-div">
            {this.state.sideBarData.map(data=>{
              return (<div class="sideRow">
                        <img class="sidebarIcon side-row-data" src={data.icon} alt="Not Found"/>
                        <a class="sidebarText side-row-data" href={data.link}>{data.text}</a>
                    </div>);
          })}
          </div>
        </div>

        <div id="footer">
          <div id="social"></div>
          <div id="copyright">Copyright &copy; 2019 Ather Energy - Banglore, India </div>
        </div>
      </div>
    );
  }
}

export default App;