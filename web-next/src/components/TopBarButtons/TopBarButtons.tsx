import { Bell, Info, UserCircle } from "phosphor-react";
import ToggleButton from "../Buttons/ToggleButton";

export function TopBarButtons(){
    return(
        <div className='flex flex-row-reverse mx-4 mt-4 gap-3'>
        <button><UserCircle size={32} /></button>
        <button><Bell size={32} /></button>
        <button><Info size={32} /></button>
        <ToggleButton />
    </div>
    )
}