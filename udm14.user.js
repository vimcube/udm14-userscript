// ==UserScript==
// @name         udm14
// @namespace    https://github.com/vimcube/udm14-userscript
// @version      1.0.0
// @description  Add udm=14 to Google searches (web results only, no AI overview)
// @author       vimcube
// @match        *://www.google.com/search*
// @run-at       document-start
// @grant        none
// ==/UserScript==

const u = new URL(location.href);
if (!u.searchParams.has("udm") && !u.searchParams.has("tbm")) {
  u.searchParams.set("udm", "14");
  location.replace(u);
}
