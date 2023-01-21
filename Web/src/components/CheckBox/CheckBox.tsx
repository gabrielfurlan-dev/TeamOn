import React from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
// import { CheckIcon } from '@radix-ui/react-icons';
import { Check } from 'phosphor-react';
import './styles.css';

interface checkboxProps {
  title: string;
}

const CheckboxDemo: React.FC<checkboxProps> = ({ title }) => (

  <form>
    <div style={{ display: 'flex', alignItems: 'center' }}>

      <Checkbox.Root className="w-6
                                h-6
                                rounded-full
                                d-flex
                                items-center
                                justify-center
                                shadow-lg
                                border-solid border-2.5 border-GRAY
                                hover:bg-sky-100
                                focus:outline-none
                                focus:ring"
        id="c1">

        <Checkbox.Indicator className="CheckboxIndicator">
          <Check  className="text-GRAY m-auto" weight='bold' size={19}/>
        </Checkbox.Indicator>

      </Checkbox.Root>

      <label className="Label text-GRAY " htmlFor="c1">{title}</label>

    </div>
  </form>
);

export default CheckboxDemo;