import asyncio
import logging
import json


from aiogram import Bot, Dispatcher, types, F # type: ignore
from aiogram.utils.keyboard import ReplyKeyboardBuilder # type: ignore
from aiogram.enums.content_type import ContentType # type: ignore
from aiogram.filters import CommandStart # type: ignore
from aiogram.enums.parse_mode import ParseMode # type: ignore


logging.basicConfig(level=logging.INFO)

bot = Bot("7715309828:AAGzdn4youky_A2IXdK8Vphtygs0Gh_H18Q")
dp = Dispatcher()


@dp.message(CommandStart())
async def start(message: types.Message):
    
    webAppInfo = types.WebAppInfo(url="https://zhm1603.github.io/--------/")
    builder = ReplyKeyboardBuilder()
    builder.add(types.KeyboardButton(text='Открыть Mini App', web_app=webAppInfo))
    userData = json.dumps({'username': message.from_user.username, 'first_name': message.from_user.first_name})
    await message.answer(text=f'Привет!, {message.from_user.username}' , reply_markup=builder.as_markup(resize_keyboard=True))



@dp.message(F.content_type == ContentType.WEB_APP_DATA)
async def parse_data(message: types.Message):
    data = json.loads(message.web_app_data.data)
    await message.answer(f'<b>{data["title"]}</b>\n\n<code>{data["desc"]}</code>\n\n{data["text"]}', parse_mode=ParseMode.HTML)
    


async def main():
    await bot.delete_webhook(drop_pending_updates=True)
    await dp.start_polling(bot)
    


    
if __name__ == "__main__":
    asyncio.run(main())
