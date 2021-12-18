const texthere = document.getElementById('texthere')
let tempEl

function bootScreen(){
    let textList = [
        '/dev/sda5: recovering journal',
        '/dev/sda5: clean, 152451/238822 files,  389121/393124 blocks',
        `[<red>FAILED</red>] Failed to start Load Kernel Modules.
See 'systemctl status systemd-modules-load.service' for details.`,
        '         Mounting Kernel Configuration File System...',
        '         Starting Apply Kernel Variables... ',
        '         Mounting FUSE Control File System...',
        '[  <green>OK</green>  ] Mounted Kernel Configuration File System.',
        '[  <green>OK</green>  ] Mounted FUSE Control File System.',
        '[  <green>OK</green>  ] Started Create Static Device Nodes in /dev.',
        '         Starting udev Kernel Device Manager...',
        '[  <green>OK</green>  ] Reached target Local File Systems (Pre).',
        '[  <green>OK</green>  ] Started Apply Kernel Variables.',
        '[  <green>OK</green>  ] Started udev Kernel Device Manager.',
    ]

    for(let i = 0;i<textList.length;i++){
        setTimeout(()=>{
            tempEl = document.createElement('pre')
            tempEl.innerHTML = textList[i]
            texthere.appendChild(tempEl)
        }, i*1900)
    }
}

function archStart(){
    texthere.innerHTML = '';
    let newPre = 
`Arch Linux 5.8.12-arch-1 (tty1)

To install <blue>Arch Linux</blue> follow the installation guide:
https://wiki.archlinux.org/title/Installation_guide

For Wi-Fi, authenticate to wireless network using the <purple>iwctl</purple> utility.
Ethernet and Wi-Fi connections using DHCP should work automatically.

After connecting to the internet, the installation guide can be accessed
via the convenience script <purple>Installation_guide</purple>.
`
    tempEl = document.createElement('pre')
    tempEl.innerHTML = newPre

    texthere.appendChild(tempEl)
}

function createShell(){
    texthere.innerHTML += `<pre>

<term id="term"><red>root</red>@arch~# </term>_
    <pre>`
}

function typeNgn(){
    let str = "ngn"

    for(let i = 0;i<str.length;i++){
        setTimeout(()=>{
            let term = document.getElementById('term')
            term.innerHTML += str[i]
        }, (i*120)+28000)
    }
}

function runNgn(){
    let newPre = `
Run the code? <term id="term2"></term>_
`

    tempEl = document.createElement('pre')
    tempEl.innerHTML = newPre

    texthere.appendChild(tempEl)
}

function finalType(){
    setTimeout(()=>{
        let term = document.getElementById('term2')
        term.innerHTML += 'y'
    }, 30000)
}

bootScreen()

setTimeout(()=>{
    archStart()
}, 24700)

setTimeout(()=>{
    createShell()
}, 26700)

typeNgn()

finalType()

setTimeout(()=>{
    runNgn()
}, 29000)

setTimeout(()=>{
    location.href = "/main.html"
}, 32000)