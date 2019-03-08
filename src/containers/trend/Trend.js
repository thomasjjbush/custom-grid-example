import React, { Component } from 'react';
import './Trend.css';

class Trend extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            scroll: 0 
        }
    }
    handleScroll = (scroll) => {
        if ( scroll > 200 && this.state.scroll < scroll ) return this.setState({ scroll: 200 })
        this.setState({ scroll })
    }
    render() {
        return (
            <main className="trend">
                <div 
                    className="trend__scrollable scrollable" 
                    onScroll={(e) => this.handleScroll(e.target.scrollTop)}
                    style={{ paddingTop: this.state.scroll < 200 ? `${this.state.scroll}px` : '0' }}
                >
                    <div 
                        className="trend__scrollable--hero"
                        style={{
                            height: `${50 - this.state.scroll/5}vh`, 
                            position: this.state.scroll >= 200 ? 'absolute' : 'relative'
                        }}
                    >
                        <span className="trend__scrollable--hero--mask" style={{opacity: this.state.scroll > 200 ? 1 : this.state.scroll/2/100}} />
                        <h1>Article 1</h1>
                    </div>
                    <div className="trend__scrollable--content" style={{ marginTop: this.state.scroll === 200 ? 'calc(220px + 10vh)' : '20px'}}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper sapien felis, sit amet iaculis elit venenatis ac. Fusce elementum leo eget nulla posuere ullamcorper. Etiam viverra vitae ex at rutrum. Aliquam molestie enim nec dolor tempus pulvinar. Duis vel cursus nisi. Sed sit amet tincidunt massa. Nam sodales, tortor et mollis ultricies, elit libero maximus neque, ut varius quam ante eget ex. Vestibulum ultrices, orci quis tincidunt eleifend, elit ipsum consectetur erat, sit amet pulvinar diam ligula mollis elit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper sapien felis, sit amet iaculis elit venenatis ac. Fusce elementum leo eget nulla posuere ullamcorper. Etiam viverra vitae ex at rutrum. Aliquam molestie enim nec dolor tempus pulvinar. Duis vel cursus nisi. Sed sit amet tincidunt massa. Nam sodales, tortor et mollis ultricies, elit libero maximus neque, ut varius quam ante eget ex. Vestibulum ultrices, orci quis tincidunt eleifend, elit ipsum consectetur erat, sit amet pulvinar diam ligula mollis elit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper sapien felis, sit amet iaculis elit venenatis ac. Fusce elementum leo eget nulla posuere ullamcorper. Etiam viverra vitae ex at rutrum. Aliquam molestie enim nec dolor tempus pulvinar. Duis vel cursus nisi. Sed sit amet tincidunt massa. Nam sodales, tortor et mollis ultricies, elit libero maximus neque, ut varius quam ante eget ex. Vestibulum ultrices, orci quis tincidunt eleifend, elit ipsum consectetur erat, sit amet pulvinar diam ligula mollis elit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper sapien felis, sit amet iaculis elit venenatis ac. Fusce elementum leo eget nulla posuere ullamcorper. Etiam viverra vitae ex at rutrum. Aliquam molestie enim nec dolor tempus pulvinar. Duis vel cursus nisi. Sed sit amet tincidunt massa. Nam sodales, tortor et mollis ultricies, elit libero maximus neque, ut varius quam ante eget ex. Vestibulum ultrices, orci quis tincidunt eleifend, elit ipsum consectetur erat, sit amet pulvinar diam ligula mollis elit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper sapien felis, sit amet iaculis elit venenatis ac. Fusce elementum leo eget nulla posuere ullamcorper. Etiam viverra vitae ex at rutrum. Aliquam molestie enim nec dolor tempus pulvinar. Duis vel cursus nisi. Sed sit amet tincidunt massa. Nam sodales, tortor et mollis ultricies, elit libero maximus neque, ut varius quam ante eget ex. Vestibulum ultrices, orci quis tincidunt eleifend, elit ipsum consectetur erat, sit amet pulvinar diam ligula mollis elit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper sapien felis, sit amet iaculis elit venenatis ac. Fusce elementum leo eget nulla posuere ullamcorper. Etiam viverra vitae ex at rutrum. Aliquam molestie enim nec dolor tempus pulvinar. Duis vel cursus nisi. Sed sit amet tincidunt massa. Nam sodales, tortor et mollis ultricies, elit libero maximus neque, ut varius quam ante eget ex. Vestibulum ultrices, orci quis tincidunt eleifend, elit ipsum consectetur erat, sit amet pulvinar diam ligula mollis elit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper sapien felis, sit amet iaculis elit venenatis ac. Fusce elementum leo eget nulla posuere ullamcorper. Etiam viverra vitae ex at rutrum. Aliquam molestie enim nec dolor tempus pulvinar. Duis vel cursus nisi. Sed sit amet tincidunt massa. Nam sodales, tortor et mollis ultricies, elit libero maximus neque, ut varius quam ante eget ex. Vestibulum ultrices, orci quis tincidunt eleifend, elit ipsum consectetur erat, sit amet pulvinar diam ligula mollis elit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper sapien felis, sit amet iaculis elit venenatis ac. Fusce elementum leo eget nulla posuere ullamcorper. Etiam viverra vitae ex at rutrum. Aliquam molestie enim nec dolor tempus pulvinar. Duis vel cursus nisi. Sed sit amet tincidunt massa. Nam sodales, tortor et mollis ultricies, elit libero maximus neque, ut varius quam ante eget ex. Vestibulum ultrices, orci quis tincidunt eleifend, elit ipsum consectetur erat, sit amet pulvinar diam ligula mollis elit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper sapien felis, sit amet iaculis elit venenatis ac. Fusce elementum leo eget nulla posuere ullamcorper. Etiam viverra vitae ex at rutrum. Aliquam molestie enim nec dolor tempus pulvinar. Duis vel cursus nisi. Sed sit amet tincidunt massa. Nam sodales, tortor et mollis ultricies, elit libero maximus neque, ut varius quam ante eget ex. Vestibulum ultrices, orci quis tincidunt eleifend, elit ipsum consectetur erat, sit amet pulvinar diam ligula mollis elit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper sapien felis, sit amet iaculis elit venenatis ac. Fusce elementum leo eget nulla posuere ullamcorper. Etiam viverra vitae ex at rutrum. Aliquam molestie enim nec dolor tempus pulvinar. Duis vel cursus nisi. Sed sit amet tincidunt massa. Nam sodales, tortor et mollis ultricies, elit libero maximus neque, ut varius quam ante eget ex. Vestibulum ultrices, orci quis tincidunt eleifend, elit ipsum consectetur erat, sit amet pulvinar diam ligula mollis elit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper sapien felis, sit amet iaculis elit venenatis ac. Fusce elementum leo eget nulla posuere ullamcorper. Etiam viverra vitae ex at rutrum. Aliquam molestie enim nec dolor tempus pulvinar. Duis vel cursus nisi. Sed sit amet tincidunt massa. Nam sodales, tortor et mollis ultricies, elit libero maximus neque, ut varius quam ante eget ex. Vestibulum ultrices, orci quis tincidunt eleifend, elit ipsum consectetur erat, sit amet pulvinar diam ligula mollis elit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper sapien felis, sit amet iaculis elit venenatis ac. Fusce elementum leo eget nulla posuere ullamcorper. Etiam viverra vitae ex at rutrum. Aliquam molestie enim nec dolor tempus pulvinar. Duis vel cursus nisi. Sed sit amet tincidunt massa. Nam sodales, tortor et mollis ultricies, elit libero maximus neque, ut varius quam ante eget ex. Vestibulum ultrices, orci quis tincidunt eleifend, elit ipsum consectetur erat, sit amet pulvinar diam ligula mollis elit.</p>
                    </div>
                </div>
            </main>
        );
    }
}

export default Trend;


/*
    wrapper on scroll increase padding
    hero on scroll reduce height (set to absolute)
    content on scroll reduce margin 

    OR

    this way probs best to store all vars in state?
    hero always absolute reduce height on scroll
    content reduce margin on scroll

*/

