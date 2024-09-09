import { Button } from "antd";
import Header from "./Header";
import Introduction from "./Introduction";

const Dashboard = () => {
  console.log('Supabase URL from env: 123', process.env.SUPABASE_URL);


  return (
    <>
      <Header />
      <Introduction />
      <div className="flex flex-col w-screen px-20 items-start">
        <div>ABOUT</div>
        <div className="flex gap-2">
          <hr className="border-t-2 mt-3 h-4 border-gray-300 w-20"/>
          <div className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque impedit, deleniti ipsa maxime, possimus laborum numquam pariatur, vero vel accusantium ducimus consectetur cupiditate. Culpa ab repudiandae quis praesentium impedit, vitae sed eum perspiciatis neque provident! Repellat reprehenderit pariatur quasi, natus labore quia consectetur dolores atque eius, assumenda, animi minima? Odio alias enim, perferendis perspiciatis esse necessitatibus sit nobis itaque, distinctio reiciendis molestiae ratione ea, eos impedit expedita ducimus aut. Dolore quas eaque numquam maxime possimus, ex fugiat accusamus voluptate repudiandae iusto, molestiae quo itaque esse ut praesentium nemo est minima ea culpa vero! Temporibus rerum numquam harum commodi impedit inventore.</div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
