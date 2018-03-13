import React from 'react';

import TableRow from './tableRow';

const TableHeader = (props) => {
  return (
    <div className="table">
      <div className="table-header">
        <div onClick={() => props.sortBy('firstName')} className="header firstName">First Name</div>
        <div onClick={() => props.sortBy('lastName')} className="header lastName">Last Name</div>
        <div onClick={() => props.sortBy('country')} className="header country">Country</div>
        <div className="header address">Address</div>
        <div onClick={() => props.sortBy('city')} className="header city">City</div>
        <div onClick={() => props.sortBy('state')} className="header state">State</div>
        <div className="header zip">Zip</div>
        <div className="header phone">Phone</div>
      </div>
      {props.contacts.slice(0, props.pageSize).map((contact, index) => {
        return <TableRow key={index} index={index} person={contact}/>
      })}
    </div>
  )
}

export default TableHeader
