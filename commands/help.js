const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
  name: "help",
  description: "Get information about the bot",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {
      const { EmbedBuilder } = require('discord.js');

      const embed = new EmbedBuilder()
        .setColor('#0099ff')
        .setTitle('👋 Welcome Bot Help')
        .setDescription('Here are the available commands:\n\n' +
          '**/welcomemessage :** set up welcome message.\n' +
          '**/setupwelcome :** Set up the welcome Bot for your server.\n' +
          '**/ping :** Check bot latency.\n' +
          '**/support :** Display support server info');
          
      return interaction.reply({ embeds: [embed] });
    } catch (e) {
      console.error(e); 
    }
  },
};
