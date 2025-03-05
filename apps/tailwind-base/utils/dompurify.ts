// function importModule(requiredModule: any) {
//   return (requiredModule && requiredModule.default) || requiredModule
// }

// function initDOMPurifyWithJSDOM() {
//   const DOMPurifyInitializer = importModule(require("dompurify"))
//   const { JSDOM } = importModule(require("jsdom"))
//   const { window } = new JSDOM("<!DOCTYPE html>")
//   return DOMPurifyInitializer(window)
// }

// export function purifier() {
//   const isClientSide = typeof window !== "undefined"
//   return isClientSide
//     ? importModule(require("dompurify"))
//     : initDOMPurifyWithJSDOM()
// }

// module.exports = global.DOMPurify = global.DOMPurify || resolveDOMPurify();

// export function purifier() {
//   const isClientSide = typeof window !== "undefined"
//   const DOMWindow = new JSDOM("").window
//   const DOMPurify = createDOMPurify(DOMWindow)
//   return DOMPurify
// }
