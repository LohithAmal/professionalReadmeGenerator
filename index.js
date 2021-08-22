
// ====== VARIABLE DECLARATION ES6 VARIABLES =========

const readmeGenerator = require("./readmeGenerator");
const fileSytem = require("fs");
const inquirer = require('inquirer');

// ==== QUESTION TO USERS HERE ===

let questions =[
  {
      type: "input",
      message: "What is the title for your repository?",
      name: "title"
  },{
      type: "input",
      message: "What is your GitHub user name?",
      name: "userName"
  },{
      type: "input",
      message: "Please enter your GitHub profile link.",
      name: "GitHub"
  },{
      type: "input",
      message: "Please enter your Email id?",
      name: "email"
  },{
      type: "list",
      name: "license",
      message: "Please select which license you would like to use.",
      choices : [
          "APACHE 2.O",
          "BSD 3",
          "GVL-GPL 3.0",
          "MIT",
          "None"
      ],
  },{
      type: "input",
      message: "Please describe the project.",
      name: "description"

  },{
      type: "input",
      message: "Please state if others can contribute.",
      name: "contribute"
  }
];

// ==== FUNCTION TO WRITE READ ME ====/

inquirer.prompt(questions).then((response)=>{
  console.log(response);

  let content = readmeGenerator(response);
  console.log(content);
  fileSytem.writeFile("./ReadMe.md", content,(err)=>{
    if(err) console.log("error");
  })

}
);
