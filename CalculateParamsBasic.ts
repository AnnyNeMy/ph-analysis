import { SampleSize } from "./SampleSize";

export class CalculateParamsBasic
{
    public sampleSizeStr: string | undefined;
    public sampleSize: SampleSize | undefined;
    public dtStart: Date | undefined;
    public dtEnd: Date | undefined;
    public codesStock: (string | undefined) [];

    constructor(sampleSizeStr: string | undefined, sampleSize: SampleSize, dtStart: Date, dtEnd: Date, codesStock: string[] = [])
    {
        this.sampleSizeStr = sampleSizeStr;
        this.sampleSize = sampleSize;
        this.dtStart = dtStart;
        this.dtEnd = dtEnd;
        this.codesStock = codesStock;
    }

}