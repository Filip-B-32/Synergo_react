import { createServer } from "miragejs";

let books = [
  {
    id: 1,
    name: "The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life",
    author: "Mark Manson",
    date: "12-02-2021",
  },
  {
    id: 2,
    name: "The Intelligent Investor",
    author: "Benjamin Graham",
    date: "12-02-2021",
  },
  {
    id: 3,
    name: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    date: "12-02-2021",
  },
  { id: 4, name: "Fake ", author: "Robert Kiyosaki", date: "12-02-2021" },
  {
    id: 5,
    name: "How to Make Sh*t Happen: Make more money, get in better shape, create epic relationships and control your life!",
    author: "Sean Whalen",
    date: "12-02-2021",
  },
  { id: 6, name: "Becoming ", author: "Michelle Obama", date: "12-02-2021" },
  {
    id: 7,
    name: "Emotional Intelligence",
    author: "Daniel Goleman",
    date: "12-02-2021",
  },
  {
    id: 8,
    name: "Business @ the Speed of Thought",
    author: "Bill Gates",
    date: "12-02-2021",
  },
  {
    id: 9,
    name: "The Essays of Warren Buffett: Lessons for Investors and Managers",
    author: "Warren Buffett",
    date: "12-02-2021",
  },
  {
    id: 10,
    name: "Einstein: His Life and Universe",
    author: "Walter Isaacson",
    date: "12-02-2021",
  },
  { id: 11, name: "The Road Aheas", author: "Bill Gates", date: "12-02-2021" },
];

let accounts = [
  { id: 1, email: "nume@yahoo.com", password: "parola" },
  { id: 2, email: "nume2@yahoo.com", password: "parola2" },
  { id: 3, email: "name23@yahoo.com", password: "synergo" }
];

createServer({
  routes() {
    this.namespace = "api";

    this.get("/books", () => {
      return {
        books,
      };
    });

    this.get("/accounts", () => {
      return {
        accounts,
      };
    });
  },
});
