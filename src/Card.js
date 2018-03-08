import React from 'react';

class Card extends React.Component {
  state = {front: '', back: '', show: true};
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ front: '' })
  }

  handleChange= (e) => {
    this.setState({ front: e.target.front })
  }

  handleChanges= (e) => {
    this.setState({ front: e.target.front })
  }

  toggleShowCard = () => {
    this.setState( state => {
      return { show: !state.show }
    });
  }

  render() {
    const styles = {
      card: { cursor: 'pointer' },
      false: {
        display: 'none',
        }
    }
    const { front } = this.state;
    const { back } = this.state;
    const { name } = this.props;
    return (
      <div style={{backgroundColor: '#945fad', color: 'white'}}>
        <form onSubmit={this.handleSubmit}
        style={ false ? {...styles.card, ...styles.false} : styles.card }
        >
          <input
          front={this.state.front}
          onChange={this.handleChange}
          required placeholder= {name} />
        </form>
        <button
          onClick={this.toggleShowCard}
          >
          Toggle Card
        </button>
      </div>
    )
  }
}




export default Card
