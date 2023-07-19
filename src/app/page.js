import { Header } from "../../components/Header";
import { Task } from "../../components/Task";
import { TaskInput } from "../../components/Taskinput";
import { Footer } from "../../components/Footer";


export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      <Header></Header>
    <div style={{ maxWidth: "400px" }} className="mx-auto"></div>
      <TaskInput></TaskInput>
      <Task title="Read a book"></Task>
      <Task title="Take a shower"></Task>
      <Task title="Sleep"></Task>
      <Footer year='2003' fullname ="Pariwat Woninchan" studentID="650612089"></Footer>
    </div>
  );
}
