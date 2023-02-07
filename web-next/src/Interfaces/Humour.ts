export interface IHumor {
    id: string;
    sendDate: string;
    humorStatus: number;
    refUser: string;
    message: string;
}

export type SendHumourProps = {
    humours: IHumor[];
};
