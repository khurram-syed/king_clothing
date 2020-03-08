import React from 'react'
import {ErrorOverlayComp,ErrorImageContainer,ErrorImageText} from './errorBoundary.styled'

class ErrorBoundary extends React.Component {
    constructor(){
        super()
        this.state = {hasError : false}
    }

    static getDerivedStateFromError(error){
       return {hasError:true}
    }

    componentDidCatch(error,info){
       console.log(error)
    }

    render(){
        if(this.state.hasError){
                return <ErrorOverlayComp>
                       <ErrorImageContainer imageUrl={`https://i.imgur.com/U3vTGjX.png`} />
                       <ErrorImageText>Oops...!</ErrorImageText>
                </ErrorOverlayComp>
        }        
        return this.props.children;
    }
}
export default ErrorBoundary