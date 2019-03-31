# Division 2 Stat Overlay

**[Setup](#setup) | [Usage](#usage) | [Licence](#licence)**


Using [@Tabwire](https://github.com/Tabwire/TheDivisionTab-API) TheDivisionTab API a unoffical api for The Division 2 and allows for;

> - Total Time
> - PvE Level
> - DZ Level
> - Gear Score
> - Specialization's with Emblem 
> - NPC Kills
> - DZ Kills
> - & More!

This overlay will allow for stats directly from that API.

Because you can ping off the API it allows for emblems for Specialization's to change dynamically (no needing to reload) although this depends on how quickly the api updates.


## Examples in use
![examples](https://i.imgur.com/aQJy6jr.png)
Left; My Account | Center: Friends account with different Specialization | Right: Friend with No Skill Score Yet
## Requirements
 - You will need a **Web Server** 
>  **xampp** - Own PC/Server
>
>  **Google Cloud** - Normally have $200 of free credit which last a year
>
>  **A Cheap VPS/Web Host** - Look around  *Nothing powerful is needed*

## [Setup](#setup)

**Easy Way**
### Hosted: 
>Open https://jalp.xyz/div2stats/?username=[username]&platform=[platform] in >OBS or your streaming software and create a browser source. 
>[Follow usage for browser sizes etc](#usage)

### Self-hosted: 
>Download the [latest master release here](https://github.com/JaLDesign/Division-2-Stats-Overlay/archive/master.zip) (recommended)
>Save & move/upload your files to your web server.
>- *Its recommend that you create a new sub directory/folder outside of www/htdocs in the case of this example* **/d2stats**
 

## [Usage](#usage)

 - Navigate to where ever you placed the files on your web directory 
> [Server ip]**/d2stats/?username=[username]&platform=[platform]**
> *Replace the brackets with your **uplay**|**xbl**|**psn** username and change the **[username]** & **[platform]** with the respective information.*

- In OBS create a new Browser Source set the URL like above.
    - Max Width & Height 1920x400
    - Min Width & Height 800x250
   
Every 10 minutes the overlay will reach out to the API and check for updates before been displayed.

*Please note, that it can sometimes take up to a hour for api data to refresh. This is something that has been brought up on [The Division Tab Github Page](https://github.com/Tabwire/TheDivisionTab-API/issues/3)*

### [Licence](#licence)
Copyright 2019 JaL Design
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
> ## Affiliation
>    Division 2 Stat Overlay or TheDivisionTab API is in no way shape or form affiliated with Ubisoft and its partners. Any "The Division" name, logos and/or images are registered trademarks of Ubisoft.

