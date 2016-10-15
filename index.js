document.body.addEventListener('mousedown', mousedown)
var contextmenu = document.getElementsByClassName('contextmenu')[0]
var menuList = document.getElementsByClassName('menuList')

for (var i = 0; i < menuList.length; i++) {
    menuList[i].addEventListener('mousedown', function() {
        var num = i
        return function (e) {
            console.log('menuList:', num)
            // menuList[num].addEventListener('contextmenu', prevent(e, menuList[num]))
        }
    }(), false)
}

function mousedown(e) {
    if (e.target.className && e.target.className === 'test') {
        if (e.button === 2) {
            console.dir(e.target.getBoundingClientRect())
            console.log('右键')
            document.body.addEventListener('contextmenu', prevent)
            var position = e.target.getBoundingClientRect()
            contextmenu.style.top = position.top + position.height + 5 + 'px'
            contextmenu.style.left = position.left + 'px'
            contextmenu.style.display = 'block'
        } else {
            contextmenu.style.display = 'none';
            if (e.button === 0) {
                console.log('左键')
            } else if (e.button === 1) {
                console.log('中键');
            }
        }
    } else {
        contextmenu.style.display = 'none'
    }
}

function prevent(e) {
    console.log('阻止右键菜单')
    e.preventDefault()
    document.body.removeEventListener('contextmenu', prevent)
}