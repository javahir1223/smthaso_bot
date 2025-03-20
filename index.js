const { Telegraf } = require("telegraf");

const BOT_TOKEN = "7694398985:AAEyzbxhLV4I5j8sW8fka4UIFLbONCEBQ70";
const ADMIN_ID = "1126237671"; // Укажи свой Telegram ID
const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => ctx.reply("Welcome"));

bot.command("city", (ctx) => {
    ctx.replyWithPhoto({
        url: "https://avatars.mds.yandex.net/i?id=9845351bb97b91a02e93d9236912f1e4c544f298-5232386-images-thumbs&n=13",
    });
});

bot.help((ctx) => {
    ctx.reply("Send me a sticker")
    if (userId !== ADMIN_ID) {
        bot.telegram.sendMessage(ADMIN_ID, `${username}:${text}`);
    }
});
bot.hears("chto?", (ctx) => ctx.reply("chto,chto?"));

bot.on("message", (ctx) => {

    const username=ctx.message.from.username
    const userId = ctx.message.from.id;
    const text = ctx.message.text || "Медиафайл";

    ctx.reply(text);

    if (userId !== ADMIN_ID) {
        bot.telegram.sendMessage(ADMIN_ID, `${username}:${text}`);
    }
});

bot.launch();
