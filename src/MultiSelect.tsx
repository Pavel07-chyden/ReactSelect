import { useState } from 'react';
import Select from 'react-select';

const options = [{
   value: 'south-korea',
   label: 'South korea '
}, {
   value: 'germany',
   label: 'Germany '
}, {
   value: 'canada',
   label: 'Canada'
}, {
   value: 'japan',
   label: 'Japan'
}]

const isMulti = true;

function MultiSelect() {

   const [currentCountries, setCurrentCountries] = useState<any>(['south-korea', 'canada']);
   const getValue = () => {
      if (currentCountries) {
         return isMulti
            ? options.filter(c => currentCountries.indexOf(c.value) >= 0)
            : options.find(c => c.value === currentCountries)
      } else {
         return isMulti ? [] : ''
      }
   }
   const onChange = (newValue: any) => {
      setCurrentCountries(isMulti ? newValue.map((v: any) => v.value) : setCurrentCountries(newValue.value))
   }
   return (
      <div className='w-4/5 mx-auto my-10'>
         <h1 className='mb-3 text-white text-x1 tex'>Chose country:</h1>
         <Select
            className='custom-select'
            onChange={onChange}
            value={getValue()}
            options={options}
            isMulti
            placeholder='Chose counties'
         />
      </div>
   );
}


export default MultiSelect;
