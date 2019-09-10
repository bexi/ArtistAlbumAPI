
let invalid_mbid = '000';
let mbid_not_artist = 'fdeebee4-b749-31c4-8a9b-d8d25cd9a43a';
let valid_mbid_nirvana = '5b11f4ce-a62d-471e-81fc-a69a8278c7da';
let valid_mbid_temptations  = 'd8df96ae-8fcf-4997-b3e6-e5d1aaf0f69e';
let mbid_hakan = '6ee8668b-b4e1-48cf-ba25-a6f7c8bf864d';
let mbid_cash = 'd43d12a1-2dc9-4257-a2fd-0a3bb1081b86';
let mbid_rammstein = 'b2d122f9-eadb-4930-a196-8f221eeb0c66';

// the temptations - NOT UPDATED
let description_temptations = `<p><b>The Temptations</b> are an American vocal group who released a series of successful singles and albums with Motown Records during the 1960s and 1970s. Their work with producer Norman Whitfield, beginning with the Top 10 hit single \"Cloud Nine\" in October 1968, pioneered psychedelic soul, and was significant in the evolution of R&amp;B and soul music. The band members are known for their choreography, distinct harmonies, and dress style. Having sold tens of millions of albums, the Temptations are among the most successful groups in popular music.</p><p>Featuring five male vocalists and dancers (save for brief periods with fewer or more members), the group formed in 1960 in Detroit, Michigan under the name <i>The Elgins</i>. The founding members came from two rival Detroit vocal groups: Otis Williams, Elbridge \"Al\" Bryant, and Melvin Franklin of Otis Williams &amp; the Distants, and Eddie Kendricks and Paul Williams of the Primes. In 1964, Bryant was replaced by David Ruffin, who was the lead vocalist on a number of the group's biggest hits, including \"My Girl\" (1964), \"Ain't Too Proud to Beg\" (1966), and \"I Wish It Would Rain\" (1967). Ruffin was replaced in 1968 by Dennis Edwards, with whom the group continued to record hit records such as \"Cloud Nine\" (1969) and \"Ball of Confusion (That's What the World Is Today)\" (1970). The group's lineup has changed frequently since the departures of Kendricks and Paul Williams from the act in 1971. Later members of the group have included singers such as Richard Street, Damon Harris, Ron Tyson, and Ali-Ollie Woodson, with whom the group scored a late-period hit in 1984 with \"Treat Her Like a Lady\".\n</p><p>Over the course of their career, the Temptations released four <i>Billboard</i> Hot 100 number-one singles and fourteen R&amp;B number-one singles.  Their music has earned three Grammy Awards. The Temptations were the first Motown recording act to win a Grammy Award - for \"Cloud Nine\" in 1969 - and in 2013 received the Grammy Lifetime Achievement Award. Six of the Temptations (Edwards, Franklin, Kendricks, Ruffin, Otis Williams and Paul Williams) were inducted into the Rock and Roll Hall of Fame in 1989. Three classic Temptations songs, \"My Girl\", \"Just My Imagination (Running Away with Me)\", and \"Papa Was a Rollin' Stone\", are among The Rock and Roll Hall of Fame's 500 Songs that Shaped Rock and Roll. The Temptations were ranked at number 68 on <i>Rolling Stone</i> magazine's list of the 100 Greatest Artists of all time.\n</p><p>As of  2018, the Temptations continue to perform with founder Otis Williams in the lineup (Williams owns rights to the Temptations name).\n</p>`;
// nirvana
let description_nirvana = `<p class=\"mw-empty-elt\">\n</p>\n\n<p class=\"mw-empty-elt\">\n\n</p>\n<p><b>Nirvana</b> was an American rock band formed in Aberdeen, Washington, in 1987. It was founded by lead singer and guitarist Kurt Cobain and bassist Krist Novoselic.   Nirvana went through a succession of drummers, the longest-lasting and best-known being Dave Grohl, who joined in 1990. Though the band dissolved in 1994 after the death of Cobain, their music maintains a popular following and continues to influence modern rock and roll culture.\n</p><p>In the late 1980s, Nirvana established itself as part of the Seattle grunge scene, releasing its first album, <i>Bleach</i>, for the independent record label Sub Pop in 1989. They developed a sound that relied on dynamic contrasts, often between quiet verses and loud, heavy choruses. After signing to major label DGC Records, in 1991, Nirvana found unexpected mainstream worldwide success with \"Smells Like Teen Spirit\", the first single from their landmark second album <i>Nevermind</i> (1991), which sold over 30 million copies worldwide. Nirvana's sudden success popularized alternative rock, and Cobain found himself described as the \"spokesman of a generation\" and Nirvana the \"flagship band\" of Generation X.</p><p>Following extensive tours and the 1992 EPs <i>Incesticide</i> and <i>Hormoaning</i>, Nirvana released their third studio album, <i>In Utero</i> (1993), to critical acclaim and further chart success. Its abrasive, less mainstream sound challenged the band's audience, and has since sold over 15 million copies worldwide. Nirvana disbanded following the death of Cobain in 1994. Many various posthumous releases have been issued, overseen by Novoselic, Grohl, and Cobain's widow Courtney Love. The posthumous release <i>MTV Unplugged in New York</i> (1994) won the Grammy Award for Best Alternative Music Album in 1996.\n</p><p>Nirvana received various awards, including an American Music Award, Brit Award, Grammy Award, seven MTV Video Music Awards and two NME Awards. They have sold over 25 million records in the United States and over 75 million records worldwide, making them one of the best-selling bands of all time. Nirvana has also been ranked as one of the greatest music artists of all time, with <i>Rolling Stone</i> placing them at number 27 on their list of the 100 Greatest Artists of All Time in 2004, and at number 30 on their updated list in 2011. Nirvana was inducted into the Rock and Roll Hall of Fame in their first year of eligibility in 2014.\n</p>`;

