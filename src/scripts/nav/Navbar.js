import { renderApp } from "../main.js"
// import { getMessages, setMessageDisplay } from "./data/provider.js"
// original site imports {clearFilters} from same module

export const getNavBar = () => {
    let html = `<nav class= "navigation">
    <div class= "navigation__item navigation__icon"> <img id= "logo" src= "../images/pb.png" alt= "logo of peanut butter jar"/></div>
    <div class= "navigation__name" id="title">GiffyGram</div>
    <div class= "navigation__item navigation__message"><img id= "directMessageIcon" src= "../images/fountain-pen.svg" alt= "Direct message"/>
    <div class= "notification__count id="readNewMessages">0</div>
    </div>

    <div class= "navigation__item navigation__logout"> <button id="logout" class="fakeLink">Logout</button></div>
    </nav>`

    return html
}

// click icon to re-render app
document.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.id === "logo") {
            window.location.reload();
        }
    }
)

// click site title to re-render app
document.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.id === "title") {
            window.location.reload();
        }
    }
)

// event listener for logout - clear temp state/go to login 
document.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.id === "logout") {
            let user = parseInt(localStorage.getItem("gg_user"))
            if (user >= 0) {
                localStorage.clear();
                document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
            }
        }

    }
)


/* event listener for composing DM ---
document.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.id === "directMessageIcon") {
           ***call exported write-direct-message function***
        }
    })
*/

/* event listener for reading new DMs ---
document.addEventListener(
        "click",
        (clickEvent) => {
            if (clickEvent.target.id === "readNewMessages") 
            ???
        }
    )
*/
// event listener to update new DMs counter
/*
document.addEventListener(
    "change",
    (changEvent) => {
        if state change has recipientId that's the same as current user id 
        for each occurence of current user === recipientId add one,
        return updated html text in DM counter to reflect integer total from ^^^ above addition
        ***copied from main.js: 
        const user = parseInt(localStorage.getItem("gg_user"))
        if (user) {
                applicationElement.innerHTML = GiffyGram()
            }
        ***
    }
)







/* ORIGINAL SITE
<div\class=\
notification__count\
>', 'querySelector', '1onsVkd', '1030817lrhTQE', 'length', 'stateChanged', '27AvxxJC', 'logout', '268341JycpmJ', 'addEventListener', 
'59680CuVJgI', 'logo', '738692ZBvZjr', '3vWTNzg', '1tbvETe', 'click', 'gg_user', 'dispatchEvent', '739054EeUGja', 'contains', '
notification__count', '773zshkgT', '28683wKDySm', 'target', '\\</div>\

</div>\<div\class=\
navigation__item\navigation__logout\
>\\<button\id=\
logout\
\class=\
fakeLink\
>Logout</button>\</div></nav>'];


const a17_0x59ed = function(_0x88c271, _0x25f7e9) {
    _0x88c271 = _0x88c271 - 0x1e0;
    let _0x596e03 = a17_0x596e[_0x88c271];
    return _0x596e03;
};

const a17_0x2d5362 = a17_0x59ed;
(function(_0x31ce40, _0x371371) {
    const _0x33194a = a17_0x59ed;
    while (!![]) {
        try {
            const _0x5998d7 = parseInt(_0x33194a(0x1e2)) * -parseInt(_0x33194a(0x1f9)) + -parseInt(_0x33194a(0x1fa)) * -parseInt(_0x33194a(0x1ea)) + parseInt(_0x33194a(0x1ec)) * parseInt(_0x33194a(0x1f1)) + -parseInt(_0x33194a(0x1f6)) + -parseInt(_0x33194a(0x1ee)) * -parseInt(_0x33194a(0x1f2)) + -parseInt(_0x33194a(0x1f0)) * parseInt(_0x33194a(0x1e6)) + parseInt(_0x33194a(0x1e7));
            if (_0x5998d7 === _0x371371)
                break;
            else
                _0x31ce40['push'](_0x31ce40['shift']());
        } catch (_0x4061ef) {
            _0x31ce40['push'](_0x31ce40['shift']());
        }
    }
}(a17_0x596e, 0x7bac4));

import {clearFilters, getMessages, setMessageDisplay} from '../data/provider.js';

document['addEventListener']('click', _0x24db16=>{
    const _0x5a550f = a17_0x59ed;
    _0x24db16[_0x5a550f(0x1e0)]['id'] === _0x5a550f(0x1eb) && (localStorage[_0x5a550f(0x1e3)](_0x5a550f(0x1f4)),
    document[_0x5a550f(0x1e5)]('.giffygram')[_0x5a550f(0x1f5)](new CustomEvent('stateChanged')));
}
),

document['addEventListener'](a17_0x2d5362(0x1f3), _0xadf88a=>{
    const _0x42170f = a17_0x2d5362;
    _0xadf88a[_0x42170f(0x1e0)]['classList'][_0x42170f(0x1f7)](_0x42170f(0x1f8)) && (setMessageDisplay(!![]),
    document[_0x42170f(0x1e5)]('.giffygram')[_0x42170f(0x1f5)](new CustomEvent(_0x42170f(0x1e9))));
}
),

document[a17_0x2d5362(0x1ed)](a17_0x2d5362(0x1f3), _0x564b5e=>{
    const _0x58ecb6 = a17_0x2d5362;
    _0x564b5e['target']['id'] === _0x58ecb6(0x1ef) && (clearFilters(),
    document[_0x58ecb6(0x1e5)]('.giffygram')['dispatchEvent'](new CustomEvent(_0x58ecb6(0x1e9))));
}
);

export const NavBar = ()=>{
    const _0xe2a28d = a17_0x2d5362
      , _0xf9811c = getMessages();
    return _0xe2a28d(0x1e4) + _0xf9811c[_0xe2a28d(0x1e8)] + _0xe2a28d(0x1e1);
}
;
*/