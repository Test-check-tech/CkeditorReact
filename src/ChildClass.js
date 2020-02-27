import React ,{Componenet} from 'react'
import Guest from './guest'


class ChildClass extends React.Component
{

get()
{
  alert("Hi")
}


    render(){
        return(
            <div>
            <Guest  greetHandler = {this.get}/>
         <button onClick= {this.props.greetHandler}>MethodAsPropsFromClass</button>
         </div>
        );
    }
}

export default ChildClass;