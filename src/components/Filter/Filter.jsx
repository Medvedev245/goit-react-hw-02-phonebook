import PropTypes from 'prop-types';
import styles from './Filter.module.css';

export const Filter = ({ state, onChangeName }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.filter}>Find contacts by name</div>
      <input
        className="mb-[15px] border-2"
        type="text"
        value={state.name}
        onChange={evt => onChangeName(evt.target.value)}
        placeholder="Enter name plz"
      />
    </div>
  );
};

Filter.propTypes = {
  state: PropTypes.object.isRequired,
  onChangeName: PropTypes.func.isRequired,
};
