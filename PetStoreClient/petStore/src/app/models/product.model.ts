
export class Product{

    productId: number | null;
    name: string | null;
    code: string | null;
    price: number | null;
    quantityAvailable: number | null;
    description: string | null;

    productCategoryId: number | null;
    productCategoryName: string | null;

    constructor(productId?: number, name?: string, code?: string, price?: number, quantityAvailable?: number, description?: string, productCategoryId?: number, productCategoryName?: string){
        this.productId = productId || null;
        this.name = name || null;
        this.code = code || null;
        this.price = price || null;
        this.quantityAvailable = quantityAvailable || null;
        this.description = description || null;
        this.productCategoryId = productCategoryId || null;
        this.productCategoryName = productCategoryName || null;
    }

}