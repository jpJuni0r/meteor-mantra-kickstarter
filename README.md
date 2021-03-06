[![CircleCI](https://circleci.com/gh/warehouseman/meteor-mantra-kickstarter/tree/trunk.svg?style=svg)](https://circleci.com/gh/warehouseman/meteor-mantra-kickstarter/tree/trunk)  [![Dependency Status](https://david-dm.org/warehouseman/meteor-mantra-kickstarter/trunk/status.svg)](https://david-dm.org/warehouseman/meteor-mantra-kickstarter/trunk)  [![devDependency Status](https://david-dm.org/warehouseman/meteor-mantra-kickstarter/trunk/dev-status.svg)](https://david-dm.org/warehouseman/meteor-mantra-kickstarter/trunk?type=dev)  [![Join the chat at https://gitter.im/meteor-mantra-kickstarter/MeteorMantraKickStarter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/meteor-mantra-kickstarter/MeteorMantraKickStarter)  [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# Meteor Mantra Kickstarter

![screen register](https://github.com/warehouseman/meteor-mantra-kickstarter/blob/trunk/public/screens/users.collection.png)

### tl, dr!

This a starter app for Meteor developers who want to structure their work according to the [Mantra Specification](https://kadirahq.github.io/mantra/).

Please feel welcome to comment on any experience you have with it in the on going discussion [here](https://talk.mantrajs.com/) ( for reference, prior discussion venues are available [here](https://talk.mantrajs.com/) and, even earlier, [here](https://github.com/kadirahq/mantra/issues/3) )


### Features

You get :

* a thoroughly tested application from which to launch your application development
* [single command installation](https://github.com/warehouseman/meteor-mantra-kickstarter/blob/trunk/install_all.sh) of all dependencies and support services
* [single command build](https://github.com/warehouseman/meteor-mantra-kickstarter/blob/trunk/build_all.sh) of Android APK, with download from app menu bar.
* full [end to end, functional testing](https://github.com/warehouseman/meteor-mantra-kickstarter/blob/trunk/.e2e_tests/features/002_colors/addColor.feature) with [Chimp](https://chimp.readme.io/) and [Cucumber](https://cucumber.io/)
* continuous integration and test in [CircleCI](https://circleci.com/gh/warehouseman/meteor-mantra-kickstarter).  (Latest build result :: [![CircleCI](https://circleci.com/gh/warehouseman/meteor-mantra-kickstarter/tree/trunk.svg?style=svg)](https://circleci.com/gh/warehouseman/meteor-mantra-kickstarter/tree/trunk))
* [unit testing](https://github.com/warehouseman/meteor-mantra-kickstarter/blob/trunk/client/modules/core/containers/tests/post.js) with Mocha, Chai, Sinon
* client side **and** server side [logging](https://github.com/warehouseman/meteor-mantra-kickstarter/tree/trunk/lib/logging) to [Loggly](https://www.loggly.com/):
    * [logatim](https://github.com/sospedra/logatim): isomorphic multilevel logging, that feeds into
    * [winston](https://github.com/winstonjs/winston) server side transports
* [Mailgun ready](https://github.com/warehouseman/meteor-mantra-kickstarter/blob/trunk/server/methods/mail.js) password reset example
* several different CRUD examples, including
    * an isomorphic CRUD [module in a single NPM package](https://github.com/warehouseman/meteor-mantra-kickstarter/tree/trunk/.pkgs/mmks_widget), which contains all client **and** server elements
    * user management CRUD module: user registration, password reset, login, logout
* full [multi-level access control](https://github.com/warehouseman/meteor-mantra-kickstarter/blob/trunk/lib/access_control.js) authorizations:
    * levels: Owner, Administrator, Staff, Member, Customer, Registered
    * acts on: [menu items](https://github.com/warehouseman/meteor-mantra-kickstarter/blob/trunk/client/modules/layout/components/NavLeftContent.jsx#L40), React [components](https://github.com/warehouseman/meteor-mantra-kickstarter/blob/trunk/client/modules/_colors/components/_sidebar.jsx#L24) and server side [methods](https://github.com/warehouseman/meteor-mantra-kickstarter/blob/trunk/server/methods/_colors.js#L23)
* uses [mantra-core](https://github.com/mantrajs/mantra-core) modularization, with application wide state, composed in pure React JS components with [react-komposer](https://github.com/kadirahq/react-komposer) (Blaze is not used at all)
* [Astronomy v2](https://github.com/jagi/meteor-astronomy) model schema
* forms based development examples with:
    * [tcomb-form](https://github.com/gcanti/tcomb-form): for CRUD modules
    * [formsy-react](https://github.com/christianalfoni/formsy-react): for user login, registration and password forms. Also [formsy-react-components](https://github.com/twisty/formsy-react-components)
* [Flatly](https://bootswatch.com/flatly/) bootstrap theme module
* completely linted with eslint, with specs available to editors such as Sublime Text 3

### Getting started

My default development, test and run environment is a virtual machine running Xubuntu Xenial Xerus, with 12Gb of disk, 3Gb memory and 2 processors.

If you are in a disposable virtual machine with a recent fresh Ubuntu installation, you can follow the steps below more or less blindly. **Please, do NOT do this in a machine that has stuff you care about!**

1.  Pull in your GitHub SSH credentials from somewhere, for example a sister VM...

    ```
    pushd ~/.ssh;
    scp -r 192.168.122.xxx:/home/you/.ssh .;
    popd;

    ```

1.  Ensure dependencies are clean and up-to-date :

    ```
    sudo apt-get -y update && sudo apt-get -y upgrade && sudo apt-get -y dist-upgrade && sudo apt-get -y clean && sudo apt-get -y autoremove;

    ```

1.  Install and configure git :

    ```
    sudo apt -y install git;
    git config --global user.name "You Yourself";
    git config --global user.email "yourself.yourorg@gmail.com";
    git config --global credential.helper cache;
    git config --global credential.helper 'cache --timeout=36000';
    git config --global push.default simple;

    ```

1. Make a parent directory and step into it :

    ```
    mkdir -p ~/projects;
    cd ~/projects;

    ```

1. Clone our repository and step into it :

    ```
    git clone git@github.com:warehouseman/meteor-mantra-kickstarter.git;
    cd meteor-mantra-kickstarter;

    ```

1. Switch over to our branch :

    ```
    git checkout trunk;
    git branch # verify being on trunk;

    ```

1. Run the script to set up for development and testing (installs Java, NodeJS, Chimp, Meteor and the project's NodeJS package dependencies) :

    ```
    ./install_all.sh;

    ```

1. Prepare our `settings.json` :

    ```
    cp settings.json.example settings.json;
    nano settings.json;

    ```
    You'll need to go [get your Mailgun API key.](https://mailgun.com/app/dashboard) and [your Loggly domain token](https://www.loggly.com/),  then correct these settings :
    ```
    >   "HOST_URI": "localhost:3000",
    >   "MAILGUN_DOMAIN": "yourhost.yourpublic.work",
    >   "MAILGUN_KEY": "(As if I'm gonna to leave THAT lying around.)  A valid key has 36 characters and begins with 'key-'.",
    >   "LOGGLY_SUBDOMAIN": "yourwork",
    >   "LOGGLY_TOKEN": " ( not this either ) ",
    ```

    * Note : If you don't care whether password reset works, you don't need Mailgun.  In that case, you can use this as your API key ...  ```key-dead0dead0dead0dead0dead0dead000```.

1. Now we can run Meteor and explore at [http://localhost:3000](http://localhost:3000) :

    ```
    meteor --settings=settings.json;

    ```
    (The first time through, you may see it terminate with the message `killed`.  Just run it again.)

1. Open a **new** terminal window to run linting and unit-tests :

    ```
    cd ~/projects/meteor-mantra-kickstarter;
    npm test;

    ```
    A goodly portion of the client side is fully tested using the familiar tools Mocha, Chai and Sinon.

1. Open another terminal window and run acceptance tests :

    ```
    source ~/.profile; # if you have not yet logged out since running './install_all.sh'
    cd ~/projects/meteor-mantra-kickstarter;
    meteor npm run acceptance;

    ```
1. See the `scripts` section of `package.json` for details of other testing and setup commands.

1. Return to your original terminal window and build for Android :

    ```
    export KEYSTORE_PWD="obscuregobbledygook";
    export HOST_SERVER_NAME="http://moon.planet.sun:3000/";
    export ROOT_URL="${HOST_SERVER_NAME}";
    export YOUR_FULLNAME="You Yourself";
    export GITHUB_ORGANIZATION_NAME="YourOrg";

    ./build_all.sh;

    meteor run --mobile-server=${HOST_SERVER_NAME}  --settings=settings.json;

    ```

1. Debug in Android in a Xubuntu virtual machine :

    To see how to debug an Android app between two virtual machines watch [Meteor / CircleCI Tutorial -- Bonus - Debug your Android App in a Virtual Machine](https://www.youtube.com/watch?v=xB3wWvK5YT0&index=12&list=PLq7op4J183lXpGr79hjfQVQHB-saVqLBL)


### Other Notes

For my own use, I keep open at least 4 terminal windows, with these commands, ready to run :

1. For running Meteor

    ```
    cd projects/meteor-mantra-kickstarter/
    meteor --settings=settings.json
    ```

2. For running acceptance tests

    ```
    cd projects/meteor-mantra-kickstarter/
    meteor npm run acceptance
    ```

3. For checking changes in the database

    ```
    cd projects/meteor-mantra-kickstarter/
    meteor mongo
    # then
     db.users.findOne({ "emails.address" : "member@example.com" });
     db.getCollection("_colors").find({});
    ```

4. For searching for keywords in the code

    ```
    cd projects/meteor-mantra-kickstarter/
    grep -R --exclude=\*.{css,txt,min.js} --exclude-dir={.git,.meteor,node_modules} "key" -A 1
    ```

I tend to use the above commands daily.
To get quickly ready to work, I open this README page, open the four terminal windows and cut and paste into them.
