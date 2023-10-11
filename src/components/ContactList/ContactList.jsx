import PropTypes from 'prop-types';

export const ContactList = ({ state, onDelete }) => {
  const el = state;
  return (
    <ul>
      {el.map(({ id, name, number }) => (
        <li key={id} className='mb-[5px]'>
          {name}: {number}
          <button
            onClick={() => {
              onDelete(id);
            }}
            className='ml-[20px] bg-red-300 rounded-[3px] text-[12px]
            p-[2px] active:bg-red-600'
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
