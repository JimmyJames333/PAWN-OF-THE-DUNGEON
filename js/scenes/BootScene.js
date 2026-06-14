class BootScene extends Phaser.Scene {
    constructor() {
        super("BootScene");
    }

    preload() {
        // Load normal chess pawn from assets folder
        this.load.image("pawn", "assets/pawn.png");
    }

    create() {
        this.scene.start("CharacterSelectScene");
    }
}
