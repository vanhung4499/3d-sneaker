import {
  ArcRotateCamera,
  Color3,
  Color4,
  Engine,
  HemisphericLight,
  Scene,
  SceneLoader,
  StandardMaterial,
  Texture,
  Tools,
  Vector3,
} from "babylonjs";
import { Sneaker } from "./sneaker";
import { TextureManager } from "./textures";

const healGuard = document.querySelector("#heal-guard");
const toeGuard = document.querySelector("#toe-guard");
const laces = document.querySelector("#laces");
const sole = document.querySelector("#sole");
const soleFoam = document.querySelector("#sole-foam");
const textureBox = document.querySelector("#texture-box");
const rightSwoosh = document.querySelector("#right-swoosh");
const leftSwoosh = document.querySelector("#left-swoosh");
const tongueFront = document.querySelector("#tongue-front");
const resetAnimations = document.querySelector("#reset-animations");

const healGuardColors = document.querySelector("#heal-guard-colors");
const toeguardColors = document.querySelector("#toe-guard-colors");
const swooshColors = document.querySelector("#swoosh-colors");
const lacesColors = document.querySelector("#laces-colors");
const soleColors = document.querySelector("#sole-colors");
const tongueFrontColors = document.querySelector("#tongue-front-colors");
const tigerFur = document.querySelector("#tiger-fur");
const pantherFur = document.querySelector("#panther-fur");
const denim = document.querySelector("#denim");
const knit = document.querySelector("#knit");

class App {
  constructor() {
    /*
     * set initial app properties and start the main function
     **/

    // get the canvas element from the html body
    this.canvas = document.querySelector("#stage");

    // initialize the babylon engine and scene
    this.engine = new Engine(this.canvas, true);
    this.scene = new Scene(this.engine);

    this.main();
  }

  main() {
    this.goToStage();

    this.engine.runRenderLoop(() => {
      this.scene.render();
    });

    window.addEventListener("resize", () => {
      this.engine.resize();
    });
  }

  materialPicker() {}

