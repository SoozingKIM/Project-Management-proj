import NewTask from "./NewTask";

function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4 ">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 ? (
        <p className="text-stone-800 my-4">
          This project does not has any tasks yet.
        </p>
      ) : (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((item) => {
            return (
              <li key={item.id} className="flex justify-between my-4">
                <span>{item.text}</span>
                <button
                  onClick={() => onDelete(item.id)}
                  className="text-stone-700 hover:text-red-500"
                >
                  Clear
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default Tasks;
