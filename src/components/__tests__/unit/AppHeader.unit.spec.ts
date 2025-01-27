import { describe, it, expect,vi } from 'vitest'
import PrimeVue from 'primevue/config';
import { mount } from '@vue/test-utils'
import AppHeader from '../../AppHeader.vue'

const mockRoutePush = vi.fn()
vi.mock('vue-router', async () => {
  return {
    RouterView: {},
    useRouter: () => {
      return {
        push: mockRoutePush
      }
    }
  }
})

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
          plugins: [PrimeVue],
      },
    });

    const logo = wrapper.find('#logo')
    logo.trigger('click')
    expect(mockRoutePush).toHaveBeenCalled()
    expect(mockRoutePush).toHaveBeenCalledWith({ name: 'home' })
  })
})
