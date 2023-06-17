import React from 'react'

export const IndividualData = ({individualData,index}) => {
    return (
        <tr>
            <th>{index}</th>
            <th>{individualData.name}</th>
            <th>{individualData.company}</th>
            <th>{individualData.number}</th>
            <th>{individualData.email}</th>
            <th>{individualData.query}</th>
        </tr>
    )
}