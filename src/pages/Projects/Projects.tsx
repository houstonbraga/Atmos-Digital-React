import { GridContainer } from "@/components/GridContainer";
import { Header } from "../../components/Header/Header";
import { HandDrawnWave } from "@/components/HandDrawnWave";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, TrashIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

interface Person {
  id: number;
  name: string;
}

const initialItems: Person[] = [
  {
    id: 1,
    name: "houston",
  },
  {
    id: 2,
    name: "theo",
  },
  {
    id: 3,
    name: "carol",
  },
];


export function QueueList() {
  const [queueName, setQueueName] = useState('')
  const [queue, setQueue] = useState<Person[]>(initialItems);
  
  function handleAddQueueClick() {
    setQueue([
      {
        id: queue.length + 1,
        name: queueName,
      },
      ...queue,
    ]);

    setQueueName('');
  }

  function handleDeletePerson(personId: number) {
    setQueue(queue.filter((person) => person.id !== personId));
  }

  return (
    <div className="mt-20 flex flex-col items-center gap-5">
      <h1>Coloque seu nome na fila </h1> <ArrowDown />
      <label className="flex justify-center items-center gap-2">
        <Input placeholder="Name" value={queueName} onChange={(e) => setQueueName(e.target.value)}/>
        <Button variant="default" onClick={handleAddQueueClick}>Enviar</Button>
      </label>

      <ul className="flex flex-col items-center">
        {queue.map((person => { 
          return (
            <div key={person.id} className="flex items-center gap-2 mb-3">
              <li >{person.name}</li>
              <Button
                variant="outline"
                onClick={() => handleDeletePerson(person.id)}
              >
                <TrashIcon className="text-amber-400" />
              </Button>
            </div>
          )
        }))}
      </ul>
    </div>
  );
}

const Projects = () => {
  
  return (
    <div className="flex flex-col justify-center items-center relative">
      <Header />
      <GridContainer className="flex flex-col gap-5 justify-center items-center">
        <div className="relative inline-block mt-20">
          <h1 className="font-gurajada text-5xl text-amber-400 relative z-10 px-4">
            Nossos projetos
          </h1>
          <HandDrawnWave />
        </div>
        <QueueList />
      </GridContainer>
    </div>
  );
};

export default Projects;
