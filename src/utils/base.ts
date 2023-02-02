export const handleAppLoaded = () => {
    const loader = document.getElementsByClassName('preloader')[0]
    loader.classList.remove('preloader_show')
    setTimeout(() => {
        if (loader) loader.remove()
    }, 1000)
}