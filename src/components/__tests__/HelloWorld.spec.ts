// ===========================================================================
/// <summary>
/// HelloWorld.spec.ts
/// vue-shper
/// created by Mehrdad Soleimanimajd on 28.11.2023
/// </summary>
/// <created>ʆϒʅ, 28.11.2023</created>
/// <changed>ʆϒʅ, 29.11.2023</changed>
// ===========================================================================

import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
