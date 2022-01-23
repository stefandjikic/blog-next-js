---
title: 'Write your first app in JavaScript'
date: 'Jan 22, 2022'
description: 'In this blog post You will learn how to write your first app in JavaScript - Hello World :)'
cover_image: '/images/js-image.png'
category: 'JavaScript'
author: 'Stefan Dj'
author_image: '/images/stefan-profile.jpg'
---

**Sumary**: In this tutorial, you will learn about code editors, how to install and use Visual Studio Code and how to write your first app using JavaScript.

## JavaScript Code Editors

In order to write and edit JavaScript code, you can basically use any text editor, like Notepad or even Word. However, that is not a recommended option since it would take so much time to do some basic tasks.
Having that said, the best option here is to use some code editor.

Besides basic editing features, a JavaScript code editor provides you with syntax highlighting, autocomplete, and also allow you to debug your code.

Some popular JavaScript code editors are:

- Visual Studio Code
- Atom
- Notepad++
- Vim
- Sublime
- NetBeans

What code editor you're gonna chose it's up to you. I'll go with Visual Studio Code since it is my favorite one.

## Visual Studio Code

Visual Studio Code (Commonly referred as VS code) is a free and open-source code editor developed by Microsoft. It works across all platforms including macOs, Windows, and Linux.
VS Code includes built-in support for JavaScript, which includes IntelliSense, debugging, formatting, code navigation, and many other advanced language features.
To learn more about VS code and JavaScript, you can check out <a href="https://code.visualstudio.com/docs/languages/javascript" target="_blank" rel="noopener"><span>this link.</span> </a>

## Dowload and Instalation

To download Visual Studio Code, visit the following link:
<a href="https://code.visualstudio.com/download" target="_blank" rel="noopener">Download Visual Studio Code</a>

### macOS

To install the VS Code on macOS, follow these steps:

- Double-click on the downloaded archive to expands the contents.
- Drag Visual Studio Code.app to the Applications to make it available in the launchpad.

### Windows

To install the VS Code on Windows, follow these steps:

- Execute the installer from the downloaded file.
- Open the Visual Studio code.

#### Live Server

After installation, I would recommend installing a Live Server extension, which will allow you to launch a development local server with the hot reload feature for static pages, meaning that you don’t need to refresh the page to see the changes. 

To install the Live Server extension, follow these steps:

- Click the Extensions.
- Search for the Live Server and select the Live Server extension from the list.
- Click the Install button.

![live server extension](/images/vs-code/live-server.png)

## Writing Hello World

After you successfully installed VS Code, you can now create your first Hello World App.

First, create a new folder and open it with VS Code. After that, click on the document icon to create a new file and name it `index.html`.

![visual studio code](/images/vs-code/1-vs-code.png)

Then, go to the code editor section, type exclamation mark `!` and press Enter. This is a shortcut for generating boilerplate code for creating your web page.
It should look something like this

![visual studio code](/images/vs-code/2-vs-code.png)

When you save your changes, you will be able to run your page using the Live Server extension.

Just click on the **Go Live** link at the bottom of VS Code window or right-click on your code editor section and press **`Open With Live Server`**.

Now, your default browser should open, and load the page. As you can see the page is blank, and that's ok since we didn't create anything.

Now, there are two ways you can include JavaScript in your HTML file.
First is to create a new file with the `.js` extension, for example, `app.js`, and then link it at the end of the `<body>` tag.

All your JavaScript code would go there. This is also a recommended way.

Example:

```

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

  <script src="./app.js"></script>
</body>
</html>
```

The other way is opening and closing the `<script>` tag in your HTML `<body>` tag and writing your code there. We'll use this approach since our app is fairly simple.

```

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

  <script>
  // Write js code here
  </script>
</body>
</html>
```


Now, in the `<script>` tag, type the following line of code `alert('Hello World')` and reload your page. There you go! The alert window should prompt with the Hello World text.
