import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContsctList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>
        
        Phonebook
      </h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;