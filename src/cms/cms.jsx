import CMS from "netlify-cms-app"
import FileSystemBackend from "netlify-cms-backend-fs"
import { ClassesWorkshopsTemplate } from "src/templates/ClassesWorkshopsTemplate"
import { injectStyles } from "./injectStyles"

CMS.registerPreviewTemplate("blog", injectStyles(ClassesWorkshopsTemplate))

if (process.env.NODE_ENV === "development") {
  window.CMS_ENV = "localhost_development"
  CMS.registerBackend("file-system", FileSystemBackend)
}

CMS.init()
