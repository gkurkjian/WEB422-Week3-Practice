import Clock from './component/Clock'
import SayHello from './component/SayHello'
import SayMessage from './component/SayMessage'
import ShowImg from './component/ShowImg'

export default function Home() {
  return (
    <div>
      <Clock /><br />
      <Clock locale="en-CA" /><br />
      <Clock locale="ko-KO" />
      <SayHello />
      {/* We can pass by string too */}
      <SayMessage msg={'Welcome WEB422'} exclamation="!"/>
      <SayMessage msg="Next.js is Awesome" exclamation="!!!"/>
      <SayMessage />
      <ShowImg />
    </div>
  )
}
