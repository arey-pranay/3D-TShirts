import { proxy } from "valtio";
const state = proxy({
  intro: true,
  color: "#Efbd48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});
//whatever we define here can be used anywhere
export default state;
