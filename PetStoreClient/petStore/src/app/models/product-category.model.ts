export class ProductCategory{
    
    productCategoryId: number | null;
    name: string | null;

    constructor(productCategoryId?: number, name?: string){
        this.productCategoryId = productCategoryId || null;
        this.name = name || null;
    }
}