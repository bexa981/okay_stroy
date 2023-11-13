import { createI18n } from 'vue-i18n'

import uz from "./uz.json"
import ru from "./ru.json"
const i18n = createI18n({
   locale:'ru',
   messages:{
    uz: uz,
    ru: ru
   }
  })

  export default i18n;