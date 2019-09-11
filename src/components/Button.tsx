import * as React from 'react'


const style= (block: boolean) => ({
    backgroundColor:'#00D182',
    border: '0PX',
    borderRadius: '4px',
    padding:'10px 15px',
    color:'#fff',
    width: block ? '100%' : undefined
})

interface IButtonProps{
    block?: boolean
}



export default class Button extends React.Component<IButtonProps>{

    public render(){
        const {block = false} = this.props
        return(
           <button {...this.props} style={style(block)}/>
        )
    }
}