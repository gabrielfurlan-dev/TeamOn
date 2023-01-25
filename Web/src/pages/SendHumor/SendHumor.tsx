import PrincipalButton from "../../components/Buttons/PrincipalButton/PrincipalButton"
import CheckBox from "../../components/CheckBox/CheckBox";

import { EHumorStatus } from "../../enums/EHumorStatus";
import { useState } from "react";
import HumorRating from "../../components/HumorRating/HumorRating";

type CheckboxProps = {
    checked: boolean;
    onChange: (checked: boolean) => void;
};

function SendHumor() {
    const [humorStatus, setHumorStatus] = useState(EHumorStatus.Emotionless)

    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return (
        <div>
            <h1 className="text-DARK_GRAY font-normal text-3xl">
                Humor
            </h1>

            <HumorRating
                humorStatus={humorStatus}
                setHumorStatus={setHumorStatus}
            />

            <div>
                <PrincipalButton title="Enviar" />

                <CheckBox
                    title={"Enviar Comentário"}
                    checked={checked}
                    setChecked={setChecked}
                />

                {checked && (
                    <textarea className="bg-LIGHT_GRAY" cols={30} rows={5} placeholder="Informe aqui sua mensagem..." />
                )}

            </div>
        </div>
    )
}

export default SendHumor