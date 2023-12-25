import Footer from "../components/Footer/Footer";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import TodoList from "../components/shared/Todolist";
import ViewPage from "../components/Viewpage/ViewPage";
import { prisma } from "@/utils/prisma";
// import { PrismaClient } from "@prisma/client";

//nelly added
// const prisma = new PrismaClient();

async function getData() {
  const data =await  prisma.todo.findMany({
    select:{
      title: true,
      id: true,
      isCompleted:true,
    },
    orderBy:{
      createdAt:"desc",
    }
  });
  return data;
}

const Home=async()=> {
  const data =await getData();
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <Nav/>
      <div className="text-center my-5 flex flex-col gap-4">
        <div className="flex items-center justify-center">
          <h1 className="text-4xl font-bold">To-Do List</h1>
          <Logo/>
        </div>
        <p className="text-1xl font-semibold bio">Use Todo List to make your work <span className="underline">Easier</span>✅</p>
      </div>

      <div className="flex items-center flex-col justify-center">
      <ViewPage/>

      <div className="mt-10 mb-20">
        {
          data.map((todo,id)=>(
            <div className="w-full" key={id}>
              <TodoList todo={todo}/>
            </div>
          ))
        }
      </div>
      </div>

      

      <div className="mt-10">
        <Footer/>
      </div>
    </main>
  );
}

export default Home