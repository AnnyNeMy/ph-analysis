import { CoeffConfig } from "./CoeffConfig";

export class OneOneMethodConfigCollections
{
    methods: string[] | undefined;
    groupsStocks: string[] | undefined;
    timeFrameNames: string[] | undefined;
    bonds: string[] | undefined;
    filterTypeNames: string[] | undefined;
    сoeffConfig: CoeffConfig | undefined; 
    
    constructor(methods?: string[], groupsStocks?: string[], timeFrameNames?: string[], filterTypeNames?: string[], bonds?: string[], сoeffConfig?: CoeffConfig )
    {
        this.methods = methods;
        this.groupsStocks = groupsStocks;
        this.timeFrameNames = timeFrameNames;
        this.bonds = bonds;
        this.filterTypeNames = filterTypeNames;
        this.сoeffConfig = сoeffConfig;

    } 
}