import React from 'react'
class CoordinatesButton extends React.Component {
  constructor(){
    super();
    this.click = this.click.bind(this)
  }

  click(event){
    let x = event.clientX
    let y = event.clientY
    let recieveCoodinates = this.props.onReceiveCoordinates  
    recieveCoodinates([x,y])
  }

  render(){
    return (
      <button onClick={this.click}>Click Me</button>
    )
  }
}
export default CoordinatesButton
