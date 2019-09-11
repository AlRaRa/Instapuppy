import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faRetweet } from '@fortawesome/free-solid-svg-icons';


export default class Footer{
    public render(){
        return(
            
            <div style={{ display:'flex', backgroundColor:'#eee', marginLeft: '-15px', marginBottom: '-10px', width:'calc(100% +30px)'}}>
                   <div style={{flex:1, textAlign:'center', padding:'10px 15px' , cursor: 'pointer'}}><FontAwesomeIcon icon={faThumbsUp} /> Like</div>
                   <div style={{flex:1, textAlign:'center', padding:'10px 15px', cursor:'pointer'}}><FontAwesomeIcon icon={faRetweet} /> Compartir</div>
            </div>
        )
    }
}
