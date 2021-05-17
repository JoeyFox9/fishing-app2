import React from 'react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify-icons/mdi/fish'

export default function LocationMarker(props){
    return(
        <div className="location-marker" onClick={props.customClickEvent}>
            <Icon icon={locationIcon} className="location-icon" width="1.5em" height="1.5em"/>
        </div>
    )
    
}
// Reference:
//https://www.youtube.com/watch?v=ontX4zfVqK8&t=941s
