import React from 'react';
import s from './Playlist.module.css'
import Iframe from 'react-iframe'

const Playlist = () => {
    return (
        <div className={s.playlist}>
            <h6 className={s.mainTitle}>My Spotify Playlist</h6>
            <div className={s.playlistFrame}>
                <Iframe style="border-radius:12px"
                        src="https://open.spotify.com/embed/track/08uum9NN8EtSfxDxKjZ2oq?utm_source=generator&theme=0"
                        width="100%" height="80" frameBorder="0" allowFullScreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"></Iframe>
                <Iframe style="border-radius:12px"
                        src="https://open.spotify.com/embed/track/4BSrwkCeSrip0YIHMfxSWP?utm_source=generator&theme=0"
                        width="100%" height="80" frameBorder="0" allowFullScreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"></Iframe>
                <Iframe style="border-radius:12px"
                        src="https://open.spotify.com/embed/track/64wa7frMHXsPzLRbdz058W?utm_source=generator&theme=0"
                        width="100%" height="80" frameBorder="0" allowFullScreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"></Iframe>
                <Iframe style="border-radius:12px"
                        src="https://open.spotify.com/embed/track/7wTbkEk9RfaQeKmMO2Iu6f?utm_source=generator&theme=0"
                        width="100%" height="80" frameBorder="0" allowFullScreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"></Iframe>
                <Iframe style="border-radius:12px"
                        src="https://open.spotify.com/embed/track/4UtuJd45McVnWcaXQi3Bon?utm_source=generator&theme=0"
                        width="100%" height="80" frameBorder="0" allowFullScreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"></Iframe>
            </div>
        </div>
    );
};

export default Playlist;