import { createServer } from "miragejs";

createServer({
    routes() {
        this.namespace = "newapi";
        
        this.get("/accounts",() =>{
            return{
                accounts:[
                    {id: 1, email :"nume@yahoo.com",password: "parola"},
                    {id: 2, email :"nume2@yahoo.com",password:"parola2"}
                ],
            }
        })
    }
})

