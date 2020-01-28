import React from "react"
import Layout from "src/components/layout"

const ClassesWorkshopsPage = _props => {
  return (
    <Layout>
      <div>
        <div>
          <img src="images/classes-workshops/soundlab-banner.jpg" />
        </div>
        <h1>Classes & Workshops</h1>
      </div>
      <div>
        <div>
          <h3>Guitar Lessons</h3>
          <ul>
            <li>
              I offer private guitar lessons at my studio and at Crossroads
              Music
            </li>
            <li>Please contact me with availability.</li>
            <li>
              Tuition: $35 / 45 minutes, $45 / one hour or $120 per month
              includes 4 weekly 45 minute lessons.
            </li>
          </ul>

          <div>
            Beginners will learn rudiments of guitar playing including basic
            chords and songs. Intermediate and advanced players will learn
            specific styles, skills and build repertoire.
          </div>
          <div>
            Styles offered are: fingerpicking, flatpicking, country blues,
            Travis picking, bluegrass, ragtime, folk, rock and pop.
          </div>
        </div>

        <div>
          <h3>Vox Populi - A Harmony Singing Workshop</h3>
          <ul>
            <li>A 10 week class focusing on singing lead and harmonies.</li>
            <li>Contact me for next session dates.</li>
            <li>Enrollment limited to 12 students.</li>
            <li>Tuition; $125-200 sliding scale.</li>
          </ul>

          <div>
            This class will be taught by George Rezendes and Lindsay Hamilton.
            We will work on folk, country, blues and pop tunes. You will learn
            how to find the lead, first and second harmony parts to any song.
            Charts and pre-recorded tracks will be provided for songs we have
            chosen. You will also learn how to make basic lyric/chord charts.
          </div>
        </div>
        <div>
          <button>Email Me</button>
        </div>
      </div>
    </Layout>
  )
}

export default ClassesWorkshopsPage
