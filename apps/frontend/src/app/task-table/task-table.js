import styled from 'styled-components';
import Logo from 'apps/frontend/src/app/logo/logo';
import PulseButton from 'apps/frontend/src/app/pulse-button/pulse-button';

const tableHeaders = [
  {id: 1, name: 'Name', width: '10%'},
  {id: 2, name: 'Description', width: '40%'},
  {id: 3, name: 'Due data', width: '15%'},
  {id: 4, name: 'Assignees', width: '35%'},
];

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;
`;

const Header = styled.div`
  margin: 16px auto;
  display: flex;
  justify-content: center;
`;

const Control = styled.div`
  display: flex;
  justify-content: right;
`;

const ControlItem = styled.div`
  margin: 16px;
`;

const Table = styled.table`
  width: 100%;
`;

const TableRow = styled.tr`
  width: 100%;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #eee;
  }
`;

const TableHeader = styled.th`
  padding: 8px;
  width: ${({width}) => width};
  text-align: left;
`;

const TableCell = styled.td`
  padding: 8px;
  font-size: 14px;
  border-top: 1px solid #aaa;
`;

const TaskTable = ({tasks}) => {
  return (
    <Container>
      <Header>
        <Logo/>
      </Header>
      <Control>
        <ControlItem>
          <PulseButton text={'revert all'}/>
        </ControlItem>
        <ControlItem>
          <PulseButton text={'publish'}/>
        </ControlItem>
      </Control>
      <Table>
        <thead>
        <TableRow>
          {tableHeaders.map((h) => (
            <TableHeader key={h.id} width={h.width}>
              {h.name}
            </TableHeader>
          ))}
        </TableRow>
        </thead>
        <tbody>
        {tasks.map((task) => (
          <TableRow key={task.name}>
            <TableCell>{task.name}</TableCell>
            <TableCell>{task.description}</TableCell>
            <TableCell>{task.date}</TableCell>
            <TableCell>{task.assignee}</TableCell>
          </TableRow>
        ))}
        </tbody>
      </Table>
      <Control>
        <ControlItem>
          <PulseButton text={'create new task'}/>
        </ControlItem>
      </Control>
    </Container>
  );
};

export default TaskTable;
