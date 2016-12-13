import Vue from 'vue';
import Hello from '../../../src/components/Hello.vue';

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello);
    const vm = new Constructor().$mount();
    expect(vm.$el.textContent).to.equal('Hello! John Doe');
  });
});
