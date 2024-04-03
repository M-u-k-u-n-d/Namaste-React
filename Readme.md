# This repository is Created during learning React by Namaste React.

# Parcel
it create's 
- Dev Build
- local server

- refreshing your page automatically (means HMR = Hot Module Replacement) 
- it uses file watching algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting 
- Differential Bundling (it gives you support older browsers)
- Diagonastic
- Error Handling
- Tree Shaking - remove unused code  
- Different dev and production bundles


//***** Food Delivery App ****** */
***
 * Header
 * - logo
 * - nav Items
 
 * Body
 * - Search
 * - Restaurant Container
 * - Restaurant Card
 * - Img
 * - Name of Res, Star Rating, Cuisines.
 
 * Footer
 * - Copyright
 * - links
 * - Address
 */


# There are two types of Export/Import

- (1) Default Export/Import

- export default Component;
- import Component from path;

- (2) Named Export/ Import

- export const Component;
- import {Component} from path; 


# two types of Routing
- Client Side Routing 
- Server Side Routing

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our App 
- Slice (cartSlice)
- dispatch (action)
- Selector

# Types of testing (Developer)

- unit testing
- Integration testing
- End to End testing (e2e testing )

# Setting up testing in our App 

- Install React testing library
- Installed Jest 
- Install Babel Dependencies
- Configure Babel
- Configure Babel transformation file to disable default babel transpilation
- Jest configuration (npx jest --init)
- install jsdom library
- install @babel/preset-react (to make JSX work in test cases)
- include @babel/preset-react inside babel config
- Install testing-library/jest-dom