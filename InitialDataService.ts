import { GetStocksInGroupRequest } from '@/models/GetStocksInGroupRequest';
import { GroupStock } from '@/models/GroupStock';
import Axios from 'axios-observable';
import { Observable, of } from 'rxjs';
import { switchMap } from "rxjs/operators";

export class InitialDataService {
    getGroupsStocks(): Observable<string[]> {
        return Axios.get('/GetGroupsStocks').pipe(switchMap(x => of(x.data)));
    }

    getDBMethod(): Observable<string[]> {
        return Axios.get('/GetDBMethod').pipe(switchMap(x => of(x.data)));
    }

    getEnumsTimeFrameNames(): Observable<string[]> {
        return Axios.get('/GetEnumsTimeFrameNames').pipe(switchMap(x => of(x.data)));
    }
    getBonds(): Observable<string[]> {
        return Axios.get("/GetEnumsTimeFrameNames").pipe(
            switchMap((x) => of(x.data))
        );
    }

    getEnumsSampleSizeNames(): Observable<string[]> {
        return Axios.get("/GetEnumsSampleSizeNames").pipe(
            switchMap((x) => of(x.data)));
    }

    getFilterTypeNames(): Observable<string[]> {
        return Axios.get("/GetFilterTypeNames").pipe(
            switchMap((x) => of(x.data)));
    }

    getStocksInGroup(stock: string): Observable<string[]> {
        let req = new GetStocksInGroupRequest(
            GroupStock[stock as keyof typeof GroupStock]
        );
        return Axios.post("/GetStocksInGroup", req).pipe(
            switchMap((x) => of(x.data)));
    }

    getMethodsName(): Observable<string[]> {
        return Axios.get("/GetMethodsName").pipe(switchMap((x) => of(x.data)));
      }
}