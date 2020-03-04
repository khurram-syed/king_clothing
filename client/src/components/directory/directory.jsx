import React from 'react'
import CollectionItem from '../menuItem/menuItem';
import './directory.scss'
import {connect} from 'react-redux'
import {selectSections} from '../../redux/directory/directory.selector'

class Directory extends React.Component{
    
    render(){
        //  console.log('*** Directory props*** :',this.props)
         const {sections} = this.props;
        return( 
            <div className="directory-menu">
                {sections.map(section=>{
                    return <CollectionItem key={section.id} {...section} />
                })}
            </div>
        )    
    }        
 }
 const mapStateToProps = (state)=>({
    sections : selectSections(state)
 })
 export default connect(mapStateToProps)(Directory);