export class Login{
    
    userName: string | null;
    password: string | null;

    constructor(userName?: string, password?: string){
        this.userName = userName || null;
        this.password = password || null;
    }
}