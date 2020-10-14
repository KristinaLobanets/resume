import React, { Component } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../filter/filter";
import styles from "./phonebook.module.css";
import { CSSTransition } from "react-transition-group";
import appear from "./appear.module.css";
import errorFade from "./errorFade.module.css";
import { connect } from "react-redux";
import contactAction from "../../redux/actions/contactAction";

class Phonebook extends Component {
  state = {
    error: false,
  };

  errorContact = () => {
    this.setState({ error: true });
    setTimeout(() => this.setState({ error: false }), 5000);
  };

  componentDidMount() {
    const contactStore = JSON.parse(localStorage.getItem("contacts"));
    contactStore.map((item) =>
      this.props.onAddContacts(item.name, item.number)
    );
  }

  componentDidUpdate() {
    localStorage.setItem("contacts", JSON.stringify(this.props.contacts));
  }

  render() {
    const { error } = this.state;
    return (
      <>
        <CSSTransition
          in={error}
          timeout={250}
          classNames={errorFade}
          unmountOnExit
        >
          <div className={styles.blockerror}>
            Error! Contact is already exist!
          </div>
        </CSSTransition>
        <div className={styles.block}>
          <div className={styles.form}>
            <CSSTransition
              in={true}
              appear={true}
              timeout={500}
              classNames={appear}
              unmountOnExit
            >
              <h1 className={styles.title}>Phonebook</h1>
            </CSSTransition>
            <ContactForm onError={this.errorContact} />
          </div>
          <div className={styles.contacts}>
            <Filter />

            <ContactList />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ contacts: state.tasks.contacts });
const mapDispatchToProps = { onAddContacts: contactAction.addContact };
export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
