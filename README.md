# JavaScript test Marfeel

Hello everyone, to configure the test you need to have nodejs installed that has npm. Why is it necessary? I used the Chart.js library and Webpack so these dependencies must be installed.


### Installation

JavaScript Test requires [Node.js](https://nodejs.org/) v4+ and npm to run.

First of all, we must clone the repository with the following command:

```sh
$ git clone https://github.com/andres326/JavaScriptTest.git 
```

Then, install the dependencies.

```sh
$ cd /path/to/the/projectTest
$ npm install 
```
Once the package installation is finished, you just have to open the **index.html** file with any browser that supports ES6. This file is at the root of the project.
### Folders and Files

- The **data** folder contains a .json file with the test data that was simulated to perform the test. 
- The **model** folder contains a folder called modules that has the files that model the application and the **app.js** file that serves as a facade to build the application.
- The **styles** folder contains the style sheet that is applied to the **index.html** view
- The **bundle.js** file is the file that packages the entire javascript code into a single file for import into the view
- The **index.html** file contains the view that is displayed in the application.
- The **package.json** file contains all the dependencies necessary to run the application.


**Pablo Andrés Cubillos**
**pcubillos326@gmail.com**
**Bogotá, Colombia**

