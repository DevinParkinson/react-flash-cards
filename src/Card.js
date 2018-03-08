import React from 'react';

class Card extends React.Component {
  state = {front: '', back: '', show: true};

  render() {
    const { front } = this.state;
    const { back } = this.state;
    const { show } = this.state;
    return (
      <div style={{backgroundColor: 'black', color: 'white'}}>
        <p>{ front }</p>
        <p>{ back }</p>
      </div>
    )
  }


}




export default Card
