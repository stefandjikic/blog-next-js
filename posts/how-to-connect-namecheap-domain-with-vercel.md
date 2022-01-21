---
title: "How to connect Namecheap domain withh Vercel"
date:  "November 23, 2021"
description: 'In this post learn how to add Namecheap domain to Vercel'
category: "General"
cover_image: '/images/computer-ssh.jpg'
author: "Stefan Dj."
author_image: '/images/stefan-profile.jpg'
---

## Setting up Vercel

Login in to your Vercel dashboard and go to the **Domains** tab. There you will see the options to buy, add, and transfer a domain. In this case, since we already have a domain over at Namecheap, will go ahead and select the **add** option. 

![vercel domain](/images/domain-post/1-vercel.png)

After that, a modal will pop up asking you to select a project to which the domain will be connected. After the project is selected, you will be able to click continue. 

![vercel domain modal](/images/domain-post/2-vercel.png)

Another modal will pop up and ask you to enter the domain that you would like to add to your project. 

Once you input a valid domain - your Namecheap domain, you will be taken to the domains page, and there you can see your newly added domain. Probably you will also see an error stating Invalid Configuration. This is because you still need to set up Namecheap to resolve to Vercel's servers using DNS records.

![vercel dns records](/images/domain-post/3-vercel.png)

Here you can use both the A Record or Nameseveres tab. I'll go with the second option. So after you click on **Nameservers**, you just need to copy these addresses so you can paste them on provided fields in your Namecheap dashboard.

![vercel nameservers](/images/domain-post/4-vercel.png)


## Setting up Namecheap

Now that you have configured Vercel you'll need to configure Namecheap to complete the process.

When you log in to your Namecheap account go to Domain Lists on the sidebar, select the domain you want to configure, and click on **Manage**.

Now find the **NAMESERVERS** sections, click on the dropdown, and select **Custom DNS**. There you will be able to paste the Vercel's Nameserver addresses. Once that is done you can click on the green checkmark and you are good to go. 👌 

![namecheap setup](/images/domain-post/5-namecheap.png)