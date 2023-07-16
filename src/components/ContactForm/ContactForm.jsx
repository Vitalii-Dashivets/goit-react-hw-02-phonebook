import React,{Component} from "react";
// import { nanoid } from 'nanoid';

export class ContactForm extends Component{
    state={
       name:'',
       number:'',
    }
   inputChangeValue=evt=> {
    const newName = evt.target.value;
    const key = evt.target.name;
      return this.setState(prevState => {
    
        return { [key]:  newName } 
    })
    }
    handleSubmit = evt => {
        evt.preventDefault();
        this.props.onAlert(this.state);
        this.setState({ name: '', number: '' });
      

    }

    render(){
       
        const {name,number}=this.state;
        
        return(
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="inputName">Name</label>
    <input
      type="text"
        name="name"
        value={name}
        id="inputName"
       pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={this.inputChangeValue}
      />
       <label htmlFor="inputNumber">Number</label>
      <input
        type="tel"
        name="number"
        value={number}
        id="inputNumber"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={this.inputChangeValue}
     />
      <button type="submit" >Add contact</button>  
            </form>
        )
    }
}