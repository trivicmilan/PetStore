export class OrderItem{
    
    orderItemId: number | null;
    orderId: number | null;
    productId: number | null;
    price: number | null;
    quantity: number | null;

    productName: string | null;

    constructor(orderItemId?: number, orderId?: number, productId?: number, price?: number, quantity?: number, productName?: string){
        this.orderItemId = orderItemId || null;
        this.orderId = orderId || null;
        this.productId = productId || null;
        this.price = price || null;
        this.quantity = quantity || null;
        this.productName = productName || null;
    }

}