let albums_nirvana = [
        {
            "title": "Incesticide",
            "id": "01cf1391-141b-3c87-8650-45ade6e59070",
            "image": "http://coverartarchive.org/release/47c08833-b19b-4855-82c3-53e3b697cfc5/23343773111.jpg"
        },
        {
            "title": "Wipeout",
            "id": "178b993e-fa9c-36d3-9d73-c5a8ba0c748d",
            "image": "http://coverartarchive.org/release/00681632-b53b-4aae-89c2-470150f33fe3/1898023189.jpg"
        },
        {
            "title": "Verse Chorus Verse",
            "id": "1a0edfef-ed8a-4664-8911-1ee69c39ae26",
            "image": "http://coverartarchive.org/release/dfdacd75-5bac-42ad-9d2c-7e4e5c9130ff/8190257927.jpg"
        },
        {
            "title": "Nevermind",
            "id": "1b022e01-4da6-387b-8658-8678046e4cef",
            "image": "http://coverartarchive.org/release/a146429a-cedc-3ab0-9e41-1aaf5f6cdc2d/3012495605.jpg"
        },
        {
            "title": "In Utero",
            "id": "2a0981fb-9593-3019-864b-ce934d97a16e",
            "image": "http://coverartarchive.org/release/cc8a35fc-ef70-40b5-b410-c1b5a029a866/1289816045.jpg"
        },
        {
            "title": "Down With Me",
            "id": "339ab911-1568-32cf-8997-f00a538208c9",
            "image": null
        },
        {
            "title": "It’s Better to Burn Out Than to Fade Away…",
            "id": "37b1659c-7560-34cd-8946-d6f3c5c9ad92",
            "image": "http://coverartarchive.org/release/2d54b895-2172-496d-af50-05183389e3c9/13747352060.jpg"
        },
        {
            "title": "Fatal Attraction",
            "id": "3c99a385-2ee7-339e-836e-97032a53cd23",
            "image": "http://coverartarchive.org/release/c490d7d3-a757-4460-b3ee-e284374876b8/1895458157.jpg"
        },
        {
            "title": "Seventh Heaven",
            "id": "3f09f97d-3b18-336c-9760-9ebb7df3497e",
            "image": "http://coverartarchive.org/release/76ea40bf-74b9-432d-8013-3d89a4062085/1895542588.jpg"
        },
        {
            "title": "Outcesticide II: The Needle & The Damage Done",
            "id": "584b7e62-d8b5-378e-986c-dfc78e1fc06e",
            "image": "http://coverartarchive.org/release/26a380df-307a-4649-be76-e6a451d00a27/1289827444.jpg"
        },
        {
            "title": "The Very Best",
            "id": "5bcaeba6-a532-3fa0-b540-75c09f70f759",
            "image": "http://coverartarchive.org/release/557393d4-74ae-4833-8c72-822ed1a10175/3803039786.jpg"
        },
        {
            "title": "Outcesticide III: The Final Solution",
            "id": "5dba01ed-b4e9-394e-a875-c7c2ff052133",
            "image": "http://coverartarchive.org/release/4692f1c2-c328-48cc-953f-2fdc7606f067/1289830285.jpg"
        },
        {
            "title": "B-Side Themselves",
            "id": "60c826fb-8853-3796-8ff2-16c35f362ec9",
            "image": null
        },
        {
            "title": "Pay to Play",
            "id": "6c44f64a-58e4-3e94-8458-788712f6c6aa",
            "image": "http://coverartarchive.org/release/ecdd8595-2cc8-4668-bf7b-00b0c83876d0/2222092024.jpg"
        },
        {
            "title": "Before We Ever Minded",
            "id": "85155291-222f-388a-a5f7-dcaa60b65afd",
            "image": "http://coverartarchive.org/release/20e0189f-d238-4bfd-8bb7-3514ddbd0662/23125699695.jpg"
        },
        {
            "title": "In Utero Demos",
            "id": "915dc49e-8203-31b8-bb19-ca5996a2b810",
            "image": null
        },
        {
            "title": "Secret Songs: The Unreleased Album",
            "id": "9a3ed295-7823-374e-95fe-c8ce79b6ca2a",
            "image": "http://coverartarchive.org/release/9e17f223-4e6d-4ea0-b169-4361e4ace865/1895502505.jpg"
        },
        {
            "title": "Outcesticide: In Memory of Kurt Cobain",
            "id": "9f42e883-12a4-3790-b3c1-0e2982f2d832",
            "image": "http://coverartarchive.org/release/63df3af7-00a1-40ee-84d5-38a7de780c7d/1289842287.jpg"
        },
        {
            "title": "Heart Shaped Box, Volume 2",
            "id": "bcbe3ddf-7901-315c-8282-f0e9d5b88285",
            "image": "http://coverartarchive.org/release/7b43c443-d8c1-4122-a248-6f87984ab30b/15443439796.jpg"
        },
        {
            "title": "Dark Emotion",
            "id": "e602b067-c9eb-31eb-bed0-80e4245d5d54",
            "image": null
        },
        {
            "title": "Outcesticide V: Disintegration",
            "id": "ee7695bc-fde5-3a84-8ebb-195fa5ee6c2d",
            "image": "http://coverartarchive.org/release/06dc53c9-5ea8-41f9-8479-ab82eb76dbf7/1289836171.jpg"
        },
        {
            "title": "Never the Same Thing",
            "id": "f19ee94e-afaf-37c8-a80a-413da055740d",
            "image": null
        },
        {
            "title": "Bleach",
            "id": "f1afec0b-26dd-3db5-9aa1-c91229a74a24",
            "image": "http://coverartarchive.org/release/7d166a44-cfb5-4b08-aacb-6863bbe677d6/1247101964.jpg"
        },
        {
            "title": "Grunge Is Dead",
            "id": "fdeebee4-b749-31c4-8a9b-d8d25cd9a43a",
            "image": "http://coverartarchive.org/release/7dd7f328-db0b-45a3-a2c9-3a0f9869fd1c/2222109233.jpg"
        },
        {
            "title": "Twilight of the Gods",
            "id": "ff9dec8b-3674-35a3-aa39-9f9ba3d30b71",
            "image": "http://coverartarchive.org/release/fb27268a-b405-4ade-82ed-e02476987428/2222064701.jpg"
        }
    ]

module.exports = {invalid_mbid, mbid_not_artist, valid_mbid_temptations, description_temptations, valid_mbid_nirvana, description_nirvana, albums_nirvana, mbid_hakan, mbid_cash, mbid_rammstein};
