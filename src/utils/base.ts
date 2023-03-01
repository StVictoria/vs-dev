export const handleAppLoaded = () => {
    const loader = document.getElementsByClassName('preloader')[0]
    loader.classList.remove('preloader_show')
    setTimeout(() => {
        if (loader) loader.remove()
    }, 1000)
}

const generateGreeting = (isEng: boolean, time: number) => {
    if (time > 5 && time < 11) return (isEng ? 'Good morning' : 'Доброе утро') + '! ☀️'
    if (time > 11 && time < 16) return (isEng ? 'Have a nice day' : 'Хорошего дня') + '! 🙂'
    if (time > 16 && time < 22) return (isEng ? 'Good evening' : 'Хорошего вечера') + '! 🌓'
    return (isEng ? 'Good night' : 'Доброй ночи') + '! 🌙'
}

export const generateConsoleMessage = (isEng: boolean) => {
    const time = new Date().getHours()
    const wishMessage = generateGreeting(isEng, time)
    const aboutProject = (isEng ? 'Project code you can find here: ' : 'Код проекта Вы можете посмотреть здесь: ') + 'https://github.com/StVictoria/vs-dev'
    let msg = `%c ${isEng ? 'Wow, who do I see' : 'Ого, кого я вижу'} 👀 \n ${wishMessage} \n ${aboutProject}`
    let styles = [
        'font-size: 1.4vw',
        'font-family: monospace',
        'background: white',
        'display: inline-block',
        'color: black',
        'padding-top: 0.6vw',
    ].join(';')
    console.log(msg, styles)
}