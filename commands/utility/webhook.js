// const { SlashCommandBuilder } = require('discord.js');
// const fetch = require('node-fetch');

// module.exports = {
// 	data: new SlashCommandBuilder()
// 		.setName('웹훅')
// 		.setDescription('웹후크를 통해 메세지를 전송할 수 있습니다.')
//         .addStringOption(message_input =>
//             message_input.setName('메세지')
//                 .setDescription('이곳에 전송할 메세지를 입력하세요.')
//                 .setRequired(true))
//     	.addStringOption(url_input =>
// 		    url_input.setName('웹후크')
// 			    .setDescription('이곳에 웹후크 URL을 입력하세요.')
//                 .setRequired(true)),            
// 	async execute(interaction) {
//         let message_processed = interaction.options.getString('메세지');
//         let url_processed = interaction.options.getString('웹후크');
//         var params = {
//             username: "ChungHyun 웹훅전송 서비스",
//             avatar_url: "",
//             content: message_processed,
//             embeds: [
//                 {
//                     "title": "이 메세지는 ChungHyun 웹훅전송 서비스를 통해 전송되었습니다.",
//                     "color": 15258703,
//                     "thumbnail": {
//                         "url": "",
//                     },
//                     "fields": [
//                         {
//                             "name": "ChungHyun을 이용하면, 수가지 기능을 하나의 봇으로 이용할 수 있습니다.",
//                             "value": "(초대링크)",
//                             "inline": true
//                         }
//                     ]
//                 }
//             ]
//         }
//         fetch(url_processed, {
//             method: "POST",
//             headers: {
//                 'Content-type': 'application/json'
//             },
//             body: JSON.stringify(params)
//         }).then(res => {
//         }) 
// 		await interaction.reply({ content: "전송을 요청하였습니다.\n경우에 따라, 전송이 진행되지 않거나, 긴시간후 전송되는 경우가 있습니다.\n이 경우엔, URL의 링크가 올바른지 다시한번 확인하여주시기 바랍니다." , ephemeral: true });
//         console.log(`웹후크 URL: ${url_processed}\n전송할 메세지: ${message_processed}\n로깅완료`)
// 	},
// };