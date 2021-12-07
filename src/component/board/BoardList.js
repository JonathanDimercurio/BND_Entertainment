import Board from './Board';

function BoardList(props) {
  return (
    <ul>
      {props.boards.map((board) => (
        <Board
            key={board.title}
            title={board.title}
            image={board.image}
            description={props.enteredDescription}
            description={null}
        />
      ))}
    </ul>
  );
}

export default BoardList;
