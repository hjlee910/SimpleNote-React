import React from 'react';
import './index.css';

class Header extends React.Component {
  render() {
    const { onAddNote, onDeleteNote } = this.props;
    return (
      <div className="header">
        <div className="title">
          <span>Simple Note</span>
        </div>
        <div className="buttons">
          <button onClick={onAddNote}>Add</button>
          <button onClick={onDeleteNote}>Delete</button>
        </div>
      </div>
    );
  }
}

export default Header;