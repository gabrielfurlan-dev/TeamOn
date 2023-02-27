import { EHumourStatus } from "@/enums/EHumourStatus";
import { IHumour } from "@/Interfaces/Humour";
import api from "@/lib/axios";
import swal from "sweetalert";

export async function GetHumoursByUser() {
    return await api.get<IHumour[]>("humour/all/todays/company");
}

export async function SendHumour(
    humourStatus: EHumourStatus,
    message: string,
    refUser: string,
    refCompany: string
): Promise<void> {
    try {
        await api
            .post("/humour/send", {
                humourStatus: humourStatus,
                message: message,
                refUser: refUser,
                refCompany: refCompany,
            })
            .then(response => {
                if (!response.data.success)
                    throw new Error(response.data.message);
            });
    } catch (error) {
        swal("Ops! Algo deu errado.", `${error}`, "error");
    }
}
