import React, {useState} from 'react';
import { fetchArticles } from '../api';

const Sorter = ({setArticles}) => {
  const [sortBy, setSortBy] = useState('created_at')
  const [order, setOrder] = useState('asc')

  const orderOptions = {
    votes: [{msg: "highest to lowest", value: "desc"}, {msg: "lowest to highest", value: "asc"}], 
    created_at: [{msg: "oldest first", value: 'asc'},{msg: "newest first", value: 'desc'}], 
    comment_count: [{msg: "most to least", value: "desc"}, {msg: "least to most", value: "asc"}]
  }

  const hanldleSubmit = (event)=>{
    event.preventDefault()
    fetchArticles({sort_by: sortBy, order: order}).then(articles=>{setArticles(articles)})
  }

  return (
    <form onSubmit={hanldleSubmit}>
      <label>
      Sort by:
      <select  onChange={(event)=>setSortBy(event.target.value)} value={sortBy} name="sort_by" id="sort_by">
        <option value="created_at">date</option>
        <option value="votes">votes</option>
        <option value="comment_count">comment count</option>
      </select>
      </label>
      <label>
      Order:
      <select onChange={(e)=>setOrder(e.target.value)} value={order} name="order" id="order">
        {orderOptions[sortBy].map(option=>{
          return <option key={option.msg} value={option.value}>{option.msg}</option>
        })}
        {/* <option value="desc">descending</option> */}
      </select>
      </label>
      <button>Update</button>
    </form>
  );
};

export default Sorter;