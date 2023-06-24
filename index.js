import Telegraf from 'telegraf'
import 'dotenv/config'
import { getMainMenu, automatonKeyboard, hotelSovieKeyboard, vzlotnyyKeyboard, allegrisKeyboard} from './keyboards.js'

// import {text} from './const.js'
// import {text_2} from './const.js'

const bot = new Telegraf (process.env.BOT_TOKEN)

// bot.help(ctx => console.log(chat_id))

bot.start(ctx => {ctx.replyWithHTML (`<b>Здравствуй ${ctx.message.from.first_name}!</b> \n\n` +
 'Мы рады, что Вы пользуетесь услугами наших автоматов',
getMainMenu())
})


bot.hears('Автоматы', async ctx => {
    try{
        const {id} = ctx.chat
        const {message_id} = ctx.message

        await ctx.reply (id, {
            reply_markup:{remove_keyboard: true
            }
        })
        ctx.tg.deleteMessage(id, message_id + 1)

        await ctx.replyWithHTML ('У каково Вы автомата?:', automatonKeyboard()) 
        ctx.tg.deleteMessage(id, message_id)

        }catch (e){
            console.error(e)
                }
})

bot.action ('backGetMainMenu', async ctx => {
    try{

         await ctx.answerCbQuery()
         await ctx.replyWithHTML ('Выбери пункт меню!', getMainMenu()) 

        }catch (e){
            console.error(e)
}
})
// bot.hears('Автоматы', async msg => {
//     try{
//         const chat_id = msg.chat.id
//         await msg.reply (chat_id, {
//             reply_markup:{ remove_keyboard: true
//             }
//         })
//         }catch (e){
//             console.error(e)
//                 }
// })

bot.action ('hotelSoviet', async ctx => {
    try{

         await ctx.answerCbQuery()
         await ctx.replyWithHTML (`<b>Автомат Гостиница советская.</b> \n\n` +
         'Выберете, что именно случилось?', hotelSovieKeyboard()) 

         ctx.tg.deleteMessage(ctx.chat.id, ctx.message.message_id)

        }catch (e){
            console.error(e)
}
})

bot.action ('vzlotnyy', async ctx => {
    try{
         await ctx.answerCbQuery()
         await ctx.replyWithHTML (`<b>Автомат БЦ Взлётный.</b> \n\n` +
         'Выберете, что именно случилось?', vzlotnyyKeyboard()) 
        }catch (e){
            console.error(e)
}
})

bot.action ('allegris', async ctx => {
    try{
         await ctx.answerCbQuery()
         await ctx.replyWithHTML (`<b>Автомат МЦ Аллегрис.</b> \n\n` +
         'Выберете, что именно случилось?', allegrisKeyboard()) 
        }catch (e){
            console.error(e)
}
})
 
bot.action ('backToAautomaton', async ctx => {
    try{
         await ctx.answerCbQuery()
         await ctx.replyWithHTML ('У кого Вы автомата?:', automatonKeyboard()) 
        }catch (e){
            console.error(e)
}
})  

// function addActionBot (name, src, text) {
//     bot.action (name, async (ctx) => {
//         try{
//             await ctx.answerCbQuery()
//             if (src !== false) {
//                 await ctx.replywithPhoto({
//                     source: src
//                 })
//             }
//                 await ctx.reply (text, {
//                     disable_web_page_preview: true
//                 })
//             } catch (e){
//                 console.error(e)
//         }
//     })
//  }
 
//  addActionBot ('btn_1',false, text)
//  addActionBot ('btn_2',false, text_2)

// addActionBot ('btn_1',false, text, async ctx => {await ctx.replyWithHTML ('Выберете действие:')
// })


// $bot->callbackQuery(function ($callbackQuery) use ($bot) {
//     $keyboard = new \TelegramBot\Api\Types\Inline\InlineKeyboardMarkup([
//         [
//             ['text' => 'тест', 'callback_data' => 'tesssst'],
//         ],
//     ]
// );
// $bot->editMessageReplyMarkup($callbackQuery->getMessage()->getChat()->getId(), $callbackQuery->getMessage()->getMessageId(), $keyboard);

bot.launch()
