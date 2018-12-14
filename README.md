SEO DEMO Application
========================

The "SEO Demo Application" for Loud Crowd IT. The instructions beloew were done on Windows.

Requirements
------------

  * PHP 7.1.3 or higher;
  * and the [usual Symfony application requirements][2].

Installation
------------

```bash
$ composer require symfony/web-server-bundle --dev
```
Needed to install vendor packages

Usage
-----

There's no need to configure anything to run the application. Just execute this
command to run the built-in web server and access the application in your
browser at <http://localhost:8000>:

```bash
$ cd seodemo
$ php bin/console server:run
```
