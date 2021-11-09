//Download NodeJs -> https://nodejs.org/en/download/
1. Install Node + npm and run following commands in terminal:
- node -v
- npm -v 

2. Run tests:
//Go to e2e folder
- cd e2e

//First time installation of cypress
- npm install cypress --save-dev(if cypress is not installed)
- npm init
- npm install

//This command runs tests in headless mode
- npm run cypress:headless 

//This command runs test in browser
- npm run cypress:open
