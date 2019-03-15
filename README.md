# Who Represents Me?
## Description
Do you know who your state representatives are? Are you familiar with their voting record? This app provides Virginia residents with information about their state representatives in Congress, including what they're thinking, how they vote, and which district they represent. 
## Preview
![screen shot](planning/screenshot.png?raw=true)
## User Stories/Functionality
- *User wants to know who represents their district*
    - User can reference the district map to see who represents their district
- *User wants more information on their representative*
    - User can click on the image of each representative to see additional information about them, including:
        - Voting record: Follow how they vote on issue
        - Tweets: Shows live updates of twitter timeline. See what they are doing in their district on what they think about current issues
- *User wants to know which representatives most closely align with them on important regional and local issues*
    - Take an interactive quiz that returns the VA rep that most closely aligns with user on important issues

## Technologies
This is application was built using React and deployed to Surge. Maps were created using the MapBox API. 
### Dependencies used: 
- react
- react-iframe
- react-map-gl
- react-router
- react-dom
- react-router-dom
- react-scripts
- react-twitter-embed
- react-twitter-widgets
## Getting Started
To use this app, visit the public site hosted on surge: [Who Represents Me?](http://the-fun-budget-tool.surge.sh/)
### Installation
To set up the app locally:
1. Fork and clone the project repository. 
2. Install all dependencies by running npm install in you CLI.
```
npm install
```
3. Run npm start
## Authors
[Fathia Mohammed](https://github.com/FATHIA123)

[Shakira Weir](https://github.com/shakiraweir)

## Issues/Future Improvements
- Update the design. Make the app responsive
- Create a hover effect for the main map on the homepage that highlights each district and shows a popup that displays the representative for that district
- Add a search feature that allows a user to put in their address in a search bar and retrieve information about their local representative. 

## Additional Features
### Issues Quiz
Include an interactive quiz where users answers questions about regional and national issues. Based on their answers, they learn which representative most closely aligns with them and the issues. 
### Voting Record
Include a graph that shows the voting record of each representative
## Issue Tracker
https://github.com/FATHIA123/project4-2/issues