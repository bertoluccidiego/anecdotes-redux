import { useDispatch } from 'react-redux';

import { changeFilter } from '../reducers/filterReducer';

function Filter() {
  const dispatch = useDispatch();

  function filterChangeHandler(event) {
    const filter = event.target.value;
    dispatch(changeFilter(filter));
  }

  return (
    <div>
      Filter
      <input type="text" onChange={filterChangeHandler} />
    </div>
  );
}

export default Filter;
