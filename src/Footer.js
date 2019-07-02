import React from 'react';

class Footer extends React.Component{
    constructor(){
        super();
        this.state={
            socialIcons:{
              facebook:"https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png",
              twitter:"https://cdn3.iconfinder.com/data/icons/inficons-round-brand-set-2/512/twitter-512.png",
              github:"https://image.flaticon.com/icons/svg/25/25231.svg"
            }
        };
    }
    render(){
        return(
            <div id="footer">

                <div id="social" class="foot">
                    <a href="https://www.facebook.com"><img src={this.state.socialIcons.facebook}/></a>
                    <a href="https://www.twitter.com"><img src={this.state.socialIcons.twitter}/></a>
                    <a href="https://www.github.com"><img src={this.state.socialIcons.github}/></a>
                </div>

            <div id="copyright" class="foot">Copyright &copy; 2019 Ather Energy - Banglore, India </div>
        
            </div>
        );
    }
}

export default Footer;