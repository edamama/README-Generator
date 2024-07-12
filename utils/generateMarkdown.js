// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}


////////////test



function getLicenseBadge(licenseName) {
  // Define a mapping of license names to badge URLs
  const licenseBadges = {
      "MIT License": 'https://img.shields.io/badge/license-MIT-blue.svg',
      'Apache License 2.0': 'https://img.shields.io/badge/license-Apache%202.0-blue.svg',
      'GPL-3.0': 'https://img.shields.io/badge/license-GPL%203.0-blue.svg',
      // Add more licenses and their badge URLs as needed
  };

  // Look up the provided license name in the dictionary
  const badgeUrl = licenseBadges[licenseName] || '';

  return badgeUrl;
}





// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  
# ${data.title}


# Description
${data.description}

# Table of Contents 
* [Installation](#-installDirections)
* [Usage](#-usageDirections)
* [License](#-licenses)
* [Contributors](#-credits)
* [Tests](#-Tests)
* [Questions](#-questions)
    
# Installation Directions
${data.installDirections}

# Usage Details
${data.usageDirections}

# License(s) 
${getLicenseBadge(data.licenses)} 

# Contributors to the project: 
${data.credits}


# You can find more of me here: 
* GitHub Username: ${data.githubUsername}
* Contact Email: ${data.email}

    

`;
}

module.exports = generateMarkdown;
