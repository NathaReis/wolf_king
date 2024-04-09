const routes = (address) => {
    switch(btn.innerHTML) {
        case 'Home':
            $iframe.src = address + 'home'
            break
        case 'Login':
            $iframe.src = address + 'login'
            break
        case 'Dash':
            $iframe.src = address + 'dash'
            break
    }
}