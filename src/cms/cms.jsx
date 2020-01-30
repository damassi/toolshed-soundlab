import CMS from "netlify-cms-app"
import FileSystemBackend from "netlify-cms-backend-fs"
import { injectStyles } from "./injectStyles"

import { HomeTemplate } from "src/templates/HomeTemplate"
import { SoundLabTemplate } from "src/templates/SoundLabTemplate"
import { ListenHereTemplate } from "src/templates/ListenHereTemplate"
import { ClassesWorkshopsTemplate } from "src/templates/ClassesWorkshopsTemplate"
import { GRMusicTemplate } from "src/templates/GRMusicTemplate"
import { LutherieTemplate } from "src/templates/LutherieTemplate"
import { ContactTemplate } from "src/templates/ContactTemplate"

CMS.registerPreviewTemplate("home", injectStyles(HomeTemplate))
CMS.registerPreviewTemplate("recording-studio", injectStyles(SoundLabTemplate))
CMS.registerPreviewTemplate("listen-here", injectStyles(ListenHereTemplate))
CMS.registerPreviewTemplate(
  "classes-workshops",
  injectStyles(ClassesWorkshopsTemplate)
)
CMS.registerPreviewTemplate("george", injectStyles(GRMusicTemplate))
CMS.registerPreviewTemplate("lutherie-services", injectStyles(LutherieTemplate))
CMS.registerPreviewTemplate("contact", injectStyles(ContactTemplate))

if (process.env.NODE_ENV === "development") {
  window.CMS_ENV = "localhost_development"
  CMS.registerBackend("file-system", FileSystemBackend)
}

CMS.init()
