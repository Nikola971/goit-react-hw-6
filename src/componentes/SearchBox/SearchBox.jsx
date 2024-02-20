import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { filterFiltration } from '../../redux/filterSlice';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters);
  console.log(filters);
  const filter = event => dispatch(filterFiltration(event.target.value));
  return (
    <div className={css.searchform}>
      <input name="filter" onChange={filter} value={filters} className={css.input} />
    </div>
  );
}
