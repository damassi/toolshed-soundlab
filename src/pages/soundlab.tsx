import React from "react"
import Layout from "src/components/layout"
import { Flex, Text, Box } from "rebass"
import { Quote } from "src/components/Quote"
import { Spacer } from "src/components/Spacer"
import { Link } from "gatsby"
import { SEO } from "src/components/seo"

const SoundLabPage = _props => {
  return (
    <Layout>
      <SEO title="SoundLab" />
      <Box style={{ textAlign: "center" }}>
        <h1>Music Production & Recording at Toolshed SoundLab</h1>
        <h4>
          I offer music production & recording services at a comfortable studio
          in Port Townsend, WA.
        </h4>
      </Box>
      <Flex>
        <img src="images/toolshed-360.jpg" />
      </Flex>

      <Spacer mb={4} />

      <Box>
        <h3>Features</h3>
        <ul>
          <li>
            16’ x 24’ live room with 16’ vaulted wood ceilings, radiant floor
            heat and a hepa filtered ventilation system
          </li>
          <li>
            12’ x 16’ control room equipped with Burl Audio B32 Summing amp /
            B26 Monitor control & Mackie MCU
          </li>
          <li>
            Microphones: Pearlman, MBHO, Neaumann, B&0, Beyer, Sennheiser, Ear
            Trumpet, Miktek, Beyer, Sony
          </li>
          <li>
            Preamps: Forssell, UA, Vintech, Grace, Langevin, Focusrite, Joe
            Meek, Guido
          </li>
          <li>
            Mac Pro, 16 gig ram, Logic 9 and 10, 16 channels of Lynx Aurora
            conversion and UAD-2 plug-ins
          </li>
          <li>1885 Weber Piano - Brazilian Rosewood Upright Grand</li>
          <li>
            1962 Hammond B3 with 122 Leslie - excellent original condition
          </li>
          <li>Fender Rhodes Model Seventy-Three</li>
          <li>
            Vintage acoustic & electric guitars and amps available for sessions
          </li>
        </ul>
      </Box>

      <Spacer my={4} />

      <hr />

      <Quote>
        “Recording at ToolShed SoundLab was an exceptionally easy and satisfying
        experience, and after four decades of making records, that's really
        saying something! The room itself is a great-sounding space, high
        ceilings and with many instruments hanging on the walls. George got
        great sounds on all of our many different acoustic instruments, the best
        we've had for a long, long time; taking the time to really listen and
        adjust until each miking setup was optimized for its particular
        instruments. His experience as a luthier makes him extra-attuned to the
        sounds of the instruments. George is so easy to work with - friendly,
        professional, relaxed, and an excellent communicator. Even the rough
        mixes sound good!” <br />
        <Text fontSize={2}>Eric and Suzy Thompson</Text>
      </Quote>

      <hr />

      <Spacer my={4} />

      <Box>
        <Flex justifyContent="center">
          <Flex flexDirection="column" width="40%">
            <Box>
              <img src="images/soundlab/george-owner.jpg" height={200} />
            </Box>
            <Text textAlign="center" fontSize={2}>
              George Rezendes owner, engineer, producer, musician
            </Text>
          </Flex>
          <Spacer mx={4} />
          <Flex flexDirection="column" width="40%">
            <Box>
              <img src="images/soundlab/cj.jpg" width="auto" height={200} />
            </Box>
            <Text textAlign="center" fontSize={2}>
              Camelia Jade ( CJ ) Lazenby recording and mastering engineer,
              musician
            </Text>
          </Flex>
        </Flex>

        <Spacer my={4} />
        <hr />
        <Spacer my={4} />

        <Flex justifyContent="space-between">
          <img src="images/soundlab/studio-1.jpg" width="49%" />
          <img src="images/soundlab/studio-2.jpg" width="49%" />
        </Flex>

        <Spacer my={4} />

        <Flex justifyContent="center">
          <Box>
            <img src="images/soundlab/control-room.jpg" />
          </Box>
        </Flex>

        <Spacer my={4} />

        <Box>
          <h3>Remote Recording</h3>
          <p>
            I offer remote recording utilizing a Universal Audio Apollo 8 and
            Vintech 473 Neve style 4 channel Mic Pre. Please inquire about
            availability and rates.
          </p>

          <p>
            Although I do have modern digital recording equipment, my goal is to
            produce music the good old fashioned way, where the music comes
            first; as live and direct as possible - I’m an analog guy in a
            digital world.
          </p>
          <p>
            If you are interested in having me produce and/or record your
            project please contact me for details. I am always happy to discuss
            pre-production needs and concerns.
            <Link to="/contact">Contact me</Link>
          </p>
        </Box>

        <hr />

        <Flex justifyContent="center">
          <Flex justifyContent="center" flexDirection="column" width="50%">
            <Box>
              <img src="images/soundlab/ceiling.jpg" />
            </Box>
            <Box>
              The ceiling for the studio control room was built by Niels Holm
              (rip). I am grateful for his contribution.
            </Box>
          </Flex>
        </Flex>

        <Spacer my={5} />

        <Box>
          <h3>Artists</h3>
          <Flex>
            Suzy & Eric Thompson <br />
            Maria Muldaur
            <br />
            Trio Brasiliero
            <br />
            Tyva Kyzy
            <br />
            Hot Club Sandwich
            <br />
            Crow Quill Night Owls
            <br />
            Gallus Bros.
            <br />
            Below the Salt
            <br />
            Inkwell Rhythm Makers
            <br />
            Like A Child / Level Bros.
            <br />
            Mark Pearson / Bothers Four
            <br />
            Port Townsend Community Choir
            <br />
            Elaine Noel
            <br />
            The Aimees
            <br />
            Famous Lucy
            <br />
            Wooly Breeches
            <br />
            Blackberry Bushes
            <br />
            Ben & Joe w/ Phil Wiggins
            <br />
            Rattletrap Ruckus
            <br />
            Ben Hunter & Joe Seamons
            <br />
            Cort Armstrong / Hucksters
            <br />
            Clay Bartlett
            <br />
            Sam Doores
            <br />
            Deobrat Mishra
            <br />
            Shady Grove
            <br />
            Dhoom
            <br />
            Khrome
            <br />
            Jake Wolf
            <br />
            Daniel Mackie
            <br />
            Usana / Love Doll Swinger
            <br />
            Linda Vale
            <br />
            Happanstance
            <br />
            Whiskey Puppy
            <br />
            Janna Marit
            <br />
            In Droves
            <br />
            Micaela Kingslight
            <br />
            Di Trani Brothers
            <br />
            Alanna Dailey
            <br />
            Mille Ulla Ruud
            <br />
            Stubby / Brian Stabile
            <br />
            Faith Pray
            <br />
            Paul Chasman / Last of Us Soundtrack
            <br />
            Sky Ride - Brenda Hunter & Mary Tullin
            <br />
            O.M.G.S.
            <br />
            Pete Toyne
            <br />
            Mold On The Rye
            <br />
            Dave Sheehan
            <br />
            Dukes Of Dabob
            <br />
            Trillium
            <br />
            David Cooper
            <br />
            Tony Flaggs
            <br />
            Lis Nagy
            <br />
            Jack Reid
            <br />
            David Vohs
          </Flex>
        </Box>
      </Box>
    </Layout>
  )
}

export default SoundLabPage
