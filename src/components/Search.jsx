var Search = (props) => {
  let data ='';

  function handleKeyPress(e) {
    if(e.keyCode == 13) {props.newData(data.value);}
  }

  return (
  <div className="search-bar form-inline">
    <input className="form-control" ref={(input) => { data = input; }}  type="text" onKeyDown={handleKeyPress} placeholder="Search" />
    <button className="btn hidden-sm-down" onClick = {() => props.newData(data.value)}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
