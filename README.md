# Project Purple Planet

A simple, clean and lightweight personal project and task manager.

<span align="center">

![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/davidsaulrodriguez/project-purple-planet)
[![Build Status](https://travis-ci.com/davidsaulrodriguez/project-purple-planet.svg?branch=main)](https://travis-ci.com/davidsaulrodriguez/project-purple-planet)
[![GitHub license](https://img.shields.io/github/license/davidsaulrodriguez/project-purple-planet)](https://github.com/davidsaulrodriguez/project-purple-planet)

---

[![GitHub issues](https://img.shields.io/github/issues/davidsaulrodriguez/project-purple-planet)](https://github.com/davidsaulrodriguez/project-purple-planet/issues)
[![GitHub forks](https://img.shields.io/github/forks/davidsaulrodriguez/project-purple-planet)](https://github.com/davidsaulrodriguez/project-purple-planet/network)
[![GitHub stars](https://img.shields.io/github/stars/davidsaulrodriguez/project-purple-planet)](https://github.com/davidsaulrodriguez/project-purple-planet/stargazers)
![GitHub contributors](https://img.shields.io/github/contributors/davidsaulrodriguez/project-purple-planet)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=davidsaulrodriguez_project-purple-planet&metric=bugs)](https://sonarcloud.io/dashboard?id=davidsaulrodriguez_project-purple-planet)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=davidsaulrodriguez_project-purple-planet&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=davidsaulrodriguez_project-purple-planet)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=davidsaulrodriguez_project-purple-planet&metric=security_rating)](https://sonarcloud.io/dashboard?id=davidsaulrodriguez_project-purple-planet)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=davidsaulrodriguez_project-purple-planet&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=davidsaulrodriguez_project-purple-planet)
![GitHub commits since latest release (by SemVer)](https://img.shields.io/github/commits-since/davidsaulrodriguez/project-purple-planet/latest/main)

</span>

## Table of Contents
 - [Description](#description)
 - [Screenshots](#screenshots)
 - [Dependencies](#dependdencies)
 - [Installation](#installation)
 - [Configuration](#configuration)
 - [Usage](#usage)
 - [Supported Versions](#supported-versions)
 - [Contributing](#contributing)
 - [Bugs and Issues](#bugs-and-issues)
 - [License](#license)

## Description

**Project Purple Planet** is a simple, clean and lightweight personal project and task manager built using NodeJS, Express, Materialize, MySQL, HandlebarsJS and Sequelize.

## Screenshots

**Coming Soon**

## Dependencies

**Project Dependencies**
 - "bcryptjs": "^2.4.3",
 - "dotenv": "^8.2.0",
 - "express": "^4.17.1",
 - "express-handlebars": "^5.2.0",
 - "express-session": "^1.17.1",
 - "gulp-live-server": "0.0.31",
 - "helmet": "^4.4.1",
 - "jquery": "^3.5.1",
 - "materialize-css": "^1.0.0-rc.2",
 - "mysql-import": "^5.0.21",
 - "mysql2": "^2.2.5",
 - "passport": "^0.4.1",
 - "passport-local": "^1.0.0",
 - "sequelize": "^6.5.0"

**Development Dependencies**

 - "del": "^6.0.0",
 - "eslint": "^7.19.0",
 - "gulp": "^4.0.2",
 - "gulp-autoprefixer": "^7.0.1",
 - "gulp-concat": "^2.6.1",
 - "gulp-minify": "^3.1.0",
 - "gulp-rename": "^2.0.0",
 - "gulp-sass": "^4.1.0",
 - "gulp-sourcemaps": "^3.0.0",
 - "nodemon": "^2.0.7"

## Installation

**Installation Requirements**

You will need [NodeJS][nodejs] installed for use with this project.

You will also need the latest version of [MySQL][mysql] or [MariaDB][mariadb] installed locally on your machine.

**Download**

[Download the zip][archive] or clone this project.

```shell
git clone https://github.com/davidsaulrodriguez/project-purple-planet.git
cd project-purple-planet/
```

**Install**

Now install the required dependencies with npm.

```shell
npm install
```

## Configuration

To configure this application for use, you should create a `.env` file with your database information. For convience, a sample enviroment variable file can be found in the root directory with the name of: `.env.example`.

## Usage

Before using this application you should create the **Project Purple Planet** database. You can do this by running:

```shell
npm run createDB
```
> This command will create three databases. A production database: `purple_planet`, A development database: `purple_planet_dev`, and a test database: `purple_planet_test`.

After creating the database, you should build the site assets (JavaScript, CSS, Images, etc..) or else things wont work or look pretty.

```shell
npm run build:assets
```
> _**If you are developing on this project, you should rebuild the assets anytime you make changes to client side files in the project or else those changes won't take effect when you are running the server.**_

After building the project assets and creating the database, you can start **Project Purple Planet** by running:

```shell
npm run start
```

Cleaning up the built assets and starting fresh is as simple as running:

```shell
npm run clean:build
```

## Supported Versions

Below is a list of the currently supported versions of this software.

> Note: This project will continue to be iterated on even after it's due date and presentation for my Coding Boot Camp.

| Release | Status            | Initial Release | Active LTS Start | Maintenance LTS Start | End of Life |
| :-----: | :---------------: | :-------------: | :--------------: | :-------------------: | :---------: |
| develop | Unstable          | - | - | - | - |
| v1  | :heavy_check_mark: | 2021-02-23 | 2021-08-23 | - | 2022-02-23 |
| v2  | :construction: | 2021-08-20 | 2022-02-20 | 2022-08-20 | 2023-08-20 |

You can view the Status Key Map and software support model [here][support].

## Contributing

Contributions are more than welcome! If you improve on this project, please feel free to share it by submitting a Pull Request.

Before contributing, be sure to check out the [CONTRIBUTING][contrib] and [Branching Model][branching] docs.

## Bugs and Issues

Found a bug? Having an issue with this app? [Open a new issue][issues] here.

## License

 This project and all of its source code is released and permissively licensed under the [BSD 2 Clause][license] license.

[archive]: https://github.com/davidsaulrodriguez/project-purple-planet/archive/main.zip
[mysql]: https://www.mysql.com/
[mariadb]: https://mariadb.org/
[nodejs]: https://nodejs.com
[support]: ./SLC.md
[contrib]: ./CONTRIBUTING.md
[branching]: ./docs/Branching_Model.md
[issues]: https://github.com/davidsaulrodriguez/project-purple-planet/issues/new/choose
[license]: ./LICENSE