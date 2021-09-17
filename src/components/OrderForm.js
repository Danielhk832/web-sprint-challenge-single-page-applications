import React from "react";

export default function OrderForm(props){
    const {
        values,
        submit,
        change,
        disabled,
        errors,
      } = props

      const onSubmit = evt => {
        evt.preventDefault();
        submit()
      }
    
      const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    return (
        <form id="pizza-form" onSubmit={onSubmit}>
            <div className="order">
                <h1>WHATCHA WANT, CHUMP?</h1>
                <h2>All pizzas come with fesh mozz, baby. bada bing bada boom</h2>
                <label>Name&nbsp;
                    <input
                    id='name-input'
                    value={values.name}
                    onChange={onChange}
                    name='name'
                    type='text'
                    />
                </label>

                <label>Pizza size&nbsp;
                    <select 
                    id='size-dropdown'
                    onChange={onChange}
                    value={values.size}
                    name='size'
                    >
                        <option value=''>--Select size--</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>    
                    </select>
                </label>

        {/* ////////// CHECKBOXES ////////// */}
        {/* ////////// CHECKBOXES ////////// */}
        {/* ////////// CHECKBOXES ////////// */}
                    <div className="toppings">
                        <h3>Toppings: </h3>
                        <label>Pepperoni
                            <input
                            type="checkbox"
                            name="pepperoni"
                            checked={values.pepperoni}
                            onChange={onChange}
                            />
                        </label>
                        <label>Sausage
                            <input
                            type="checkbox"
                            name="sausage"
                            checked={values.sasuage}
                            onChange={onChange}
                            />
                        </label>
                        <label>Ham
                            <input
                            type="checkbox"
                            name="ham"
                            checked={values.ham}
                            onChange={onChange}
                            />
                        </label>
                        <label>Bacon
                            <input
                            type="checkbox"
                            name="bacon"
                            checked={values.bacon}
                            onChange={onChange}
                            />
                    </label>
                    </div>
                <label>Special insctructions&nbsp;
                    <input
                    id='special-text'
                    value={values.special}
                    onChange={onChange}
                    name='special'
                    type='text'
                    />
                </label>
                
                <button disabled={disabled}>Submit</button>
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                    <div>{errors.special}</div>
                </div>
            </div>
        </form>
    )

}

