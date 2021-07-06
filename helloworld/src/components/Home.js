import {Component} from "react"

class Home extends Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return <div>
          <ul>
           { this.props.content.map(ele=>
            {
               return <li key={ele}>{ele}</li>
            }) 
           }
            </ul>
            <h1>{this.props.name}</h1>
        </div>
        
        
          
               
    }
}
export default Home