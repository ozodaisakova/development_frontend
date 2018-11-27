// import '@mdi/font/css/materialdesignicons.css' 
import 'material-design-icons/iconfont/material-icons.css'
import 'vuetify/dist/vuetify.min.css'
import Vue from 'vue'
import VApp from 'vuetify/es5/components/VApp'
import VAlert from 'vuetify/es5/components/VAlert'
import VBadge from 'vuetify/es5/components/VBadge'
import VBreadcrumbs from 'vuetify/es5/components/VBreadcrumbs'
import VBtn from 'vuetify/es5/components/VBtn'
import VCard from 'vuetify/es5/components/VCard'
import VCarousel from 'vuetify/es5/components/VCarousel'
import VDivider from 'vuetify/es5/components/VDivider'
import VDialog from 'vuetify/es5/components/VDialog'
import VFooter from 'vuetify/es5/components/VFooter'
import VForm from 'vuetify/es5/components/VForm'
import VGrid from 'vuetify/es5/components/VGrid'
import VHover from 'vuetify/es5/components/VHover'
import VIcon from 'vuetify/es5/components/VIcon'
import VImg from 'vuetify/es5/components/VImg'
import VList from 'vuetify/es5/components/VList'
import VNavigationDrawer from 'vuetify/es5/components/VNavigationDrawer'
import VPagination from 'vuetify/es5/components/VPagination'
import VProgressCircular from 'vuetify/es5/components/VProgressCircular'
import VSelect from 'vuetify/es5/components/VSelect'
import VSubheader from 'vuetify/es5/components/VSubheader'
import VSnackbar from 'vuetify/es5/components/VSnackbar'
import VStepper from 'vuetify/es5/components/VStepper'
import VTabs from 'vuetify/es5/components/VTabs'
import VTextarea from 'vuetify/es5/components/VTextarea'
import VTextField from 'vuetify/es5/components/VTextField'
import VToolbar from 'vuetify/es5/components/VToolbar'
import VTooltip from 'vuetify/es5/components/VTooltip'
import Vuetify from 'vuetify/es5/components/Vuetify'

Vue.use(Vuetify, {
  // iconfont: 'mdi',
  components: {
    VAlert,
    VBreadcrumbs,
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
