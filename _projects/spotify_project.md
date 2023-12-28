---
layout: page
title: Spotify Listening Stats
description: See your top artists or tracks over a given time period
img: assets/img/spotify_logo.png
importance: 1
---

<button style = "border-radius: 5px; padding: 8px 18px; background-color: white; font-family: sans-serif; font-size: 20px; float: left" onclick="window.open('https://musicdata.streamlit.app/', '_blank');">
    Visit
</button>

<button style = "border-radius: 5px; padding: 8px 18px; background-color: white; font-family: sans-serif; font-size: 20px; float: left; margin-left: 10px" onclick="window.open('https://github.com/korinagoldsmith/spotify', '_blank');">
    Code
</button>

<br>
<br>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/spotify_webpage.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Sign in to your Spotify account and see your stats!
</div>

A fun web app where the user can choose to see their top 10, 20, or 50 artists/tracks on Spotify over the past month, 6 months, or of all time. I made this app using Streamlit and Spotify API.

<div style = "font-weight: bold; font-size: 25px"> Technologies: </div>
- Python 
- Streamlit
- GitHub
