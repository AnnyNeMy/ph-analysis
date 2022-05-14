import { OneOneMethodConfig } from "./OneOneMethodConfig";
import { TimeFrame } from "./TimeFrame";

export class CalculateParams
     {
        public codeStock: string | undefined;
        public timeFrameStr: string | undefined;
        public timeFrame: TimeFrame | undefined;
        public level: number | undefined;
        public isUse: boolean;
        public isMultiStock: boolean | undefined;
        public methodName: string | undefined;
        public N1: number | undefined | null;
        public N2: number | undefined | null;
        public N3: number | undefined | null; 
        public Kup: number | undefined | null; 
        public Kdown: number | undefined | null; 
        public Krsrv: number | undefined | null; 
    
       /*  constructor(level: number, codeStock: string, timeFrame: TimeFrame, methodName: string, isUse: boolean = true, isMultiStock: boolean) */
       constructor(level: number, oneOneMethodConfig: OneOneMethodConfig, isUse: boolean = true, isMultiStock?: boolean)
        {
            this.level = level;
            this.codeStock = oneOneMethodConfig.bond;
            this.timeFrameStr = oneOneMethodConfig.timeFrameName;
            this.timeFrame = TimeFrame[oneOneMethodConfig.timeFrameName as keyof typeof TimeFrame];
            this.methodName = oneOneMethodConfig.method;
            this.N1 = oneOneMethodConfig.n1Value;
            this.N2 = oneOneMethodConfig.n2Value;
            this.N3 = oneOneMethodConfig.n3Value;
            this.Kup = oneOneMethodConfig.kUpValue;
            this.Kdown = oneOneMethodConfig.kDownValue;
            this.Krsrv = oneOneMethodConfig.additionalVaiableValue;
            this.isUse = isUse;
            this.isMultiStock = isMultiStock;
        }
    }
