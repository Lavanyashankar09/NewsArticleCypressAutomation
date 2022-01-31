# NewsArticleCypressAutomation

Built with javascript, cypress, mochawesome.

Tools: Visual Studio, Node.js.

AIM - to fetch articles from this website https://www.newyorker.com/latest

Steps:

To execute in local:
1. install nodejs https://nodejs.org/dist/v14.17.6/node-v14.17.6-x64.msi
2. install visual studio https://code.visualstudio.com/download
3. clone the repo "News_Article_Cypress_Automation"
4. open folder News_Article_Cypress_Automation in visual studio
5. goto package.json file and replace 7th line with this "clean:reports": "rmdir /S /Q cypress\\reports && mkdir cypress\\reports && mkdir cypress\\reports\\mochareports",
6. Run the commands given below to install dependencies from package.json file
	npm install
	npm install cypress --save-dev
7. To execute testcases run this command 
	npm test or npx cypress open

To execute with docker:
1. Any OS which as docker & docker-compose
2. clone the repo "NewsArticleCypressAutomation"
3. goto the folder NewsArticleCypressAutomation
4. goto package.json file and replace 7th line with this "clean-reports": "mkdir -p cypress/reports && rm -R -f cypress/reports/* && mkdir cypress/reports/mochareports",
5. Run this command 
	docker build -t cypress-docker . { here "." is current file location}
6. To execute testcases run this command
	docker-compose run chrome
	
To execute in ubuntu:
1. install npm and cypress dependencies
   apt install npm
   apt-get install xvfb
2. clone the repo "NewsArticleCypressAutomation"
3. goto the folder NewsArticleCypressAutomation
4. Run the commands given below to install dependencies from package.json file
	npm install
5. To execute testcases run this command 
	npm test 
	
To execute in rhel:
1. https://www.itzgeek.com/how-tos/linux/ubuntu-how-tos/install-nodejs-ubuntu-debian-linux-mint-using-ppa.html

Challenges:
1. Difficulty in locating elements 
	Solution: used cypress plugin - cypress-iframe
2. Cypress only supports CSS to locate elements
	Solution: used plugin - cypress-xpath
3. Cypress wait (waiting for the elements until its clickable or visible)
	Solution: used cypress command "should" for few methods
4. Generating html report
	Solution: used plugin - mochawesome
