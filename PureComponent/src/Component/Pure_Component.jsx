import { PureComponent } from 'react'

export default class Pure_Component extends PureComponent {
    constructor() {
      super()
    
      this.state = {
         count: 0,
         toggle: true,
      }
    }

    changeToToggle=()=>{
        this.setState({
            toggle: !this.state.toggle
        })
    }
    increraseCount=()=>{
        if (this.state.toggle) {
            this.setState({
                count: this.state.count + 1
            })
        }else{
            this.setState({
                count: this.state.count
            })
        }
    }
  render() {
      console.log(this.state.count)
    return (
      <div>
        <hr />
        <h1>Pure Counter</h1>
        <h3>{this.state.count}</h3>
        <button onClick={this.changeToToggle} style={{backgroundColor:`${this.state.toggle?"green":"red"}`}}>Set Toggle</button>
        &nbsp;
        &nbsp;
        <button onClick={this.increraseCount}>+ Count</button>
        <hr />
      </div>
    )
  }
}

