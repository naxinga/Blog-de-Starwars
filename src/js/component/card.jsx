import React from "react";

export const Card = props =>{
    return (
        <div className="row">
		    <div className="col">
            {props.cartas}
            </div>
		</div>
    )
}