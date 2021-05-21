export class Order{
    
    orderId: number | null;
    firstName: string | null;
    lastName: string | null;
    address: string | null;
    status: string | null;

    constructor(orderId?: number, firstName?: string, lastName?: string, address?: string, status?: string){
        this.orderId = orderId || null;
        this.firstName = firstName || null;
        this.lastName = lastName || null;
        this.address = address || null;
        this.status = status || null;
    }
}