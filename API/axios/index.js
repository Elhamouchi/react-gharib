// ==============
//      GET
// ==============

// const { default: axios } = require("axios");

function getUsersJSONPlaceHolder() {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}

function getUserTrameezApi() {
  axios
    .get("https://tarmeezacademy.com/api/v1/users?limit=100")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}

// getUsersJSONPlaceHolder();
// getUserTrameezApi();

// ======================
// POST
// ======================

function registerTrmeexApi(username, password, name, email) {
  axios
    .post("https://tarmeezacademy.com/api/v1/register", {
      username: "elhamouchi mostafa",
      password: "Flintstone",
      name: "abdellah",
      email: "gg@g.com",
    })
    .then(function (response) {
      console.log("success");
      console.log(response);
    })
    .catch(function (error) {
      console.log("Error: ");
      console.log(error.message);
      console.log(error);
    });
}

// registerTrmeexApi("elhamouchi mostafa", "Flintstone", "abdellah", "gg@g.com");
const registerToken = "169235|zyVQrH3e54nmlgE4mGR9xzLbPmynDiwdZOdnCHiX";
const loginToken = "169235|zyVQrH3e54nmlgE4mGR9xzLbPmynDiwdZOdnCHiX";
const username = "elhamouchi mostafa";
const password = "Flintstone";

function loginApiTarmeez() {
  axios
    .post(
      "https://tarmeezacademy.com/api/v1/login",
      {
        username: username,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

