
<h1><b>Movie Explorer - Test Project for Front End Challenge</b></h1>




___________
How to Run:
___________
- TODO This project uses github pages to host so just go to https://michelleVerastar.github.io/front-end-challenge

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
     
- Typescript is used for the scripting language
    - This allows the use of interfaces, strong typing, and is easier to maintain and to read than js.
 
- The project was set up with Vite build tool and dev server     
    - this makes the build really fast, with hot reload
    - more lightweight than webpack
    - Vite was made by Evan You who created vue.js - these work well together
 
- Http requests use axios instead of the native fetch API
    - the requests are simpler, less lines of code,
    - query param support built in and automatic JSON parsing

- TODO - Using PWA to allow the user the add the site to thier home screen and save data offline 
    - previous searches will load even if they are not connected to the internet

- TODO - unit testing using Vitest
    - This is reccomended in the Vue documentation https://vuejs.org/guide/scaling-up/testing 
    - Based on vite which is already used in this project

____________
Style Notes:
____________
- Using Vuetify UI Library
  - Made specifically for vue
  - Big resource of pre-defined UI components with good documentation. See https://vuetifyjs.com/en/components/all/#containment
  - The components library is free (though vuetify do sell paid themes and UI kits with pre defined layouts, behaviour and colour schemes)
  - The component library is open source, so in theory we could alter specific components for our own purposes. See https://github.com/vuetifyjs/vuetify/tree/v3.10.0
    


______________________________________________
Misc Notes:
______________________________________________
- I added Vuetify after already setting up the project with vite first which is the hard way of doing it (need to manually install sass, edit configs, main.ts etc to get vuetify working)
    - In the future if using vuetify it is better to set up the whole project with vite and vuetify in one go, as per the "Using Vite" section in the instructions here: https://vuetifyjs.com/en/getting-started/installation/
        - this sets everything up without needing manual edits or extra manual package installs
    - There is a known bug where directly importing 'vuetify/styles' doesn't work when adding vuetify to an exisitng project, which is not an issue when creating the project with vuetify 
        - see https://github.com/vuetifyjs/vue-cli-plugins/issues/303  and https://www.reddit.com/r/vuejs/comments/1i4zee2/cannot_find_module_vuetifystyles_or_its/  (I got this bug and had to import vuetify/styles/main.css)


