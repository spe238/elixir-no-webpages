# Getting Started

The following works on both MacOS and Linux. If you are on Windows, set up wsl and then follow along

## 1. Ensure that you have the nodejs installed (at least version 18)

#### 1. Install Node version manager
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```
or 
```zsh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | zsh
```

#### 2. Install NodeJS
```bash
nvm install --lts
nvm use --lts
```
#### 3. Enable pnpm
```bash
corepack enable
```

## 2. Clone this Repository and install the dependencies
```bash
git clone https://github.com/ELIXIR-NO/elixir-no-webpages.git
cd elixir-no-webpages
pnpm i
```

## 3. Launch the local dev environment
```bash
pnpm dev
```
You should now be able to open your browser and navigate the the URL of the dev server.
From this point, any change you make to your files will be immediately reflected in your browser.
In rare ocations, adding files to the project (images, static content etc) might not be seen by the dev server.
If you suspect such an event, simply kill the server with ```ctrl + c``` and restart it.
