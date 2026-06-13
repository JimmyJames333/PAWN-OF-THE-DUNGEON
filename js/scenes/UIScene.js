class UIScene extends Phaser.Scene {
  constructor() {
    super('UIScene');
  }

  create() {
    this.add.text(20, 20, 'UI Layer Active', {
      fontSize: '20px',
      color: '#ffffff'
    });
  }
}
