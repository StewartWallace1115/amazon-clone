<template>
  <div class="card">
      <Menubar  :model="items">
            
          <template #start>
            <a href="" id="logo" @click="navigateToHome">

                    <Image alt="Amazon logo" src="amazon-dark-logo-resize.png"></Image>
            </a>

          </template>
          <template #item="{ item, props, hasSubmenu, root }">
              <a v-ripple class="flex items-center" v-bind="props.action">
                  <span>{{ item.label }}</span>
                  <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
                  <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
                  <i v-if="hasSubmenu" :class="['pi pi-angle-down ml-auto', { 'pi-angle-down': root, 'pi-angle-right': !root }]"></i>
              </a>
          </template>
          <template #end>
              <div class="flex items-center gap-2">
                  <InputText placeholder="Search" type="text" class="w-32 sm:w-auto" />
                  <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
              </div>
          </template>
      </Menubar>
      <MegaMenu :model="items" />

  </div>
    <div class="card">
    </div>
</template>

<script setup >
import { ref } from "vue";
import { useRouter } from 'vue-router'
const router = useRouter()

const items = ref([
    {
        label: 'Company',
        root: true,
        items: [
            [
                {
                    items: [
                        { label: 'Features', icon: 'pi pi-list', subtext: 'Subtext of item' },
                        { label: 'Customers', icon: 'pi pi-users', subtext: 'Subtext of item' },
                        { label: 'Case Studies', icon: 'pi pi-file', subtext: 'Subtext of item' }
                    ]
                }
            ],
            [
                {
                    items: [
                        { label: 'Solutions', icon: 'pi pi-shield', subtext: 'Subtext of item' },
                        { label: 'Faq', icon: 'pi pi-question', subtext: 'Subtext of item' },
                        { label: 'Library', icon: 'pi pi-search', subtext: 'Subtext of item' }
                    ]
                }
            ],
            [
                {
                    items: [
                        { label: 'Community', icon: 'pi pi-comments', subtext: 'Subtext of item' },
                        { label: 'Rewards', icon: 'pi pi-star', subtext: 'Subtext of item' },
                        { label: 'Investors', icon: 'pi pi-globe', subtext: 'Subtext of item' }
                    ]
                }
            ],
            [
                {
                    items: [{ image: 'https://primefaces.org/cdn/primevue/images/uikit/uikit-system.png', label: 'GET STARTED', subtext: 'Build spectacular apps in no time.' }]
                }
            ]
        ]
    },
    {
        label: 'Resources',
        root: true
    },
    {
        label: 'Contact',
        root: true
    }
]);
function navigateToHome(){
    router.push({ name: 'home' })

};
</script>