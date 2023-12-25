import { Component, PureComponent } from 'react'

export default class Concept extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
         data: 10
      }
    }
  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Concept</h1>
        <button onClick={()=>{
            this.setState({
                data: 10
            })
        }}>Update</button>
      </div>
    )
  }
}
