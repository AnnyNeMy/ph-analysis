import { CoeffConfig } from "./CoeffConfig";

export class OneOneMethodConfig
{
    method: string | undefined;
    stock: string | undefined;
    timeFrameName: string | undefined;
    bond: string | undefined;
    n1Value: number | undefined | null;
    n2Value: number | undefined | null;
    n3Value: number | undefined | null;
    kUpValue: number | undefined | null;
    kDownValue: number | undefined | null;
    additionalVaiableValue: number | undefined | null;
    filterTypeName: string | undefined;
    transactionType: string = "Long";

    constructor(method?: string, stock?: string, timeFrameName?: string, bond?: string,  n1Value?: number, n2Value?: number,
        n3Value?: number, kUpValue?: number, kDownValue?: number, additionalVaiableValue?: number, filterTypeName?: string)
    {
        this.method = method;
        this.stock = stock;
        this.timeFrameName = timeFrameName;
        this.bond = bond;
        this.n1Value = n1Value;
        this.n2Value = n2Value;
        this.n3Value = n3Value;
        this.kUpValue = kUpValue;
        this.kDownValue = kDownValue;
        this.additionalVaiableValue = additionalVaiableValue;
        this.filterTypeName = filterTypeName;
    } 
}