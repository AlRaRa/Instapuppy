import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faRetweet,faThumbsUp  } from '@fortawesome/free-solid-svg-icons';




const styles = {

    button: {
        cursor:'pointer',
        flex: 1,
        textAlign:'center',
        padding: '10px 15px',
        
    },
    footer: {
        backgroundColor:'#eee', 
        display:'flex', 
        marginBottom: '-10px', 
        marginLeft: '-15px', 
        width:'calc(100% +30px)'
    },
} 
export default class Footer extends React.Component{
    public render(){
        return(
            
            <div style={styles.footer}>
                   <div style={styles.button as React.CSSProperties}><FontAwesomeIcon icon={faThumbsUp} /> Like</div>
                   <div style={styles.button as React.CSSProperties}><FontAwesomeIcon icon={faRetweet}  /> Compartir</div>
            </div>
        )
    }
}
