const { SlashCommandBuilder } = require('discord.js');
const fs = require("fs");
const { get } = require('http');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('테스트')
		.setDescription('DB를 읽어오겠습니다'),
	async execute(interaction) {
		let money_processed = "[CRITICAL] Error";
		//DB에서 돈을 읽어온 후 특정 유저를 찾는 코드
		fs.readFile("money.txt", "utf8", (err, data) => {
			if (err) {
			  console.error(err);
			} else {
			  money_processed = data;
			  let lines = data.split('\n');
			  let user = interaction.user.id;
			  let found = false;
			  lines.forEach((line, index) => {
				if (line.includes(user)) {
				  // 해당 문자열을 포함한 줄을 콘솔에 출력
				  let key = line;
				  console.log(key);
				  found = true;
				  interaction.reply({ content: "데이터를 서버에서 찾았습니다.", ephemeral: true });
				  money_proi = key.split('|');
				  money_prod = money_proi[1];
				  console.log(money_prod);
				}
			  });
			  if (!found) {
				// 해당 문자열을 포함한 줄을 찾지 못했을 때
				interaction.reply({ content: "데이터를 서버에서 찾지 못했습니다", ephemeral: true });
			  }
			}
		  });

	},
};