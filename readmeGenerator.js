// ========= 
function readmeGenerator(response){

  let content = `# ${response.title}
  ##### [${response.userName}](${response.GitHub}) [Email Me](${response.email})
  
    
  ##### ReadMeGenerator© 2021 All Rights Reserved.  ${response.license} All material must be cited or credited, when using material (free to use).

  ## Table of Contents
  - [Installation](#installation)
  - [Demo](#demo)
  - [Details](#details)
  - [Contributors](#contributer)
  - [License](#license)
 

  ## Installation
  Packages required to run this program are: inquire

  # Demo
   
  ![GIF](https://user-images.githubusercontent.com/60197994/81350819-ce5b4600-9090-11ea-8f85-5ba4a1adb037.gif)
    
    
  # Details
  ###### [Back to Table of Contents](#Table-of-Contents)
  ${response.description}
   
  # Contributors
  ###### [Back to Table of Contents](#Table-of-Contents)
  ${response.contribute}

  # License
  ${response.license}

  # User Story
  ### AS A developer
  ###### [Back to Tables of contents](#table-of-contents)

  1.  GIVEN a command-line application that accepts user input
  2.  WHEN I am prompted for information about my application repository
  3.  THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
  4.  WHEN I enter my project title
  THEN this is displayed as the title of the README
  5.  WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
  6.  THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
  7.  WHEN I choose a license for my application from a list of options
  8.  THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
  9.  WHEN I enter my GitHub username
  THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
  10. WHEN I enter my email address
  11. THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
  12.  WHEN I click on the links in the Table of Contents
  13.  THEN I am taken to the corresponding section of the README

    
    `

    return content;
};

module.exports = readmeGenerator;