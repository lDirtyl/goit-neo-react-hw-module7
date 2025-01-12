import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.contactItem}>
      <div className={css.contactInfo}>
        <div className={css.contactDetail}>
          <span className={css.name}>{name}</span>
        </div>
        <div className={css.contactDetail}>
          <span className={css.number}>{number}</span>
        </div>
      </div>
      <button
        className={css.deleteBtn}
        onClick={() => dispatch(deleteContact(id))}
      >
        <span>Delete</span>
      </button>
    </div>
  );
};

export default Contact;
