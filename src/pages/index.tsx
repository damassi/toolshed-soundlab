import React from "react"
import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

export default function IndexPage() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/soundlab">SoundLab</Link>
        <Link to="/listen-here">Listen Here</Link>
        <Link to="/classes-workshops">Classes / Workshops</Link>
        <Link to="/gr-music">GR Music</Link>
        <Link to="/lutherie">Lutherie</Link>
      </nav>
      <header>
        <h1>Toolshed SoundLab</h1>
        <h4>
          A comfortable, relaxed recording studio in the heart of Port Townsend
        </h4>
      </header>
      <main>
        <img src="/images/home/studio.jpg" />
        <img src="/images/home/logo.jpg" />
        <img src="/images/home/george.png" />

        <p>
          “music is the most fun you can have without gettin’ into trouble “ -
          Toolshed Do-Right
        </p>

        <p>
          You can now easily stay informed of music and recording events
          happening at Toolshed Soundlab by subscribing to our mailing list
          here.
        </p>

        <button>Subscribe</button>
        <button>Email</button>

        <div>
          <div>
            <img src="/images/home/michaela.jpg" />
          </div>
          <p>
            “My Way Home” Micaela Kingslight’s new album is now finished and
            ready to release on 2/2/2020. You can sample it here:
            https://micaelakingslight.bandcamp.com/ preorder the CD or buy a
            download now. Produced by George Rezendes and Micaela Kingslight
            Recorded and mixed by George Rezendes at ToolShed SoundLab, Port
            Townsend Wa. Mastering and assistant engineering by Camelia Jade
            Lazenby
          </p>
        </div>

        <div>
          <div>
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/309920488&amp;color=ff9900&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"
            ></iframe>
          </div>
          <p>
            This version of Pastures of Plenty, my favorite Woody Guthrie tune,
            was recorded during a session for the Smithsonian-Folkways tribute
            album titled ‘Roll Columbia’ but was not intended for the CD. My
            version of The Song of the Grand Coulee Dam was included on the CD.
            Produced by my good friend Joe Seamons, it features many North-West
            musicians. David and Tracy Grisman accompanied me on mandolin and
            bass on both tunes. notes from Smithsonian and link to project; Roll
            Columbia: Woody Guthrie’s 26 Northwest Songs is a trove of new
            discoveries, and a celebration of Guthrie’s genius and lasting
            contributions to both the history and musical traditions of the
            Pacific Northwest. In 1941, the Bonneville Power Administration
            commissioned Guthrie to write songs to help promote to the public
            the construction of dams along the Columbia River.
            https://tinyurl.com/roll-columbia
          </p>
        </div>
        <div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/XY5de425CLg"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p>
            from the Rattletrap Rukuc recording RedLight Rag in loving memory of
            Mr. Lucas Hicks
          </p>
        </div>
        <div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/9VdG1oicOBA"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p>a live recording of the Blackberry Bushes</p>
        </div>
      </main>
    </div>
  )
}

/*
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <header>
      <h1>Toolshed SoundLab</h1>
      <h3>
        A comfortable, relaxed recording studio in the heart of Port Townsend
      </h3>
    </header>
    <img src="/images/home/logo.jpg" />

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)


*/
