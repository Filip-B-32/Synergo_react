import { createServer } from "miragejs";

createServer({
    routes() {
        this.namespace = "api";
        
        this.get("/books",() =>{
            return{
                books:[
                    {id: 1, name :"The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life",author: "Mark Manson"},
                    {id: 2, name :"The Intelligent Investor",author:"Benjamin Graham"},
                    {id: 3, name :"Rich Dad Poor Dad",author:"Robert Kiyosaki"},
                    {id: 4, name :"Fake ",author:"Robert Kiyosaki"},
                    {id: 5, name :"How to Make Sh*t Happen: Make more money, get in better shape, create epic relationships and control your life!",author:"Sean Whalen"},
                    {id: 6, name :"Becoming ",author:"Michelle Obama"},
                    {id: 7, name :"Emotional Intelligence",author:"Daniel Goleman"},
                    {id: 8, name :"Business @ the Speed of Thought",author:"Bill Gates"},
                    {id: 9, name :"The Essays of Warren Buffett: Lessons for Investors and Managers",author:"Warren Buffett"},
                    {id: 10, name :"Einstein: His Life and Universe",author:"Walter Isaacson"},
                    {id: 11, name :"The Road Aheas",author:"Bill Gates"}
                ],
            }
        })
    }
})

