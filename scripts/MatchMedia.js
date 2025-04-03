import pxToRem from "./utils/pxToRem.js"
const matchMedia = {
   mobile: window.matchMedia(`(width <= ${pxToRem(767.98)}rem)`),
}

export default matchMedia