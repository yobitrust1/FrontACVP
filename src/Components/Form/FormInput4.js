import {useState} from 'react';
const FormInput = (props) => {
  const [value, setValue] = useState();

  const handleChange = event => {
    const value = Math.max(0, Math.min(props.max, Number(event.target.value)));
    setValue(value);
    props.onChange(value)
  };

  console.log(value);
  console.log(typeof value);

  return (

    <>
      
      <div class="form-outline my-2 container">
          <input class="form-control"
        type="number" mobile
        value={value}
        error={value > 12 ? 'Enter a number less than 12' : ''}
        placeholder={props.placeholder} 
        onChange={handleChange}
      />   { (value==props.max ) &&
        <div>
          <br/>
        <p class="text-danger text-content-center">min est :0 et max est:{props.max}</p>
</div>
      }</div>
       


    </>
  );
};

export default FormInput;