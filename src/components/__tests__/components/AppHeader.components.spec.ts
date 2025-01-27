import { describe, it, expect,vi  } from 'vitest'   
import { mount } from '@vue/test-utils'
import AppHeader from '../../AppHeader.vue'
import PrimeVue from 'primevue/config';
import router from '../../../router/index'



describe('AppHeader', () => {
  it('renders properly', () => {
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: vi.fn().mockImplementation(query => ({
          matches: false,
          media: query,
          onchange: null,
          addListener: vi.fn(),
          removeListener: vi.fn(),
          addEventListener: vi.fn(),
          removeEventListener: vi.fn(),
          dispatchEvent: vi.fn(),
        })),
      })

  
      const wrapper = mount(AppHeader, {
        global: {
            plugins: [PrimeVue,router],
        },
    });
    const push = vi.spyOn(router, 'push')

    const logo = wrapper.find('#logo')
    logo.trigger('click')    
    expect(push).toHaveBeenCalledTimes(1)
  })
})
