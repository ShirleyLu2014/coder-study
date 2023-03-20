// 击鼓传花
import ArrayQueue from "./01-arrayQueue";
function hotPotato(names: string[], n: number) : string | number | undefined{
  if(names.length === 0) return -1
  let namesQueue = new ArrayQueue<string>()
  for(let name of names) {
    namesQueue.enqueue(name)
  }
  while(namesQueue.size() > 1) {
    for(let i = 1; i < n; i++) {
      const name = namesQueue.dequeue()
      if(name) namesQueue.enqueue(name)
    }
    namesQueue.dequeue()
  }
  return namesQueue.dequeue()
}
console.log('----', hotPotato(['1', '2', '3', '4'], 4))