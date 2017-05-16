import React from 'react'
class DelayedButton extends React.Component {
  constructor(){
    super();
    this.click = this.click.bind(this)
  }
  click(event){
    event.persist()
    let onDelay = this.props.onDelayedClick(event)
    let delay = this.props.delay
    setTimeout(function(){onDelay},delay)
  }
  render(){
    return (
      <button onClick={this.click}>Click Me</button>
    )
  }
}
export default DelayedButton
