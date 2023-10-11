import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

export const ContactList = ({ state, onDelete }) => {
  const el = state;
  return (
    <ul>
      {el.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          {name}: {number}
          <button
            className={styles.btn}
            onClick={() => {
              onDelete(id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  state: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
