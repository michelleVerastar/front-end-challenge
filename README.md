
<h1><b>Movie Explorer - Test Project for Front End Challenge</b></h1>




___________
How to Run:
___________
- This project uses github pages to host so just go to <TBC>

- If you want to run locally:
    - Make sure you have node and npm installed
    - in a terminal in the movie-explorer directory type:
        - npm install
        - npm run dev
    - then go to the localhost address

________________
Technical Notes:
________________
- Uses the Vue3 <script setup> syntax which is simpler than the old way with "export default .." for single file components
   - See the vue documentation for more details https://vuejs.org/api/sfc-script-setup
      
- The Vue3 standard for organising sections has become script > template > style  (as opposed to the vue2 ordering with template > script > style)
    - The new ordering makes sense because props from the script section are used in the template section
        - also reddit users report this involves less scrolling up and down: https://www.reddit.com/r/vuejs/comments/rmeoy7/what_order_do_you_have_your_template_and_script/
     
- Typescript is used for the scripting language
    - This allows the use of interfaces, strong typing, and is easier to maintain and to read than js.
 
- The project was set up with Vite build tool and dev server (used command "npm create vite@latest movie-explorer" to set up the project, this sets the package.json with the vite stuff needed) 
    - this makes the build really fast, with hot reload
    - more lightweight than webpack
 
- Http requests use axios instead of the native fetch API
      - the requests are simpler, less lines of code. Due to query param support built in and automatic JSON parsing

____________
Style Notes:
____________
    - Different colours for light and dark mode
    - Responsive to different screen sizes
    - I tried to make it pretty

_______________
For the Future:
_______________
 - Things still to add but I thought would take too long (could come back to this in the future as as a front end learning project):
    - Using a UI library -> I just used standard css but getting to know the libries available and how to use them would be good to do in the future
    - PWA Extension
    - Unit tests

