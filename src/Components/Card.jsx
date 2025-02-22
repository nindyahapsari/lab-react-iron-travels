import React from 'react'
import Label from './Label'
import Delete from './Delete'

const Card = ({ 
    id,
    image, 
    destination, 
    days, 
    description, 
    totalCost, 
    onHandleDelete 
}) => {
  return (
        <div 
        style={{
            border: '1px solid black',
            width: '60%',
            paddingTop: '20px',
            paddingBottom: '20px',
            paddingLeft: '30px',
            paddingRight: '30px',
            marginTop: '20px',
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
        }}
    >
        <div>
            <img src={image} style={{ width: '20em' }} alt="travel pict" />
        </div>
        <div
        style={{
            textAlign: 'left',
            marginLeft: '20px',
        }}
        >
            <h3>{ destination } ( { days } days )</h3>
            <p>{description}</p>
            <p>Price: { totalCost } </p>
            {
                totalCost > 1500 && (
                    <Label text="Premium" backgroundColor="#6fa8dc" /> 
                ) 
            }

            {
                totalCost < 350 && (

                 <Label text="Great Deal" backgroundColor="#93c47d" /> 
                )

            }
            <Delete id={id} onHandleDelete={onHandleDelete} />
        </div>
    </div>

  )
}

export default Card