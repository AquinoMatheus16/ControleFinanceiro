import { format } from "date-fns";

export const ConverterData = (data) => {

    const dataC = new Date(data);
    const formatData = format(dataC, "dd/MM/yyyy");
    return formatData;
}