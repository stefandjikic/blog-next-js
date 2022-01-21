---
title: 'How to view your SSH keys'
date: 'Jan 15, 2022'
description: 'Walkthrough on how to view your SSH certificates on macOS, Windows and Linux'
cover_image: '/images/internet-ssh.jpg'
category: 'General'
author: 'Stefan Dj.'
author_image: '/images/stefan-profile.jpg'
---

You recently bought a new machine, did the setup of everything including the SSH key, and just called the day off. Now, a week later you want to clone a repo from GitHub, and suddenly... Bam! Access denied! You forgot to add your SSH key to the GitHub account.

Whether is this or you just want to check your SSH certificates, no worries! I'll show you the easy steps on how to do this, so you can be back on the track!

## Requirements

The only requirements for this are acces to your machine (Linux, macOS, or Windows) and the SSH key you created.
If you haven't created your SSH key pair yet, you can do it it with the following command:

`ssh-keygen`

This command will generate your SSH certificate, which includes both public and private keys. The public key is the one you use to connect with your GitHub account or to send it to any other server that requires SSH authentication.

## How to view your SSH public key on macOS 

In order to view your keys on macOS, you need to open your terminal and type the following command:

`cat ~/.ssh/id_rsa.pub`

Or you can look up directly in the users folder:

`cat /Users/USER/.ssh/id_rsa.pub`

Where USER is your macOS profile. 

If you type any of the commands from above, your SSH public key will be printed out in the terminal.

If you want to copy the contents of the SSH key directly to the clipboard, without displaying the key, you can use the following command:

`cat ~/.ssh/id_rsa.pub | pbcopy`

## How to view your SSH public key on Windows 

On Windows, open up a terminal window and type the following command:

`type C:\Users\USER\.ssh\id_rsa.pub`

Where USER is the name of your user. 

You can also do something similar to what we did on macOS - copying the SSH public key directly to the clipboard, by typing following command:

`type  C:\Users\USERNAME\.ssh\id_rsa.pub | clip`


## How to view your SSH public key on Linux

Viewing your keys on Linux can be done in similar fashion as macOS, since the  Linux is unix-like operating system. You can just type the following command:

`cat ~/.ssh/id_rsa.pub`

