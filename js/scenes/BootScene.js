class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }

  preload() {
    // Load assets here
    this.load.image('logo', 'assets/sprites/logo.png');
  }

  create() {
    // Simple loading splash
    const { width, height } = this.scale;
    this.add.text(width / 2, height / 2, 'Loading...', {
      fontSize: '32px',
      color: '#ffffff'
    }).setOrigin(0.5);

    // Move to GameScene after short delay
    this.time.delayedCall(1000, () => {
      this.scene.start('GameScene');
    });
  }
}
