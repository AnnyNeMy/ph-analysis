import { DbMethod } from "./DbMethod";
import { GroupStock } from "./GroupStock";
import { TimeFrame } from "./TimeFrame";

export class DBUpdateRequest
{
    constructor(public dBMethod: DbMethod, public  group: GroupStock, public frame: TimeFrame, public dtStart: Date, public dtEnd: Date )
    {}
}