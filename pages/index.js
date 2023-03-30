import Clock from './component/Clock'
import SayHello from './component/SayHello'
import SayMessage from './component/SayMessage'
import ShowImg from './component/ShowImg'
import UseState from './component/UseState'
import UseEffect from './component/UseEffect'

export default function Home() {
  return (
    <div>
      <h1>Here it's coming from Clock Component</h1><br />
      <Clock /><br />
      <Clock locale="en-CA" /><br />
      <Clock locale="ko-KO" /><br />

      <SayHello />

      {/* We can pass by string too */}
      <SayMessage msg={'Welcome WEB422'} exclamation="!"/>
      <SayMessage msg="Next.js is Awesome" exclamation="!!!"/>
      <SayMessage /><br />

      {/* Here it's coming from ShowImg component */}
      <ShowImg /> <br />

      <h1>Here it's coming from UseState component</h1><br />
      <UseState />

      <h1>Here it's coming from UseEffect component</h1>
      <UseEffect />
    </div>
  )
}
