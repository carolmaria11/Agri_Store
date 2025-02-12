import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, debitis ad ex quisquam reiciendis unde nisi at doloremque consectetur. Maiores et animi, obcaecati possimus neque corrupti natus quasi magnam quo sed sapiente ipsam, consequuntur voluptatem deserunt voluptatibus non impedit pariatur voluptates perferendis fugiat perspiciatis, totam saepe explicabo? Aut, error iure!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ratione, iure sit dignissimos voluptatum explicabo facere consequatur similique excepturi. Minus.</p>
        </div>
    </div>
  )
}

export default DescriptionBox