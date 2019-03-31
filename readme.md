
# Division 2 Stat Overlay
Using [Tabwire/TheDivisionTab-API](https://github.com/Tabwire/TheDivisionTab-API) a unoffical api for The Division 2 and allows for 
This overlay will allow for stats like;
- Total Time
- PvE Level
- DZ Level
- Gear Score
- Specializations with Emblem 
- NPC Kills
- DZ Kills

*These are subject to change at anytime*
*Please repect Tabwire's API.* 
## Requirements
 - You will need a **Web Server** 
>  **xampp** - Own PC/Server
>
>  **Google Cloud** - Normally have $200 of free credit which last a year
>
>  **A Cheap VPS/Web Host** - Look around  *Nothing powerful is needed*

## Setup
 **/config/config.json**;
 - Open the config  folder and open **config.json**
    - Replace **[name]** with your **uplay**|**xbl**|**psn** and change platform  respectively name.
    - Save & move/upload your files to your web server.
## Usage
 - Navigate to where ever you placed the file on your web directory
   **[Server ip]/d2stats** or **localhost/d2stats/**  
- In OBS create a new Browser Source set the URL like above.
    - Max Width & Height 1920x400
    - Min Width & Height 800x250
   
Every 10 minutes the overlay will reach out to the API and check for updates before been displayed.
*Please note, that it can sometimes take up to a hour for api data to refresh. This is something that has been brought up on [The Division Tab Github Page](https://github.com/Tabwire/TheDivisionTab-API/issues/3)
## To Do
 - [ ] Easier to change stats via config file
 - [ ] Better layout/graphics
 - [ ] Animations - Using Greensock or Animate.css
 - [x] PID gathered via entering uplay name (PC) in URL

## Licence

Copyright 2019 JaL Design

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
> ## Affiliation
>    Division 2 Stat Overlay or TheDivisionTab API is in no way shape or form affiliated with Ubisoft and its partners. Any "The Division" name, logos and/or images are registered trademarks of Ubisoft.

