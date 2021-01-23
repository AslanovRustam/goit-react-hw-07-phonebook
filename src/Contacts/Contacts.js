import s from './contacs.module.css';
import { connect } from 'react-redux';
import contactActions from '../redux/actions';
import contactsSelectors from '../redux/contacts-selectors';

const Contactlist = ({ contacts, onDeleteContact }) => {
  return (
    <div className={s.contactsList}>
      <h2 className={s.contactsTitle}>Contacts</h2>
      <span>Total number of contacts - {contacts.length}</span>
      <ul className={s.list}>
        {/* {contacts.map(({ id, name, number }) => ( */}
        {contacts.contacts.map(({ id, name, number }) => (
          <li className={s.item} key={id}>
            {name} {number}
            <button
              type="button"
              onClick={() => onDeleteContact(id)}
              className={s.button}
            >
              <span>Delete</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    contacts: contactsSelectors.getContactsAfterFilter(state),
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contactlist);
