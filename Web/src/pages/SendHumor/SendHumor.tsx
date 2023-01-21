
import sadFace from "../../assets/images/humorFaces/sad-face.svg"

import { Check } from "phosphor-react";

import PrincipalButton from "../../components/Buttons/PrincipalButton/PrincipalButton"
import CheckBox from "../../components/CheckBox/CheckBox";

function SendHumor() {
    return (
        <div>
            <h1 className="text-DARK_GRAY font-normal text-3xl">
                Humor
            </h1>

            <div>
                <PrincipalButton title="Enviar" />
                <div>
                    <CheckBox title={"Enviar Comentário"} />
                </div>

            </div>
        </div>
    )
}

export default SendHumor