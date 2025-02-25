import { SaleInterface } from "./sale-interface";

export interface SaleRepositoryInterface {
    getSalesReport(date: string): Promise<SaleInterface[]>;
    getSalesReportBetweenDates(date: string, dateEnd: string): Promise<SaleInterface[]>;
    createSale(sale: SaleInterface): Promise<SaleInterface>;
}