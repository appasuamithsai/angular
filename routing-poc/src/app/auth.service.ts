

export class AuthService {
    isLoggedIn : boolean = false;
    isAuthenticated(){
        return new Promise(
            (resolve , reject)=>{
                setTimeout(()=>{
                    resolve(this.isLoggedIn);
                },900);
            });
    }
    login(){
        this.isLoggedIn = true;
    }
    logout(){
        this.isLoggedIn = false;
    }
}