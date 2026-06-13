class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  create() {
    const { width, height } = this.scale;
    this.add.text(width / 2, height / 2, 'Game Started!', {
      fontSize: '32px',
      color: '#00ff00'
    }).setOrigin(0.5);
  }
}
