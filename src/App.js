import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Link, Switch } from "react-router-dom";
import schema from "./validation/formSchema";
import OrderForm from "./components/OrderForm";
import Homepage from "./components/Homepage";
import * as yup from 'yup';

const initialFormValues ={
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  ham: false,
  bacon: false,
  special: ''
}

const initialFormErrors ={
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  ham: false,
  bacon: false,
  special: ''
}

const initialDisabled = false;

const App = () => {
  //////////////// STATES ////////////////
  //////////////// STATES ////////////////
  //////////////// STATES ////////////////
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)


  //////////////// HELPERS ////////////////
  //////////////// HELPERS ////////////////
  //////////////// HELPERS ////////////////
  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
    .then(res => {
      setFormValues(initialFormValues)
    }) .catch(err => {
        console.error(err)
      setFormValues(initialFormValues)
    })
  }

  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
}
  

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value })
  }
  
  const formSubmit = () => {
    const newOrder ={
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      toppings: ['pepperoni', 'sausage', 'ham', 'bacon'].filter(topping => formValues[topping]),
      special: formValues.special.trim()
    }
    postNewOrder(newOrder)
  }

  //////////////// SIDE EFFECTS ////////////////
  //////////////// SIDE EFFECTS ////////////////
  //////////////// SIDE EFFECTS ////////////////
  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])


  return (
    <div className="App">
      <Switch>
        <Route path={"/pizza"}>
            <OrderForm 
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
            />
        </Route>
        <Route path={"/"}>
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
