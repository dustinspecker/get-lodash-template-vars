# get-lodash-template-vars
[![NPM version](https://badge.fury.io/js/get-lodash-template-vars.svg)](https://badge.fury.io/js/get-lodash-template-vars) [![Build Status](https://travis-ci.org/dustinspecker/get-lodash-template-vars.svg)](https://travis-ci.org/dustinspecker/get-lodash-template-vars) [![Coverage Status](https://img.shields.io/coveralls/dustinspecker/get-lodash-template-vars.svg)](https://coveralls.io/r/dustinspecker/get-lodash-template-vars?branch=master)

[![Code Climate](https://codeclimate.com/github/dustinspecker/get-lodash-template-vars/badges/gpa.svg)](https://codeclimate.com/github/dustinspecker/get-lodash-template-vars) [![Dependencies](https://david-dm.org/dustinspecker/get-lodash-template-vars.svg)](https://david-dm.org/dustinspecker/get-lodash-template-vars/#info=dependencies&view=table) [![DevDependencies](https://david-dm.org/dustinspecker/get-lodash-template-vars/dev-status.svg)](https://david-dm.org/dustinspecker/get-lodash-template-vars/#info=devDependencies&view=table)

> Retrieve list of vars in a lodash template

## Install
```
npm install --save get-lodash-template-vars
```

## Usage
```javascript
import getLodashTemplateVars from 'get-lodash-template-vars'

getLodashTemplateVars('<%- name %> <%= age %> <%=name%>')
  // => ['name', 'age']

getLodashTemplateVars('Hello world!')
  // => []
```


## API

### getLodashTemplateVars(template)
Returns an array of strings, which are the variable identifiers.

#### template
type: `string`

The lodash template to examine for variables

## LICENSE
MIT © [Dustin Specker](https://github.com/dustinspecker)
