import '@mdi/font/css/materialdesignicons.css' 
import 'vuetify/dist/vuetify.min.css'
import Vue from 'vue'
import {
  Vuetify,
  VSubheader,
  VDivider,
  VApp,
  VCard,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VTextField,
  VTooltip,
  VImg,
  VProgressCircular,
  VBreadCrumbs,
  VPagination,
  VSelect,
  VCarousel,
  VTabs,
  VSnackbar,
  VBadge, 
  VStepper, 
  VTextarea,
  VForm,
  VDialog
} from 'vuetify'

Vue.use(Vuetify, {
  components: {
    VDialog,
    VForm,
    VTextarea,
    VStepper,
    VBadge,
    VSnackbar,
    VTabs,
    VCarousel,
    VSelect,
    VPagination,
    VBreadCrumbs,
    VProgressCircular,
    VImg,
    VTextField,
    VSubheader,
    VDivider,
    VApp,
    VCard,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VTooltip
  },
  
    theme: {
      "primary": "#2DC6C1",
      "secondary": "#424242",
      "accent": "#82B1FF",
      "error": "#FF5252",
      "info": "#2196F3",
      "success": "#13C56B",
      "warning": "#FFC107",
      "tabscolor": "#7F7F7F"
    }
  
})
