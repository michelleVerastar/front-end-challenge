
<h1><b>Movie Explorer - Test Project for Front End Challenge</b></h1>




___________
How to Run:
___________

- Make sure you have node and npm installed
- open terminal and navigate to  movie-explorer directory
- npm install
- npm run dev
- go to the localhost address

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


____________
Style Notes:
____________
- Using Vuetify UI Library
  - Made specifically for vue
  - Big resource of pre-defined UI components with good documentation. See https://vuetifyjs.com/en/components/all/#containment
  - The components library is free (though vuetify do sell paid themes and UI kits with pre defined layouts, behaviour and colour schemes)
  - The component library is open source, so in theory we could alter specific components for our own purposes. See https://github.com/vuetifyjs/vuetify/tree/v3.10.0
    


______________________________________________
TODO:
______________________________________________
- Implement Github pages so can view site via url
- Add PWA feature to allow the user the add the site to thier home screen and save data offline 
- unit testing using Vitest
    - This is reccomended in the Vue documentation https://vuejs.org/guide/scaling-up/testing 
    - Based on vite which is already used in this project


