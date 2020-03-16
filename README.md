
<img src="web/assets/wrench_logo.png" width="100" />

## eduWRENCH

## Running the Application

Compile all simulator codes:

```
$ cd simulators/io_operations
$ ./build.sh
```

Start the backend server:

```
$ cd server
$ node app.js
```

Start the frontend application:

```
$ cd web
$ bundle exec jekyll serve
```

### Running with Docker

```
$ docker build --no-cache -t eduwrench .
$ docker run -p 80:4000 -p 3000:3000 -v <LOCAL_FOLDER_FOR_DATA_SERVER>:/home/wrench/eduwrench/data_server -d eduwrench
```

## Get in Touch

The main channel to reach the eduWRENCH team is via the support email:
[support@wrench-project.org](mailto:support@wrench-project.org).

**Bug Report / Feature Request:** our preferred channel to report a bug or request a feature is via
WRENCH's [Github Issues Track](https://github.com/wrench-project/eduwrench/issues).

## Funding Support

eduWRENCH has been funded by the National Science Foundation (NSF).

[![NSF Funding 20191][nsf-20191-badge]][nsf-20191-link]
[![NSF Funding 20192][nsf-20192-badge]][nsf-20192-link]

[nsf-20191-badge]:          https://img.shields.io/badge/NSF-1923539-blue
[nsf-20191-link]:           https://nsf.gov/awardsearch/showAward?AWD_ID=1923539
[nsf-20192-badge]:          https://img.shields.io/badge/NSF-1923621-blue
[nsf-20192-link]:           https://nsf.gov/awardsearch/showAward?AWD_ID=1923621
