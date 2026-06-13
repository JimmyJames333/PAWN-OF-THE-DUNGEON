class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene");
    }

    create() {
        this.mapGen = new MapGenerator(this);
        this.mapGen.generateDungeon();

        this.corruption = new CorruptionSystem(this);
        this.synergy = new SynergySystem(this);

        this.player = new Player(this, 640, 360);
        this.enemy = new Enemy(this, 900, 360);

        this.physics.add.overlap(
            this.player.sprite,
            this.enemy.sprite,
            () => this.enemy.takeDamage(1)
        );

        this.scene.launch("UIScene");
    }

    update() {
        this.player.update();
        this.enemy.update();
    }
}
