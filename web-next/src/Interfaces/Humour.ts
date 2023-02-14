export interface IHumour {
    id: string;
    sendDate: string;
    humourStatus: number;
    refUser: string;
    message: string;
}

export type SendHumourProps = {
    humours: IHumour[];
};
