// ========= 
function readmeGenerator(response){

  let content = `# ${response.title}
  ##### [${response.userName}](${response.GitHub}) [Email Me](${response.email})
  
    
  ##### ReadMeGenerator© 2021 All Rights Reserved.  ${response.license} All material must be cited or credited, when using material (free to use).
  # Demo
   
  ![GIF](https://user-images.githubusercontent.com/60197994/81350819-ce5b4600-9090-11ea-8f85-5ba4a1adb037.gif)
    
  ## Table of Contents
    * [General Information](#Repository-Description)
    * [Installation Instructions](#Install)
    * [Usage Information](#Usage)
    * [Demo](#Demo)
    * [Project Details](#User-story)
    * [Contribution Guidelines](#Contribution-Guidelines)
    * [License](#License)
    
  # Repository Description
  ###### [Back to Table of Contents](#Table-of-Contents)
  ${response.description}
    
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


    # Usage
    ###### [Back to Table of Contents](#Table-of-Contents)
    1. use the terminal and type in the file name to as "node filename".

    ![readme-terminal-result](https://user-images.githubusercontent.com/83518319/130367715-3c691f5b-a242-4fd0-96e1-295b995de847.JPG)


    2. once all the questions answered ther code will automatically generate a readme file with all you answers.

    ![readme-terminal-result-2](https://user-images.githubusercontent.com/83518319/130367770-56d0ed76-8776-48dd-ac53-f31782263f4d.JPG)

    # Demo

    ![GIF](https://github.com/LohithAmal/professionalReadmeGenerator/blob/main/images/Untitled_%20Aug%2022%2C%202021%203_00%20PM.gif)


    # Contribution Guidelines
    ###### [Back to Table of Contents](#Table-of-Contents)
    ${response.contribute}
  
    # License
    ${response.license} -use code but dont blame me if it doesn't work.
    ##### copyright © 2021 LohithAmal 
    `

    return content;
};

module.exports = readmeGenerator;