import React, {Component} from "react"

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }

        this.doTheLogin = this.doTheLogin.bind(this)
    }

    updateUsername(value) {
        this.setState({username: value})
      }
    
    updatePassword(value) {
    this.setState({password: value})
    } 

    doTheLogin() {
        alert(`${this.state.username} ${this.state.password}`)
    }

    render() {
         return(
            <div>
            <input type="text" placeholder="Username" onChange={e => this.updateUsername(e.target.value)}/>
            <input type="text" placeholder="Password" onChange={e => this.updatePassword(e.target.value)}/>
            <button onClick={this.doTheLogin}>Login</button>
            </div>
        )
    }
}

export default Login