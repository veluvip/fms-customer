import { Observable } from "rxjs";

export interface ICommonAPIService<T> {

    findAll(searchTerm:string, pageIndex:number,pageSize:number): Observable<T>;

    // returns observable that resolves to list of datas
    get(dataId: number): Observable<T>;

    // returns observable that resolves to ID of new data
    add(data: T): Observable<number>;

    // returns observable that resolves to status message
    update(dataId: number, dataToUpdate: T): Observable<string>;

    // returns observable that resolves to status message
    delete(dataId: number): Observable<string>;
}