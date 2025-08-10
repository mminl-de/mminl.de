const featuresTexts = [
    `$ pakt -S rustup +dev +cli chromium +core
$ pakt-dry +dev
dev:
rustup
$ pakt-dry +cli
cli:
rustup
$ pakt-dry +core
core:
chromium`,
    `$ cat ~/.local/share/pakt/dev
rustup
$ echo "# temporary" >> ~/.local/share/pakt/dev
$ echo "npm" >> ~/.local/share/pakt/dev
$ cat ~/.local/share/pakt/dev
rustup
# temporary
npm`,
    // TODO LATER update with proper config file syntax
    `$ pakt install express +packages
<div class="code decreasing-opacity">
added 69 packages in 4s

14 packages are looking for funding
  run \`npm fund\` for details</div>
$ pakt-dry +packages
packages:
express`,
    `$ pakt-dry i typescript rustup zig +languages
$ pakt-dry +languages
languages:
typescript
rustup
zig
$ pakt-sync i +languages
<div class="code decreasing-opacity">looking for conflicting packages...

Package (3)       Old Version  New Version  Net Change

extra/rustup      1.28.1-1     1.28.1-1       0.00 MiB
extra/typescript  5.8.2-1      5.8.2-1        0.00 MiB
extra/zig         0.13.0-2     0.13.0-2       0.00 MiB

Total Installed Size:  191.82 MiB</div>`,
    `$ pakt -S htop
$ pakt-dry +default
default:
rustup
chromium
typescript
zig
htop
`
]

const featuresTextEl = document.getElementById("features")

function setFeaturesText(n) {
    featuresTextEl.innerHTML = featuresTexts[n]
}

const curlCommand = document.getElementById("curl-command").innerHTML

function copyCurlCommand() {
    let textArea = document.createElement("textarea")
    textArea.value = curlCommand
    document.body.appendChild(textArea)

    textArea.select()
    document.execCommand("copy")
    document.body.removeChild(textArea)
}
