export interface IHumour {
    id: string;
    sendDate: string;
    humourStatus: number;
    refUser: string;
    refCompany: string;
    message: string;
}

export type SendHumourProps = {
    humours: IHumour[];
};
