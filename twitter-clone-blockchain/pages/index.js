import Sidebar from '../components/Sidebar'
import Feeds from '../components/Home/Feeds'
import Widgets from '../components/Widgets'

const style = 
{wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
content: `max-w[1400px] w-2/3 flex justify-between`
}

export default function Home() {
  return 
  <div className={style.wrapper}>
    <div className={style.content}>
      <Sidebar />
      <Feeds />
      <Widgets />
    </div>
  </div>
}