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

function SingleSelect() {


   const [currentCountry, setCurrentCountry] = useState('south-korea');
   const getValue = () => {
      return currentCountry ? options.find(c => c.value === currentCountry) : ''
   }
   const onChange = (newValue: any) => {
      setCurrentCountry(newValue.value)
   }
   return (
      <div className='w-4/5 mx-auto my-10'>
         <h1 className='mb-3 text-white text-x1 tex'>Chose country:</h1>
         <Select onChange={onChange} value={getValue()} options={options} />
      </div>
   );
}

export default SingleSelect;
