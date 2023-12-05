<!-- =========================================================================
/// <summary>
/// TheWelcome.vue
/// vue-shoƥer
/// created by Mehrdad Soleimanimajd on 28.11.2023
/// </summary>
/// <created>ʆϒʅ, 28.11.2023</created>
/// <changed>ʆϒʅ, 05.12.2023</changed>
========================================================================== -->

<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Delivery</template>
    All products are swift delivered using environment friendly transport means.
    <a href="https://www.swiftdeliver.com">SwiftDeliver</a> garantees this.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Packaging</template>
    Packages are in no means a damage to earth, a claim of
    <a href="https://www.packager.org" target="_blank" rel="noopener">Packager</a>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>More</template>
    When it comes to shops,
    <a href="https://shoper.vuejs.org/" target="_blank" rel="noopener">Shoƥer</a>
    is a friend of humans and animals.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>
    Got stuck? Call phone numbers available on
    <a href="https://phonelines.vuejs.org" target="_blank" rel="noopener">Shoƥer Land</a>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Shoƥer</template>
    As an independent influencer or enthusiast, Shoƥer relies on in advance free advertisement and
    report there of here
    <a href="https://shoper.vuejs.org/sponsor/" target="_blank" rel="noopener">sponsor</a>. Cost can
    only be discussed after delivery. :/
  </WelcomeItem>
</template>
