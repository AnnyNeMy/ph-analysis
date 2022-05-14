import { CommonTypeTableResult } from "@/models/CommonTypeTableResult";

export class GetTableDateHelper {

    public static getTableColumns(headersArr: string[]): CommonTypeTableResult {
        return headersArr.map((item: string, ind: number) => { return {header: item, field: 'columnVal'+ind, codeClassName: 'codeClassName'} })
    }

    public static getTableData(tableData: any): CommonTypeTableResult {
        if (!!tableData?.length) {
            return tableData.map((x: any) =>{
                return x?.report.reduce(function(result: any, item: string, index: number) {
                   result['columnVal'+index] = item; 
                   result['codeClassName'] = x.action;
                   return result;
               }, {}) 
               }); 
        } 
        else if(typeof tableData === 'object') {
            return [tableData?.report.reduce(function(result: any, item: string, index: number) {
                result['columnVal'+index] = item; 
                result['codeClassName'] = 0;
                return result;
            }, {})];
        }
        else {
            return [];
        }
    }
}