  goToStage() {
    let scene = new Scene(this.engine);
    const light = new HemisphericLight(
      "light",
      new Vector3(-10, 20, 10),
      scene
    );
    const camera = new ArcRotateCamera(
      "camera",
      Tools.ToRadians(-60),
      Tools.ToRadians(60),
      70,
      Vector3.Zero(),
      scene
    );

    scene.clearColor = new Color4(0, 0, 0, 0.0000000000000001);
    camera.attachControl(this.canvas, true);

    // camera behaviours
    camera.lowerRadiusLimit = 50;
    camera.upperRadiusLimit = 120;
    camera.useBouncingBehavior = true;
    camera.useAutoRotationBehavior = true;

    // load the sneaker mesh
    const sneaker = new Sneaker(scene);
    const textureManager = new TextureManager(scene);

    healGuard.addEventListener("click", () => {
      sneaker.animateSoleAndSoleFoam();
      sneaker.animateTop();

      toeguardColors.style.display = "none";
      swooshColors.style.display = "none";
      healGuardColors.style.display = "block";
      lacesColors.style.display = "none";
      soleColors.style.display = 'none';
      tongueFrontColors.style.display = "none";

      const pomegranate = document.querySelector("#pomegranate-healguard");
      const shakespeare = document.querySelector("#shakespeare-healguard");
      const hazeGreen = document.querySelector("#haze-green-healguard");
      const plum = document.querySelector("#plum-healguard");
      const confetti = document.querySelector("#confetti-healguard");
      const tahitiGold = document.querySelector("#tahiti-gold-healguard");
      const white = document.querySelector("#white-healguard");
      const black = document.querySelector("#black-healguard");

      textureManager.applyColor(pomegranate, "fabric_heal_guard", scene, "pomegranate");
      textureManager.applyColor(shakespeare, "fabric_heal_guard", scene, "shakespeare");
      textureManager.applyColor(hazeGreen, "fabric_heal_guard", scene, "haze-green");
      textureManager.applyColor(plum, "fabric_heal_guard", scene, "plum");
      textureManager.applyColor(confetti, "fabric_heal_guard", scene, "confetti");
      textureManager.applyColor(tahitiGold, "fabric_heal_guard", scene, "tahiti-gold");
      textureManager.applyColor(white, "fabric_heal_guard", scene, "white");
      textureManager.applyColor(black, "fabric_heal_guard", scene, "black");
    });

    toeGuard.addEventListener("click", () => {
      sneaker.animateToeGuard();

      healGuardColors.style.display = "none";
      toeguardColors.style.display = "block";
      swooshColors.style.display = "none";
      lacesColors.style.display = "none";
      soleColors.style.display = 'none';
      tongueFrontColors.style.display = "none";

      const pomegranate = document.querySelector("#pomegranate-toeguard");
      const shakespeare = document.querySelector("#shakespeare-toeguard");
      const hazeGreen = document.querySelector("#haze-green-toeguard");
      const plum = document.querySelector("#plum-toeguard");
      const confetti = document.querySelector("#confetti-toeguard");
      const tahitiGold = document.querySelector("#tahiti-gold-toeguard");
      const white = document.querySelector("#white-toeguard");
      const black = document.querySelector("#black-toeguard");

      textureManager.applyColor(pomegranate, "fabric_toe_guard", scene, "pomegranate");
      textureManager.applyColor(shakespeare, "fabric_toe_guard", scene, "shakespeare");
      textureManager.applyColor(hazeGreen, "fabric_toe_guard", scene, "haze-green");
      textureManager.applyColor(plum, "fabric_toe_guard", scene, "plum");
      textureManager.applyColor(confetti, "fabric_toe_guard", scene, "confetti");
      textureManager.applyColor(tahitiGold, "fabric_toe_guard", scene, "tahiti-gold");
      textureManager.applyColor(white, "fabric_toe_guard", scene, "white");
      textureManager.applyColor(black, "fabric_toe_guard", scene, "black");
    });

    sole.addEventListener("click", () => {
      sneaker.animateSole();

      healGuardColors.style.display = "none";
      toeguardColors.style.display = "none";
      swooshColors.style.display = "none";
      lacesColors.style.display = "none";
      soleColors.style.display = 'block';
      tongueFrontColors.style.display = "none";

      const white = document.querySelector("#white-sole");
      const black = document.querySelector("#black-sole");

      textureManager.applyColor(white, "sole", scene, "white");
      textureManager.applyColor(black, "sole", scene, "black");
    });

    soleFoam.addEventListener("click", () => {
      sneaker.animateSoleAndSoleFoam();
    });

    rightSwoosh.addEventListener("click", () => {
      sneaker.animateSwooshRight();

      healGuardColors.style.display = "none";
      toeguardColors.style.display = "none";
      swooshColors.style.display = "block";
      lacesColors.style.display = "none";
      soleColors.style.display = 'none';
      tongueFrontColors.style.display = "none";

      const pomegranate = document.querySelector("#pomegranate-swoosh");
      const shakespeare = document.querySelector("#shakespeare-swoosh");
      const hazeGreen = document.querySelector("#haze-green-swoosh");
      const plum = document.querySelector("#plum-swoosh");
      const confetti = document.querySelector("#confetti-swoosh");
      const tahitiGold = document.querySelector("#tahiti-gold-swoosh");
      const white = document.querySelector("#white-swoosh");
      const black = document.querySelector("#black-swoosh");
      

      textureManager.applyColor(pomegranate, "swoosh_right", scene, "pomegranate");
      textureManager.applyColor(shakespeare, "swoosh_right", scene, "shakespeare");
      textureManager.applyColor(hazeGreen, "swoosh_right", scene, "haze-green");
      textureManager.applyColor(plum, "swoosh_right", scene, "plum");
      textureManager.applyColor(confetti, "swoosh_right", scene, "confetti");
      textureManager.applyColor(tahitiGold, "swoosh_right", scene, "tahiti-gold");
      textureManager.applyColor(white, "swoosh_right", scene, "white");
      textureManager.applyColor(black, "swoosh_right", scene, "black");
    });

    leftSwoosh.addEventListener("click", () => {
      sneaker.animateSwooshLeft();

      healGuardColors.style.display = "none";
      toeguardColors.style.display = "none";
      swooshColors.style.display = "block";
      lacesColors.style.display = "none";
      soleColors.style.display = 'none';
      tongueFrontColors.style.display = "none";

      const pomegranate = document.querySelector("#pomegranate-swoosh");
      const shakespeare = document.querySelector("#shakespeare-swoosh");
      const hazeGreen = document.querySelector("#haze-green-swoosh");
      const plum = document.querySelector("#plum-swoosh");
      const confetti = document.querySelector("#confetti-swoosh");
      const tahitiGold = document.querySelector("#tahiti-gold-swoosh");
      const white = document.querySelector("#white-swoosh");
      const black = document.querySelector("#black-swoosh");

      textureManager.applyColor(pomegranate, "swoosh_left", scene, "pomegranate");
      textureManager.applyColor(shakespeare, "swoosh_left", scene, "shakespeare");
      textureManager.applyColor(hazeGreen, "swoosh_left", scene, "haze-green");
      textureManager.applyColor(plum, "swoosh_left", scene, "plum");
      textureManager.applyColor(confetti, "swoosh_left", scene, "confetti");
      textureManager.applyColor(tahitiGold, "swoosh_left", scene, "tahiti-gold");
      textureManager.applyColor(white, "swoosh_left", scene, "white");
      textureManager.applyColor(black, "swoosh_left", scene, "black");
    });

    laces.addEventListener("click", () => {
      healGuardColors.style.display = "none";
      toeguardColors.style.display = "none";
      swooshColors.style.display = "none";
      lacesColors.style.display = "block";
      soleColors.style.display = 'none';
      tongueFrontColors.style.display = "none";

      const pomegranate = document.querySelector("#pomegranate-laces");
      const shakespeare = document.querySelector("#shakespeare-laces");
      const hazeGreen = document.querySelector("#haze-green-laces");
      const plum = document.querySelector("#plum-laces");
      const confetti = document.querySelector("#confetti-laces");
      const tahitiGold = document.querySelector("#tahiti-gold-laces");
      const white = document.querySelector("#white-laces");
      const black = document.querySelector("#black-laces");

      textureManager.applyColor(pomegranate, "laces", scene, "pomegranate");
      textureManager.applyColor(shakespeare, "laces", scene, "shakespeare");
      textureManager.applyColor(hazeGreen, "laces", scene, "haze-green");
      textureManager.applyColor(plum, "laces", scene, "plum");
      textureManager.applyColor(confetti, "laces", scene, "confetti");
      textureManager.applyColor(tahitiGold, "laces", scene, "tahiti-gold");
      textureManager.applyColor(white, "laces", scene, "white");
      textureManager.applyColor(black, "laces", scene, "black");
    });

    tongueFront.addEventListener("click", () => {
  
        healGuardColors.style.display = "none";
        toeguardColors.style.display = "none";
        swooshColors.style.display = "none";
        lacesColors.style.display = "none";
        soleColors.style.display = 'none';
        tongueFrontColors.style.display = "block";
  
        const white = document.querySelector("#white-tongue-front");
        const black = document.querySelector("#black-tongue-front");
  
        textureManager.applyColor(white, "tongue-front", scene, "white");
        textureManager.applyColor(black, "tongue-front", scene, "black");
      });

    resetAnimations.addEventListener("click", () =>
      sneaker.resetAllAnimationGroups()
    );

    this.scene = scene;
  }
}

new App();
