import React from 'react';

const sortOptions = [
  {value: 'firstName', display: 'First Name'},
  {value: 'lastName', display: 'Last Name'},
  {value: 'country', display: 'Country'},
  {value: 'city', display: 'City'},
  {value: 'state', display: 'State'},
]

const pageItems = [
  {value: 1, display: '1'},
  {value: 5, display: '5'},
  {value: 10, display: '10'},
  {value: 15, display: '15'},
  {value: 25, display: '25'},
  {value: 50, display: '50'},
]

const ListTitle = (props) => {
  const selectSort = (item) => {
    return <div className="sort" key={item.value} value={item.value} onClick={() => props.setSort(item.value)}>{item.display}</div>
  }
  const selectItems = (item) => {
    return <div className="number" key={item.value} value={item.value} onClick={() => props.setPageSize(item.value)}>{item.display}</div>
  }
  return (
    <div className="list-header">
      <div className="left-list-header">
        <div className="left-list-title">List of Awesome | </div>
        <div className="list-title-sort">Sort By:</div>
        <div className="sort-dropdown">
          {props.showSortList ?
            sortOptions.map(selectSort)
            :
            <div onClick={() => props.toggle('sortList')}>{props.sortBy} &#x25BC;</div>
          }
        </div>
      </div>
      <div className="right-list-header">
        <span className="items-per-page">items per page:</span>
        <div className="page-size">
          {props.showPageSize ?
            pageItems.map(selectItems)
            : <div onClick={() => props.toggle()}>{props.pageSize} &#x25BC;</div>
          }
        </div>
        <div className="pages">{props.page} - {props.pageSize * props.page} of {props.contacts.length}</div>
      </div>
      <div className="arrow left-arrow" onClick={() => props.prevPage()}>&lt;</div>
      <div className="arrow right-arrow" onClick={() => props.nextPage()}>&gt;</div>
    </div>
  )
}

export default ListTitle;
