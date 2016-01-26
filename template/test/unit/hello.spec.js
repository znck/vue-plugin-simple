/* global describe, it, beforeEach */

import Vue from 'vue'
import Hello from '../../src/Hello.vue'

const chai = require('chai')
    , expect = chai.expect
    , should = chai.should();

describe('Component Hello', function () {
  let vm

  vm = new Vue({
    template: '<div><hello></hello></div>',
    components: {Hello}
  }).$mount()

  console.warn(JSON.parse(JSON.stringify(vm.$data)))

  it('should render correctly.', function () {
    expect(vm.$el.querySelectorAll('#greetings')).have.length(1)
  })

  it('should should have name', function () {
    expect(vm.$el.querySelector('#greetings').textContent).to.equal('Hello! John Doe')
  })
})

