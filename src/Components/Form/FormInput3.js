import {useState} from 'react';
import tailwind from 'tailwind-rn';

const FormInput = (props) => {
  const [value, setValue] = useState();

  const handleChange = event => {
    if (typeof(event.target.value)!=String)
    setValue(event.target.value);
    props.onChangeText(value)
  };

  console.log(value);
  console.log(typeof value);

  return (


    <>
      <div style={tailwind(' items-center')}>
      <div class="shadow-md ...">
      <input class="form-control" style={tailwind(' border-blue-800 my-3  rounded-md w-64')}
        type="number"
        value={value}
        placeholder={props.placeholder} 
        onChange={handleChange}
      />
              </div>
      </div>


    </>
  );
};

export default FormInput;
