var game;

// Create a new game instance 600px width and 450px height:
game = new Phaser.Game(600, 450, Phaser.AUTO, '');

// First parameter is how our state will be called.
// Second parameter is an object containing the needed methods for state functionality
game.state.add('Menu', Menu);
game.state.start('Menu');
