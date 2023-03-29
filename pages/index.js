import SayHello from './component/SayHello'
import SayMessage from './component/SayMessage'

export default function Home() {
  return (
    <div>
      <SayHello />
      <SayMessage msg="Welcome WEB422" exclamation="!"/>
      <SayMessage msg="Next.js is Awesome" exclamation="!!!"/>
      <SayMessage />
    </div>
  )
}
