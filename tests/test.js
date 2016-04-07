'use strict'
import test from 'ava'

import getLodashTemplateVars from '../lib/'

test('it should throw an error if template is not a string', t => {
  t.throws(getLodashTemplateVars, TypeError)
  t.throws(getLodashTemplateVars, /Expected template to be a string/)
})

test('it should return an empty array if template has no vars', t => {
  t.deepEqual(getLodashTemplateVars(''), [])
  t.deepEqual(getLodashTemplateVars('hello'), [])
})

test('it should retrieve interpolated vars', t => {
  const oneVarWithoutSpaces = getLodashTemplateVars('<%=hello%>')
  const oneVarWithSpaces = getLodashTemplateVars('<%= hello %>')
  const twoVarsMixedSpacing = getLodashTemplateVars('<%= hello %><%=bye%>')
  const threeVarsWithoutSpaces = getLodashTemplateVars('<%=hello%><%=bye%><%=world%>')
  const threeVarsWithSpaces = getLodashTemplateVars('<%= hello %><%= bye %><%= world %>')

  t.deepEqual(oneVarWithoutSpaces, ['hello'])
  t.deepEqual(oneVarWithSpaces, ['hello'])
  t.deepEqual(twoVarsMixedSpacing, ['hello', 'bye'])
  t.deepEqual(threeVarsWithoutSpaces, ['hello', 'bye', 'world'])
  t.deepEqual(threeVarsWithSpaces, ['hello', 'bye', 'world'])
})

test('it should retrieve escaped vars', t => {
  const oneVarWithoutSpaces = getLodashTemplateVars('<%-hello%>')
  const oneVarWithSpaces = getLodashTemplateVars('<%- hello %>')
  const twoVarsMixedSpacing = getLodashTemplateVars('<%- hello %><%-bye%>')
  const threeVarsWithoutSpaces = getLodashTemplateVars('<%-hello%><%-bye%><%-world%>')
  const threeVarsWithSpaces = getLodashTemplateVars('<%- hello %><%- bye %><%- world %>')

  t.deepEqual(oneVarWithoutSpaces, ['hello'])
  t.deepEqual(oneVarWithSpaces, ['hello'])
  t.deepEqual(twoVarsMixedSpacing, ['hello', 'bye'])
  t.deepEqual(threeVarsWithoutSpaces, ['hello', 'bye', 'world'])
  t.deepEqual(threeVarsWithSpaces, ['hello', 'bye', 'world'])
})

test('it should retrieve vars from truthy conditions', t => {
  const ifVarWithoutSpaces = getLodashTemplateVars('<%if(name){%>')
  const ifVarWithSpaces = getLodashTemplateVars('<% if ( name ) { %>')

  t.deepEqual(ifVarWithoutSpaces, ['name'])
  t.deepEqual(ifVarWithSpaces, ['name'])
})

test('it should remove duplicates', t => {
  const twoUniques = getLodashTemplateVars('<%=hello%><%=bye%><%-bye%><%=hello%>')

  t.deepEqual(twoUniques, ['hello', 'bye'])
})
