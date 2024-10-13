# Contributing

Thanks for your willingness to contribute! Please make sure to check with
[me](https://x.com/andrecasaldev) before doing a bunch of work on something.

## Project setup

If you do need to set the project up locally yourself, feel free to follow these
instructions:

### System Requirements

- [Node.js](https://nodejs.org/) >= 20.0.0
- [npm](https://npmjs.com/) >= 8.18.0
- [git](https://git-scm.com/) >= 2.38.0

### Setup steps

1.  Download and unzip de repo
2.  Copy `.env.example` into `.env`
3.  Run `npm install && npm run setup -s` to install dependencies and run
    validation
4.  Create a branch for your PR with `git checkout -b pr/your-branch-name`

> Tip: Keep your `main` branch pointing at the original repository and make pull
> requests from branches on your fork. To do this, run:
>
> ```
> git remote add upstream https://github.com/andrecasal/launch-fast-stack.git
> git fetch upstream
> git branch --set-upstream-to=upstream/main main
> ```
>
> This will add the original repository as a "remote" called "upstream," Then
> fetch the git information from that remote, then set your local `main` branch
> to use the upstream main branch whenever you run `git pull`. Then you can make
> all of your pull request branches based on this `main` branch. Whenever you
> want to update your version of `main`, do a regular `git pull`.

If the setup script doesn't work, you can try to run the commands manually:

```sh
git clone <your-fork>
cd ./launch-fast-stack

# copy the .env.example to .env
#   everything's mocked out during development so you shouldn't need to
#   change any of these values unless you want to hit real environments.
cp .env.example .env

# Install deps
npm install

# setup database
prisma migrate reset --force

# Install playwright browsers
npm run test:e2e:install

# run build, typecheck, linting
npm run validate
```

If that all worked without trouble, you should be able to start development
with:

```sh
npm run dev
```

Open up `http://localhost:3000` and rock on 🤘

## Help Needed

Owning our code gives us the power to customize it to our exact needs. However,
offloading maintenance onto external dependencies someone else manages can bring
about significant time savings. Plus these people can be experts in that niche
and ensure higher quality code than we could write ourselves.

There may be bits of code in Launch Fast that could benefit from
externalization. Feel free to take any code from within this project and turn it
into an open-source library (appropriate attribution is appreciated). Then come
back and make a PR to use your new library. But please note that the actual
adoption of your library is not guaranteed. Offloading maintenance and
adaptability is a delicate balance.
