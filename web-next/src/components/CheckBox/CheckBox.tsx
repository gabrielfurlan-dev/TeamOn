import React, { memo } from 'react';

interface checkboxProps {
    title: string;
    checked: boolean,
    setChecked: React.Dispatch<React.SetStateAction<boolean>>
}

const CheckboxDemo: React.FC<checkboxProps> = ({ title, checked, setChecked }) => {

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return (
        <form>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                    type="checkbox"
                    className=" w-6 h-6
                      rounded-bl-full
                      d-flex
                      items-center
                      justify-center
                      shadow-lg
                      border-solid border-2.5 border-GRAY
                      dark:bg-black
                      hover:bg-sky-100
                      focus:outline-none
                      focus:ring"
                    id='checkBox'
                    checked={checked}
                    onChange={handleCheckboxChange} />

                <label className="Label text-GRAY mx-4 " htmlFor="checkBox">{title}</label>
            </div>
        </form>
    );
}
export default memo(CheckboxDemo);
