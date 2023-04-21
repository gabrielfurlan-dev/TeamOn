import { InputText } from "@/components/Buttons/InputText";
import { ProfilePicture } from "@/components/Buttons/ProfilePicture";
import RandomColorDiv from "@/components/Buttons/RandomColorDiv";
import { TextArea } from "@/components/Buttons/TextArea";
import { DefaultScreen } from "@/layouts/DefaultScreen/DefaultScreen";
import { X } from "phosphor-react";
import { useState } from "react";

export default function profile() {
    const [userData, setUserData] = useState({
        urlProfileImg: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        userName: "Seu nome",
        position: "Cargo",
        biography: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aliquam exercitationem voluptas fugit dolore? Quisquam rerum esse, nobis distinctio hic dolores quae molestiae consequatur blanditiis beatae natus, placeat, laborum sequi!",
        email: "email@exemple.com",
        skills: ["Habilidade 1", "Habilidade 2"]
    })

    function removeSkill(index: number) {
        const newSkills = [...userData.skills];
        newSkills.splice(index, 1);
        setUserData({ ...userData, skills: newSkills });
    }

    return (
        <DefaultScreen hideCards={true}>
            <div className="ml-10 p-10 h-full">
                <form className="flex-col grid gap-4 lg:w-1/2">
                    <div className="flex flex-col">
                        <ProfilePicture imageUrl={userData.urlProfileImg} size={256} />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="txtName">Nome</label>
                        <InputText height={32} id="txtName" placeHolder={userData.userName} />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="txtPostition">Função</label>
                        <InputText height={32} id="txtPostition" placeHolder={userData.position} />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="txtBiography">Biografia</label>
                        <TextArea id="txtBiography" placeHolder={userData.biography} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="txtEmail">Email</label>
                        <InputText height={32} id="txtEmail" placeHolder={userData.email} />
                    </div>
                    <div>
                        <label>Habilidades</label>
                        <div className="flex flex-row">
                            {
                                userData.skills.map(x => {
                                    return (
                                        <RandomColorDiv className="rounded-lg px-2 py-1 flex flex-row items-center m-2 bg-opacity-20">
                                            {x}
                                            <button className="ml-2"
                                                onClick={() => removeSkill(userData.skills.indexOf(x))}>
                                                <X size={16} />
                                            </button>
                                        </RandomColorDiv>
                                    )
                                })
                            }
                        </div>
                    </div>
                </form>
            </div>
        </DefaultScreen>
    );
}
