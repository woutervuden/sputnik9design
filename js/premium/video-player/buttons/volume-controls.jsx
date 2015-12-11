import React from 'react'

export default class extends React.Component {
  render() {
    return (
      <div className='volume-controls'>
        <input type='range'
          min='0'
          max='100'
          aria-label='Volume level'
          value={this.props.level}
          onChange={this._onChange.bind(this)}
        />
      </div>
    );
  }

  _onChange({target: {value}}) {
    this.props.onChange(value);
  }
}
