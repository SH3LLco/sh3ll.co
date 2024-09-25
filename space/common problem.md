# Why build this site?
To attempt to solve an organizational problem in technical knowledge bases and to give back to the cyber community. A bonus is that i’ll learn how to take good notes 😉.

# The problem example.
Have you ever visited a site such as [HackTricks](https://book.hacktricks.xyz/) and found yourself lost? Many times, while trying to solve a Capture-The-Flag challenge or learn a new topic in Cybersecurity, I find that the way many of these sites are organized does not seem to be congruent. Sometimes, it’s just hard to find information. It’s not their fault, nor is it a massive problem when you have the ability to search content. It becomes a problem when you don’t know what to search for and the content is all over the place. For example, on Hacktricks, why is Linux Privilege Escalation under Linux Hardening? That might have made sense due to their strict organizational structure, but not to me, an end user, trying to find information on their site. Merging offensive topics under the same category as a defensive topic confuses me. Or another example; where do you classify reverse engineering? Is it offensive because you can use it to buffer overflow or crack software? Defensive because you use it for malware analysis? Should it go under development since you need to understand assembly? This is the exact problem. Where do we classify these topics that make the most sense? The answer is it should be under all of them, where it makes sense of course. 

I’m not trying to single-out Hacktricks here. They are a fantastic knowledge base and I use their content quite often. I use them as an example, but I see this problem across the board. 

This is what started me on my Journey to find a solution. 

# The Solution.
I have no clue what the solution is LOL. I’ve been trying to design one and have come up short every time. What I’ve found, though, is that cybersecurity information can’t be put in a box or a folder. It’s more like a spiderweb. 

I tried really hard to use Obsidian Publish and some whacky combination of custom plugins to run inline javascript on my notes to generate markdown tables using the dataview API. The goal was to automate these queries and have the notes organize themselves so to speak. This was a massive fail. I concluded that I had to build my own platform to solve this issue. That is until I found SilverBullet. SilverBullet doesn’t do everything I need, but it does enough and it is extensible so I can create my own plugins and do python automation on the backend.

# Will I succeed? 
Probably not, but I’m going to try. In the worst-case scenario, I’ll have a pretty decent knowledge base. 
