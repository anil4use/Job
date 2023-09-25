import { useState } from 'react';
import Calendar from 'react-calendar';
import BarChart from './Chart';

function Status() {
  const [value, onChange] = useState(new Date());

  return (

        <div className="   w-96">
          <div className="border-dashed mt-20 mr-20 rounded-lg">
          <Calendar onChange={onChange} value={value} />

          </div>
          <div className=' mt-8 border'></div>
          <div>
            <div className=' text-2xl font-semibold mb-8'>Monthly Earning</div>
            <BarChart/>
          </div>
        </div>

  );
}

export default Status;

