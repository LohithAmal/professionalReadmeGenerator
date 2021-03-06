// ========= 
function readmeGenerator(response){

  let content = `# ${response.title}
  ##### [${response.userName}](${response.GitHub}) [Email Me](${response.email})
  
    
  ##### ReadMeGenerator¬© 2021 All Rights Reserved.  ${response.license} All material must be cited or credited, when using material (free to use).

  ## Table of Contents
  - [Installation](#installation)
  - [Demo](#demo)
  - [Details](#details)
  - [Contributors](#contributors)
  - [License](#license)
  - [References](#reference)
 

  ## Installation
    Run the code in a terminal.

  # Demo
   
  ![GIF](https://github.com/LohithAmal/professionalReadmeGenerator/blob/main/images/Untitled_%20Aug%2022%2C%202021%203_00%20PM.gif)
    
    
  # Details
  ###### [Back to Table of Contents](#Table-of-Contents)
  ${response.description}
   
  # Contributors
  ###### [Back to Table of Contents](#Table-of-Contents)
  ${response.contribute}

  # License
  ${response.license}

  # Reference 
   - https://www.youtube.com/watch?v=xdNIia7Z2RE
   - https://github.com/supercodingninja/SuperCodingNinja
   - https://stackoverflow.com/questions/62597209/trying-to-generate-a-readme-using-nodejs
   - https://github.com/TiffanyCasey

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