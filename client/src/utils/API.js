import axios from "axios";

export default {
  // Login user
  loginUser: function (userData) {
    console.log(userData)
    return axios.post("/api/login", userData);
  },
  // Signup user
  signupUser: function (userData) {
    console.log(userData)
    return axios.post("/api/signup", userData);
  },

  // Logout user
  logout: function () {
    return axios.get("/api/logout")
  },

  // To retrieve all stocks from db
  getStocks: function () {
    return axios.get("/api/stocks")
  },

  buyStocks: function () {
    return axios.get("api/stocks/:id")
  },

  submitStocks: function (data) {
    console.log(data);
    return axios.put("/api/stocks/buy", data);
  },

  resetStocks: function () {
    return axios.put("/api/stocks/sell");
  },

  getLessons: function () {
    return axios.get("/api/learn");
  },

  getPopulated: function () {
    return axios.get("/api/populated");
  }


  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};
