import Markup from 'telegraf/markup.js'

export function getMainMenu() {
    return Markup.keyboard([
        ['Автоматы', 'Отзыв о нашей компании'],
        ['Связаться о сотрудничестве']
    ]).resize().extra()
}

export function automatonKeyboard() {
    return Markup.inlineKeyboard([
        [Markup.callbackButton('Гостинца советская', 'hotelSoviet')],
        [Markup.callbackButton('БЦ Взлётный','vzlotnyy')],
        [Markup.callbackButton('МЦ Аллегрис','allegris')],
        [Markup.callbackButton('Назад к меню','backGetMainMenu')]
    ]).resize().extra()
}

export function hotelSovieKeyboard() {
    return Markup.inlineKeyboard([
        [Markup.callbackButton('Не упал/застрял товар?', 'noЗroduct')],
        [Markup.callbackButton('Аппарат не сдал сдачу?', 'noСhange')],
        [Markup.callbackButton('Не работает аппарат?', 'doesNotWork')],
        [Markup.callbackButton('Назад к автоматам', 'backToAautomaton')]
    ]).resize().extra()
}
export function vzlotnyyKeyboard() {
    return Markup.inlineKeyboard([
        [Markup.callbackButton('Не упал/застрял товар?', 'noЗroduct')],
        [Markup.callbackButton('Аппарат не сдал сдачу?', 'noСhange')],
        [Markup.callbackButton('Не работает аппарат?', 'doesNotWork')],
        [Markup.callbackButton('Назад к автоматам', 'backToAautomaton')]
    ]).resize().extra()
}

export function allegrisKeyboard() {
    return Markup.inlineKeyboard([
        [Markup.callbackButton('Не упал/застрял товар?', 'noЗroduct')],
        [Markup.callbackButton('Аппарат не сдал сдачу?', 'noСhange')],
        [Markup.callbackButton('Не работает аппарат?', 'doesNotWork')],
        [Markup.callbackButton('Назад к автоматам', 'backToAautomaton')]
    ]).resize().extra()
}

    // export function addActionBot (name, src, text) {
//     return (name, async (ctx) => {
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
 
