import { useState } from 'react';
import Select, { OnChangeValue } from 'react-select';
import makeAnimated from 'react-select/animated'
import { IOption } from './app.intrface';

const options: IOption[] = [{
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
const animatedComponents = makeAnimated()

function App() {

  const [currentCountries, setCurrentCountries] = useState([
    'south-korea, canada'
  ]);
  const getValue = () => {
    return currentCountries
      ? options.filter(c => currentCountries.indexOf(c.value) >= 0)
      : []
  }

  const onChange = (newValue: OnChangeValue<IOption, boolean>) => {
    setCurrentCountries((newValue as IOption[]).map(v => v.value))
  }
  return (
    <div className='w-4/5 mx-auto my-10'>
      <h1 className='mb-3 text-white text-x1 tex'>Chose country:</h1>
      <Select
        classNamePrefix='custom-select'
        //@ts-ignore
        onChange={onChange}
        value={getValue()}
        options={options}
        isMulti={isMulti}
        placeholder='Chose counties'
        components={animatedComponents}
      />
    </div>
  );
}


export default App;
