import React from 'react';

const TableRow = (props) => {
  return (
    props.index % 2 === 0 ?
    <div className="table-row even">
      {Object.keys(props.person).map((key, index) =>
        <div key={index} className="cell">
          <div className={key}>{props.person[key]}</div>
        </div>
      )}
    </div>
    :
    <div className="table-row odd">
      {Object.keys(props.person).map((key, index) =>
        <div key={index} className="cell">
          <div className={key}>{props.person[key]}</div>
        </div>
      )}
    </div>
  )
}

export default TableRow;
