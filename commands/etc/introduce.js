const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('소개')
		.setDescription('Chung Hyun봇은 무엇이 차별화되어있고, 어떠한 기능을 가지고 있는지 소개해요.'),
	async execute(interaction) {
		await interaction.reply('하나의 봇으로 모든 기능을 수행하세요.\nChung Hyun은 하나의 봇으로 모든 관리기능을 제공합니다.');
	},
};