import { AvailablePackagesSpecification } from "./availablePackagesSpecification";

export interface ProductsListModel {
    id?: string;
    itemCode?: string;
    name?: string;
    description?: string;
    price?: any;
    quantity?: any;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: any;
    images?: any[];
    specification?: AvailablePackagesSpecification[];
}