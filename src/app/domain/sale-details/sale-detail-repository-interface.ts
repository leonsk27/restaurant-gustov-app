import { SaleDetailInterface } from "./sale-detail-interface";

export interface SaleDetailRepositoryInterface {
    getSaleDetails(): Promise<SaleDetailInterface[]>;
    createSaleDetail(saleDetail: SaleDetailInterface): Promise<SaleDetailInterface>;
}