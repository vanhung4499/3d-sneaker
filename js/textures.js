import { Color3, StandardMaterial, Texture } from "babylonjs";

export class TextureManager {
  constructor(scene) {
    this.scene = scene;
  }

  color2RGB = {
    "pomegranate": { r: 240, g: 52, b: 52 },
    "shakespeare": { r: 82, g: 179, b: 217 },
    "haze-green": { r: 1, g: 152, b: 117 },
    "plum": { r: 145, g: 61, b: 136 },
    "confetti": { r: 233, g: 212, b: 96 },
    "tahiti-gold": { r: 232, g: 126, b: 4 },
    "black": { r: 0, g: 0, b: 0 },
    "white": { r: 255, g: 255, b: 255 },
  };

  applyColor(selector, meshName, scene, color) {
    selector.addEventListener("click", () => {
      const mesh = scene.getMeshByName(meshName);
      const material = new StandardMaterial("material", scene);

      let rgb = this.color2RGB[color];
      const r = rgb["r"] / 255;
      const g = rgb["g"] / 255;
      const b = rgb["b"] / 255;

      material.diffuseColor = new Color3(r, g, b);
      mesh.material = material;
    });
  }

}
