/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 48,
        y: 50
      }),
      new Costume("costume2", "./Sprite1/costumes/costume2.svg", {
        x: 4.690512904238318,
        y: 4.690512904238318
      })
    ];

    this.sounds = [new Sound("Meow", "./Sprite1/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.clearPen();
    this.stage.vars.clones = 0;
    while (true) {
      while (!(this.stage.vars.clones == 300)) {
        this.createClone();
        yield;
      }
      if (this.stage.vars.clones == 300) {
        this.penColor = Color.rgb(this.random(1, 255), this.random(1, 255), this.random(1, 255));
        this.penSize = 1;
        this.goto(this.random(-240, 240), this.random(-180, 180));
        this.penDown = true;
        this.penDown = false;
      }
      yield;
    }
  }

  *startAsClone() {
    this.goto(0, 0);
    this.stage.vars.clones += 1;
  }

  *startAsClone2() {
    while (true) {
      if (this.stage.vars.clones == 300) {
        this.penColor = Color.rgb(this.random(1, 255), this.random(1, 255), this.random(1, 255));
        this.penSize = 1;
        this.goto(this.random(-240, 240), this.random(-180, 180));
        this.penDown = true;
        this.penDown = false;
      }
      yield;
    }
  }
}
