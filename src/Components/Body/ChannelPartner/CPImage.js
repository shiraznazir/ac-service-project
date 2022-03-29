import React from "react";
import './ChannelPartner.css';

function CPImage(props){
    return(
        <div className="cpimage">
            <img src={props.url} />
        </div>
    )
}
export default CPImage;