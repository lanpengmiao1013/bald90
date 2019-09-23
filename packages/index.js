import lanLinkText from './lan-link-text'
import lanSelect from './lan-select'
import lanSlider from './lan-slider'
const components = [
    lanLinkText,
    lanSelect,
    lanSlider
]

const install = function (Vue) {
    if(install.installed) return
    components.map(component => Vue.component(component.name,component))
}

if (typeof window !== 'undefined' && window.Vue){
    install(window.Vue)
}

export default {
    install,
    lanLinkText,
    lanSelect,
    lanSlider
}
