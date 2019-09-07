import * as React from 'react'
interface IIntroProps{
  text: string

}



export default class Intro extends React.Component<IIntroProps>{


  public state = {
    text:'Soy el texto del estado'
  }
    public render(){


        const {text} = this.props
        const t = text ? text : this.state.text 

        return(
        <p className="App-intro">
        <span>{t}</span>
      </p>
        )
    }
}