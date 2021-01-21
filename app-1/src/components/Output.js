import React, {Component} from "react"
import Input from "./Input.js"

class Output extends Component {
    constructor() {
        super()
        this.state = {
            userInput: ''
        }

        this.updateInput = this.updateInput.bind(this)

    }

    updateInput(e) {
        this.setState({
            userInput: e.target.value
        })
    }

    render() {
        return(
            
            <Input update={this.updateInput(e)}/>
        )
    }
}

export default Output