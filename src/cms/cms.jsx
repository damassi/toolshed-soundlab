import CMS from "netlify-cms-app"
import FileSystemBackend from "netlify-cms-backend-fs"
import { injectStyles } from "./injectStyles"

import { HomeTemplate } from "src/templates/home"
import { StudioTemplate } from "src/templates/studio"
import { ListenHereTemplate } from "src/templates/listen-here"
import { ClassesWorkshopsTemplate } from "src/templates/classes"
import { GRMusicTemplate } from "src/templates/gr-music"
import { LutherieTemplate } from "src/templates/lutherie"
import { ContactTemplate } from "src/templates/contact"

CMS.registerPreviewTemplate("home", injectStyles(HomeTemplate))
CMS.registerPreviewTemplate("studio", injectStyles(StudioTemplate))
CMS.registerPreviewTemplate("listen-here", injectStyles(ListenHereTemplate))
CMS.registerPreviewTemplate("classes", injectStyles(ClassesWorkshopsTemplate))
CMS.registerPreviewTemplate("gr-music", injectStyles(GRMusicTemplate))
CMS.registerPreviewTemplate("lutherie", injectStyles(LutherieTemplate))
CMS.registerPreviewTemplate("contact", injectStyles(ContactTemplate))

if (process.env.NODE_ENV === "development") {
  window.CMS_ENV = "localhost_development"
  CMS.registerBackend("file-system", FileSystemBackend)
}

CMS.init()
