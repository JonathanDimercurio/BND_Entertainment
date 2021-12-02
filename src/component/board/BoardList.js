import Board from './Board';

function BoardList(props) {
    let i = 1;
  return (
    <ul>
      {props.boards.map((board) => (
        <Board
            key={board.title + i++}
            title={board.title}
            imageURL={board.imageURL}
            description={props.enteredDescription}
        />
      ))}
    </ul>
  );
}

export default BoardList;
